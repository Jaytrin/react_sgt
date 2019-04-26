import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import '../assets/css/app.scss';
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'
import axios from 'axios';
import AddStudents from './addStudents';
import Table from './table';


//install react router dom
//setup routings
//create two class components
// Add students & Table
//Table to be displayed on the home route /
//AddStudents to be displayed on /add-student

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            studentGrades: null
        }

        this.addStudent = this.addStudent.bind(this);
    }

    componentDidMount(){
            this.getStudents();
    }

    getStudents(){
        axios.get('/data/student_grades.json').then( resp => {
            this.setState({
                studentGrades: resp.data.studentGrades
            })
        })
    }

    addStudent(student){
        this.setState = {
            studentGrades: [...this.state.studentGrades, student]
        }
    }

    render(){
        return(
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
                <Route exact path='/' render={(routingProps)=> {
                    return <Table studentGrades={this.state.studentGrades} {...routingProps}/>}
                } />
                <Route path='/add-student' component={(routingProps)=>{
                    return <AddStudents {...routingProps} add={this.addStudent} />
                }} />
            </div>
        )
    }
}

export default App;
