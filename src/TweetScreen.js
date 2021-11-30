import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Tweet from "./Tweet";

const TweetScreen = () => {
  const params = useParams();
  const [tweet, setTweet] = useState({tweetedBy: {}});
  const findTweetById = () =>
    fetch(`http://localhost:8080/api/tweets/${params.tweetId}`)
      .then(res => res.json())
      .then(tweet => setTweet(tweet));
  useEffect(findTweetById, []);
  const [replies, setReplies] = useState([]);
  const findReplies = () =>
    fetch(`http://localhost:8080/api/tweets/${params.tweetId}/replies`)
      .then(res => res.json())
      .then(replies => setReplies(replies));
  useEffect(findReplies, [])
  return(
    <div>
      <Tweet tweet={tweet}/>
      {
        replies.length > 0 &&
        <div>
          <h4>Replies</h4>
          <ul>
            {
              replies.map(reply =>
                <li key={reply.replyId}>
                  <Tweet tweet={reply.reply}/>
                </li>)
            }
          </ul>
        </div>
      }
    </div>
  );
};

export default TweetScreen;