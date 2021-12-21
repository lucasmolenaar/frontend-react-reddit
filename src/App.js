import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import SubredditPage from "./pages/SubredditPage/SubredditPage";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/'>
                <HomePage />
            </Route>

            <Route path='/subreddit/:subredditName'>
                <SubredditPage />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
