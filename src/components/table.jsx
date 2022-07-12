import React from 'react';
import TodoList from './list';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { load } from '../features/todo.js/todoSlice';


export default function Table () {
    let dispatch = useDispatch();
    dispatch(load());
    let todoList = useSelector(state => state.todo.todos);
    let first = todoList.filter((elem) => elem.type === 1);
    let second = todoList.filter((elem) => elem.type === 2);
    let third = todoList.filter((elem) => elem.type === 3);
    let fourth = todoList.filter((elem) => elem.type === 4);

    return <table border='1' className='table'>
        <tbody>
            <tr>
                <th></th>
                <th>URGENT</th>   
                <th>NOT URGENT</th>   
            </tr>
            <tr>
                <th className='vertical'>IMPORTANT</th>
                <td className='table-data'><TodoList todos={first} /></td>
                <td className='table-data'><TodoList todos={second} /></td>
            </tr>
            <tr>
                <th className='vertical'>NOT IMPORTANT</th>
                <td className='table-data'><TodoList todos={third} /></td>
                <td className='table-data'><TodoList todos={fourth} /></td>
            </tr>
        </tbody>
    </table>
}