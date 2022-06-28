import React from 'react';

import Input from './components/input';
import TodoList from './components/list';
import './App.css';

function App() {
    return <div className='container'>
        <div className='input_container'>
            <Input />
        </div>
    <div className='list'>
            <TodoList />
    </div>
  </div>
}

export default App;