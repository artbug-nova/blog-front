import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './forms/create/createPost';
import Like from './forms/create/createLike';
import Main from './forms/main';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/Like'>
          <Like />
        </Route>
        <Route path='/Dom'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
