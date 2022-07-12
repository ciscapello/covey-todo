import React from 'react';
import Input from '../components/input';
import Table from '../components/table';


export default function AppTodo() {
    return <div className='container'>
        <div className='input_container'>
            <Input />
        </div>
        <div className='list'>
            <Table />
        </div>
    </div>
}