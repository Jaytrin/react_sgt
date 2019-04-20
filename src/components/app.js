import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/app.scss';
import React from 'react';
import AddStudents from './addStudents';
import Table from './table';
import {Route, Link} from 'react-router-dom';


//install react router dom
//setup routing
//create two class components
// Add students & Table
//Table to be displayed on the home route /
//AddStudents to be displayed on /add-student

const App = () => (
    <div className='container centered'>
        <div>
            <h1>Student Grade Table</h1>
        </div>

        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/add-student'>Add Student</Link>
            </li>
        </ul>

        <Route exact path='/' component={Table} />
        <Route path='/add-student' component={AddStudents} />
    </div>
);

export default App;
