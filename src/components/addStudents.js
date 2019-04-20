import React, {Component} from 'react';

class AddStudents extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </div>
        )
    }
}

export default AddStudents;