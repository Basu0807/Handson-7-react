import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate,useLocation } from 'react-router-dom'
import { EditStudent } from './StudentSlice'




const EditData = () => {
  const dispatch= useDispatch()
  const IdValue = useLocation().state;
    // console.log(IdValue);
    const StuData =useSelector((detail)=>detail.data).filter((item)=>item.id===IdValue)
    // console.log(StuData);

    const {Name,Age,Course,Batch}= StuData[0];


   const Navi = useNavigate()

const [newName,setName]=useState(Name)
const [newAge,setAge]=useState(Age)
const [newBatch,setBatch]=useState(Batch)
const [newCourse,setCourse]=useState(Course)
   


  
  
  const ClickUpdate=(e)=>{
    e.preventDefault()
    dispatch(EditStudent({
      id:IdValue,
      newName,
      newAge,
      newBatch,
      newCourse

    }))

    Navi('/student')
  
  }
  return (
    <>
{/* <h1>Edit Student details</h1> */}
<form className='form' onSubmit={ClickUpdate}>
  <div className='box1'>
    <div>
    <label htmlFor='Name'>Name</label>
  <input type='text' value={newName} id='Name'  onChange={(e)=>setName(e.target.value)} required/>
    </div>
  
  <div><label htmlFor='Age'>Age</label>
  <input type='text' value={newAge} id='Age'onChange={(e)=>setAge(e.target.value)} required/>
  </div>
  
  </div>

  <div className='box1'>
    <div>
    <label htmlFor='Course'>Course</label>
  <input type='text' value={newCourse} id='Course' onChange={(e)=>setCourse(e.target.value)} required/>
    </div>
  
<div>
<label htmlFor='Batch'>Batch</label>
  <input type='text' value={newBatch} id='Batch'  onChange={(e)=>setBatch(e.target.value)} required/>
</div>
 
  </div>

  
    <div className='btn'>
    <button onClick={()=>Navi('/student')}>Cancel</button>
    <button type='submit'>Submit</button>
    </div>
  
  
  
</form>
    
    

    </>
  )
}

export default EditData;