// index.js
import React from "react";
import ReactDOM from "react-dom";
import Provider from 'react-redux';
import Store from './store.js';
import App from "./components/App/app.js"
// import "./styles.css"

document.addEventListener( "DOMContentLoaded", () => {
    const reactNode = document.getElementById( "react-node" );

    if ( reactNode ) {
      ReactDOM.render(
       <Provider store={ store }>
           <Router history={ browserHistory }>
               <Route path="/" component={ App }>
               </Route>
           </Router>
       </Provider>
   , reactNode );
   }
} );
