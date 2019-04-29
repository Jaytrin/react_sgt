import React, {Component} from 'react';
import Input from './input';
import NavLink from './nav_link';

class AddStudent extends Component{

    state = {
        name: '',
        course: '',
        grade: ''
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    handleAddStudent = (event) => {
        event.preventDefault();
        this.props.add({...this.state});
        //Below will redirect home to see if the list got addded.
        this.props.history.push('/');
    }

   

    render(){

        const {name, course, grade} = this.state;
        return(
            <div>
                <h1 className="center">Add Student</h1>
                <NavLink color="blue darken-2" text="View Grade Table" to="/"/>

                <form onSubmit={this.handleAddStudent}>

                    <div className="row">
                        <Input label="Student Name" name="name" value={name} onChange={this.handleInputChange} />
                    </div>
                    <div className="row">
                        <Input label="Student Course" name="course" value={course} onChange={this.handleInputChange} />
                    </div>
                    <div className="row">
                        <Input label="Student Grade" name="grade" value={grade} onChange={this.handleInputChange} />
                    </div>

                    <div className="right-align">
                        <button className="btn blue">Add Student</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default AddStudent;
