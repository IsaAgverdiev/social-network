import React from 'react'
import "./styles/App.scss";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

function App(props) {

  return (
    <BrowserRouter>
      <div className="app-wrapper grid__wrapper">
        <Header />
        <Aside />
        <Main state={props.state}
          addPost={props.addPost}
          addMessage={props.addMessage}
          updateNewPostText={props.updateNewPostText}
          updateNewMessageText={props.updateNewMessageText}
        />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
