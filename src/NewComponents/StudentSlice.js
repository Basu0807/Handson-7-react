import { createSlice } from "@reduxjs/toolkit";

const StudentSlice=createSlice({
    name:'Student',
    initialState:
        [
        
            {
                id: 1,
                Name: "John",
                Age: "24",
                Course: "MERN",
                Batch: "October",
                Change:"Edit"
            },
            {
                id: 2,
                Name: "Doe",
                Age: "25",
                Course: "MERN",
                Batch: "November",
                Change:"Edit"
            },
            {
                id: 3,
                Name: "Biden",
                Age: "26",
                Course: "MERN",
                Batch: "September",
                Change:"Edit"
            },
            {
                i: 4,
                Name: "Barar",
                Age: "22",
                Course: "MERN",
                Batch: "September",
                Change:"Edit"
            },
            {
                id: 5,
                Name: "Christ",
                Age: 23,
                Course: "MERN",
                Batch: "October",
                Change:"Edit"
        
            },
            {
                id: 6,
                Name: "Elent",
                Age: 24,
                Course: "MERN",
                Batch: "November",
                Change:"Edit"
            }
    ],
reducers:{
    
    AddStudent:(state,action)=>{
        state.push(action.payload);
    },

    EditStudent:(state,action)=>
    {
const {id,newName,newAge,newBatch,newCourse}=action.payload;
const existingStudent=state.find((student)=>student.id===id);
existingStudent.Name=newName;
existingStudent.Age=newAge;
existingStudent.Batch=newBatch;
existingStudent.Course=newCourse; 
}
}
})


export default StudentSlice.reducer;
export const {AddStudent,EditStudent}=StudentSlice.actions