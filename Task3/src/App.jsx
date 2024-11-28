import React,{useState} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Form  from './page/Form'
import './App.css'
import ShowData from './page/ShowData'
export default function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}></Route>
          <Route path="/ShowData" element={<ShowData/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}
