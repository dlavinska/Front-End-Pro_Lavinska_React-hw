import './App.css';
import React from "react";
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Navigation from './components/Navigation';
import UsersList from './components/UsersList';
import AlbumsList from './components/AlbumsList';
import PhotosList from './components/PhotosList';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route exact path='/users' component={UsersList} />
        <Route path='/users/:userId/albums' component={AlbumsList} />
        <Route path='/albums/:albumId/photos' component={PhotosList} />
        <Redirect to='/users'/>
      </Switch>
      
    </BrowserRouter>

  );
}

export default App;
