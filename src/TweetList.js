import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

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
          <p>{tweet.tweet}</p>
          Likes: {tweet.likesCount}
        </li>
        )
      }
    </ul>
  );
};
export default TweetList;