import React, {Component} from 'react';
import Input from './input';

class AddStudents extends Component{

    state = {
        name: '',
        course: '',
        grade: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('props', this.props);
        this.props.add({...this.state});
        console.log('State: ', this.state);
        this.resetForm();

        //Below will redirect home to see if the list got addded.
        this.props.history.push('/');
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    resetForm = (event) => {
        this.setState({
            name: '',
            course: '',
            grade: ''
        });
    }

    render(){

        const {name, course, grade} = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                <div className="row">
                    {/* <div className="input-field col s12">
                        <input id="name" type="text" name="name" value={name} onChange={this.handleChange} autoComplete="Off"/>
                        <label htmlFor="name">Student Name</label>
                    </div> */}
                    {/* <Input name={name} handleChange={this.handleChange} type="name" labelName="Student Name"/>  */}
                    <Input id="name" type="text" name="name" value={name} onChange={this.handleChange} autoComplete="off" label="Student Name"/>
                </div>
                <div className="row">
                    {/* <div className="input-field col s12">
                        <input id="course" type="text" name="course" value={course} onChange={this.handleChange} autoComplete="Off"/>
                        <label htmlFor="course">Course</label>
                    </div> */}
                    <Input id="course" type="text" name="course" value={course} onChange={this.handleChange} autoComplete="off" label="Course"/>
                </div>
                <div className="row">
                    {/* <div className="input-field col s12">
                        <input id="grade" type="text" name="grade" value={grade} onChange={this.handleChange} autoComplete="Off"/>
                        <label htmlFor="grade">Grade</label>
                    </div> */}
                    <Input id="grade" type="text" name="grade" value={grade} onChange={this.handleChange} autoComplete="off" label="Grade"/>
                </div>
                <div className="right-align">
                    <button className="btn blue">Submit</button>
                </div>

                </form>
            </div>
        )
    }
}

export default AddStudents;
