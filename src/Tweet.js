const Tweet = ({tweet}) => {
  return(
    <div>
      <b>
        {tweet.tweetedBy.firstName}
        &nbsp;{tweet.tweetedBy.lastName}
      </b>
      {
        tweet.tweetedBy.verified &&
        <label>&nbsp;Verified</label>
      }
      &nbsp;@{tweet.tweetedBy.username}
      &nbsp;{JSON.stringify((new Date()).getHours() - (new Date(tweet.tweetedOn)).getHours())}h
      <p>{tweet.tweet}</p>
      Likes: {tweet.likesCount}
      <hr/>
    </div>
  );
}
export default Tweet;