import {Message} from './components/Messages'
import { ClickHandler } from './components/ClickHandler';
import './App.css';
import './styles.css';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import Form from './components/Form';
import { PostList } from './components/PostList';
import PostForm from './components/PostForm';
import Counter from './components/Counter';
import HookMouse from './components/HookMouse';
import { useState } from 'react';
import IntervalCounter from './components/IntervalCounter';
import FetchData from './components/FetchData';
import FetchDataReducer from './components/FetchDataReducer';
import DocTitleOne from './components/DocTitleOne';
import CounterOne from './components/CounterOne';

function App() {
  // const [display, setDisplay] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        {/* <Message /> */}
        {/* <ClickHandler /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <Form /> */}
        {/* <PostList /> */}
        {/* <PostForm /> */}
        {/* <Counter /> */}
        {/* <button onClick={() => setDisplay(!display)}>Toggle Component</button>
        {display && <HookMouse />} */}
        <IntervalCounter />
        {/* <FetchData /> */}
        <FetchDataReducer />
        {/* <DocTitleOne /> */}
        <CounterOne />
      </header>
    </div>
  );
}

export default App;
