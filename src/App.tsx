import React from 'react';
import logo from './logo.svg';
import './App.less';
import styles from './test.module.less'
import { Button } from 'antd'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React test
        </a>
        <Button>test</Button>
        <a href="_blank" className={styles.test}>haha</a>
      </header>
    </div>
  );
}

export default App;
