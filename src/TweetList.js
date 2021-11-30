import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Tweet from "./Tweet";

const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  const params = useParams();
  const findTweetsByUserId = () =>
    fetch(`http://localhost:8080/api/users/${params.userId}/tweets`)
      .then(res => res.json())
      .then(tweets => setTweets(tweets));
  useEffect(findTweetsByUserId, [])
  return(
    <ul>
      {
        tweets.map(tweet =>
        <li key={tweet.tweetId}>
          <Link to={`/tweets/${tweet.tweetId}`}>
            More...
          </Link>
          <Tweet tweet={tweet}/>
        </li>
        )
      }
    </ul>
  );
};
export default TweetList;