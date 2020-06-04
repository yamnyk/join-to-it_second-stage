import React from 'react';
import './App.scss'
import CustomCalendar from "./components/CustomCalendar";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import {Redirect, Route, Switch} from "react-router-dom";
import OtherPagesMessage from "./components/OtherPagesMessage";
import generateID from "./utils/generateID";

function App() {
  const _SIDEBAR_ITEMS = [
      {id: generateID('menuItem'), text: "Home", linkURL: "/", icon: <i className="fas fa-home"/>, altMsg: "home"},
      {
        id: generateID('menuItem'),
        text: "Dashboard",
        linkURL: "/dashboard",
        icon: <i className="fas fa-grip-vertical"/>,
        altMsg: "home"
      },
      {
        id: generateID('menuItem'),
        text: "Inbox",
        linkURL: "/inbox",
        icon: <i className="fas fa-envelope"/>,
        altMsg: "home"
      },
      {
        id: generateID('menuItem'),
        text: "Products",
        linkURL: "/products",
        icon: <i className="fas fa-barcode"/>,
        altMsg: "home"
      },
      {
        id: generateID('menuItem'),
        text: "Invoices",
        linkURL: "/invoices",
        icon: <i className="fas fa-receipt"/>,
        altMsg: "home"
      },
      {
        id: generateID('menuItem'),
        text: "Customers",
        linkURL: "/customers",
        icon: <i className="fas fa-user"/>,
        altMsg: "home"
      },
      {
        id: generateID('menuItem'),
        text: "Chat Room",
        linkURL: "/chat",
        icon: <i className="fas fa-comment-alt"/>,
        altMsg: "home"
      },
      {
        id: generateID('menuItem'),
        text: "Calendar",
        linkURL: "/calendar",
        icon: <i className="fas fa-calendar-alt"/>,
        altMsg: "home"
      },
      {
        id: generateID('menuItem'),
        text: "Help Center",
        linkURL: "/help",
        icon: <i className="fas fa-question-circle"/>,
        altMsg: "home"
      },
      {
        id: generateID('menuItem'),
        text: "Settings",
        linkURL: "/settings",
        icon: <i className="fas fa-cog"/>,
        altMsg: "home"
      }
    ],
    userInstance = {name: 'John Doe', imgUrl: './img/user_avatar.png'};
  return (
    <div>
      <SideBar items={_SIDEBAR_ITEMS}/>
      <NavBar user={userInstance}/>
      <Switch>
        <Route path={"/calendar"} component={CustomCalendar} exact/>
        <Route path={"/error"} component={OtherPagesMessage} exact/>
        <Route path={"/"} exact/>
        <Redirect from={"*"} to={"/error"}/>
      </Switch>
    </div>
  );
}

export default App;
