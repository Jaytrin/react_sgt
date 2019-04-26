// import React from 'react';
// import StudentRow from './student_row';

// //In Table component, create a get student method
// //Use axios to call the dummy_data file
// //Get request to the URL "/data/student_grades.json"
// //Call getStudents once the component is added to the DOM
// //In the render method, loop over student data to build rows

// class Table = props => {

//     renderTable(){
//         const {studentGrades} = this.props;
    
//         //If the data is still loading
//         if(!studentGrades){
//             return <h1 className="center">Loeading Student Data</h1>
//         }
    
//         //If there is no data returned
//         if(!studentGrades.length){
//             return <h1 className="center">No Student Data</h1>
//         }
    
//         const rowElements = studentGrades.map(student => {
//             return (
//                 <StudentRow key={student.id} {...student}/>
//             )
//         })
    
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                     <td>ID</td>
//                     <td>Name</td>
//                     <td>Course</td>
//                     <td>Grade</td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rowElements}
//                 </tbody>
//             </table>
//         )
//     }


//         return(
//             <div>
//                 <h1>Table</h1>
//                 {this.renderTable()}
//             </div>
//         )
// }



// export default Table;

import React, { Component } from 'react';
import StudentRow from './student_row';

class Table extends Component {

    renderTable(){
        const { studentGrades } = this.props;

        if(!studentGrades){
            return <h1 className="center">Loading Student Data</h1>
        }

        if(!studentGrades.length){
            return <h1 className="center">No Student Data</h1>
        }

        const rowElements = studentGrades.map(student => {
            return <StudentRow key={student.id} {...student}/>;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {rowElements}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div>
                <h1 className="center">Student Grade Table</h1>

                {this.renderTable()}
            </div>
        );
    }
}

export default Table;
