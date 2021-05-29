import "antd/dist/antd.css"
// import BookDetail from './components/HomeScreen';
import AddBooks from './components/AddBooks';
import { useEffect } from "react";
import { app } from "./base";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {BookDetail} from "./components/BookDetail";
import HomeScreen from "./components/HomeScreen"

function App() {
 
  return (
    <div >
     <Router>
       <Switch>
         <Route exact path="/" component={HomeScreen}  />
         <Route exact path="/product/:id" component={BookDetail}  />
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
