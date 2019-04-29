import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import '../assets/css/app.scss';
import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import axios from 'axios';
import AddStudent from './addStudents';
import Table from './table';


//install react router dom
//setup routings
//create two class components
// Add students & Table
//Table to be displayed on the home route /
//AddStudents to be displayed on /add-student
let tempId = 100;

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            studentGrades: null
        }

        this.addStudent = this.addStudent.bind(this);
    }

    addStudent(student){
        console.log('addStudent ran');
        student.id = tempId++;

        student.grade = parseFloat(student.grade);

        this.setState({
            studentGrades: [...this.state.studentGrades, student]
        })
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



    render(){
        return(
            <div className='container centered'>
                <Route exact path='/' render={(routingProps)=> {
                    return <Table {...routingProps} studentGrades={this.state.studentGrades} />}
                } />

                <Route path='/add-student' render={(routingProps)=>{
                    return <AddStudent {...routingProps} add={this.addStudent} />
                }} />
            </div>
        )
    }
}

export default App;
