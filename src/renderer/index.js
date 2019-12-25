import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store'
import LeftBar from './components/common/leftBar'
import Task from './components/task'
import './styles/index.scss'
React.Component.prototype.$store = store
function App (){
  return <div className="App">
          <LeftBar></LeftBar>
          <Router>
            <Route path="/" exact component={Task}></Route>
          </Router>
         </div>
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
