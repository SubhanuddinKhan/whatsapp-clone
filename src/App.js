
import React,{useState} from "react";
import "./App.css";
import { CommonContext } from "./components/CommonContext";
import Sidebar from "./components/Sidebar";
// import Mui from './components/Mui';
// import Profile from './components/Profile';
// import Update from './components/Update';
import Chat from './components/Chat'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from "./components/Login";
import {useStateValue} from "./features/StateProvider";
import Frontinfo from "./components/Frontinfo";



function App(){

  const [{ user }, dispatch] = useStateValue();
  
  // const [user, setUser] = useState(null);
  
// class App extends React.Component {
  // constructor() {
  //   super();

  //   this.updateColor = () => {
  //     this.setState({
  //       color: "red",
  //     });
  //   };

    // counter function start

    // this.updateCounter=()=>{
    //   this.setState({
    //     counter: this.state.counter + 1
    //   })
    // }

    // this.state = {
    //   color: "green",
    //   updateColor: this.updateColor,
      // counter:0,
      // updateCounter:this.updateCounter
  //   };
  // }

  // render() {
    return (
      // <CommonContext.Provider value={this.state}>
        <div className="app">
          {!user ? (
            <Login />
          ): (

          
          <div className="app__body">
<BrowserRouter>
  <Switch>
    
  <Route path="/rooms/:roomId">

   
            <Sidebar />

            <Chat />
            </Route>  

            <Route path="/">
            <Sidebar />
            {/* <Chat /> */}
            <Frontinfo />
            </Route>
            </Switch>
            </BrowserRouter>  
          </div>
          )}
        </div>
      // </CommonContext.Provider>
          
    );
  }
// }

export default App;
