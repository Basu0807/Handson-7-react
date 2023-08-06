import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddStudent } from './StudentSlice';
import { useNavigate } from 'react-router-dom';


const AddData = () => {

const StudentData =useSelector((state)=>state.data)
console.log(StudentData);

const dispatch=useDispatch();
const Navi = useNavigate();

const [Name,setName]=useState("")
const [Age,setAge]=useState("")
const [Batch,setBatch]=useState("")
const [Course,setCourse]=useState("")


  


const ClickUpdate=(e)=>{
  e.preventDefault()

  dispatch(AddStudent({
    id:StudentData.length+1,
    Name,
    Age,
    Batch,
    Course
  }))
  
  Navi('/student')
 

}
  return (
    <>
    <div>

<form className='form' onSubmit={ClickUpdate}>
  <div className='box1'>
    <div>
    <label htmlFor='Name'>Name</label>
  <input type='text' value={Name} id='Name' placeholder="Enter your Name"onChange={(e)=>setName(e.target.value)} required/>
    </div>
  
  <div><label htmlFor='Age'>Age</label>
  <input type='text' value={Age} id='Age' placeholder="Enter your Age" onChange={(e)=>setAge(e.target.value)} required/>
  </div>
  
  </div>

  <div className='box1'>
    <div>
    <label htmlFor='Course'>Course</label>
  <input type='text' value={Course} id='Course' placeholder="Course" onChange={(e)=>setCourse(e.target.value)} required/>
    </div>
  
<div>
<label htmlFor='Batch'>Batch</label>
  <input type='text' value={Batch} id='Batch' placeholder="Enter your Batch" onChange={(e)=>setBatch(e.target.value)} required/>
</div>
 
  </div>

  
    <div className='btn'>
    <button onClick={()=>Navi('/student')}>Cancel</button>
    <button type='submit'>Submit</button>
    </div>
  
  
  
</form>
</div>

    
    
    
    </>


  )
}

export default AddData;