import React from "react";
import { Link } from 'react-router-dom'
import "./style.css"
 import {useSelector}  from "react-redux";
 


 function Student(){
const StuData = useSelector((state)=>state.data)
// console.log(StuData);
    
return(
        <> 
        <div className="container">
        <h1>Student Details</h1>
        <Link  to="/student/AddData" id="StudentDetails">Add New Students</Link>
        </div>
        
        
        <table className="tableContainer">
            <thead> 
        <tr>
         <th>Name</th>   
         <th>Age</th>   
         <th>Course</th>   
         <th>Batch</th>   
         <th>Change</th>   
        
        </tr>
        </thead>
       
        
            {StuData.map((item,index)=>{
                // console.log(index);
                return(
                    <tbody key={index}>
                    <tr>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                    <td><Link to="/student/EditData" state={item.id}>Edit</Link></td>
                    

                    </tr>
                    </tbody>
                   
                    
                   
                )
            })}
        
      </table>
        
      
            
            
      
        </>
    )
 }

 export default Student;