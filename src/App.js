import UserList from "./UserList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TweetList from "./TweetList";
import TweetScreen from "./TweetScreen";

function App() {
  return (
    <div style={{padding: 10}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/users/:userId" element={<TweetList/>}/>
          <Route path="/tweets/:tweetId" element={<TweetScreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
