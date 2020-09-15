import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import  Classclick from './components/ClassClick'
import EventBinding from './components/EventBinding'
import ParentComponent from './components/ParentCompnent'
import UserGreeting from './components/UserGreeting'
import PersonList from './components/PersonList'
import NameList from './components/NameList'
import Stylesheets from './components/Stylesheets'
import Inlinestyle from './components/inlinestyle'
import styles from './apps.module.css'

function App() {
  return (
    <div className="App">
      <h1 className={styles.success}>success</h1>
      {/* <Greet name="Harshad"/>
      <Greet name="Suresh"/>
      <Welcome name = "Ramesh" />
      <Hello />
      <Message />
      <Counter /> */}
      {/* <FunctionClick />
      <Classclick /> */}
      {/* <EventBinding /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <PersonList /> */}
      {/* <NameList /> */}
      {/* <Stylesheets primary={true}/> */}
      {/* <Inlinestyle /> */}
    </div>
  );
}

export default App;
