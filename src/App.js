import UserList from "./UserList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TweetList from "./TweetList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/users/:userId" element={<TweetList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
