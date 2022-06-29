import React from 'react';

import Input from './components/input';
import Table from './components/table';
import './App.css';

function App() {
    return <div className='container'>
        <div className='input_container'>
            <Input />
        </div>
    <div className='list'>
            <Table />
    </div>
  </div>
}

export default App;