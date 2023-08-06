import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import AddData from './AddData'
import EditData from './EditData'

const RouteCompo = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/student/AddData' element={<AddData/>}/>
        <Route path='/student/EditData' element={<EditData/>}/>
    </Routes>
    </>
  )
}

export default RouteCompo