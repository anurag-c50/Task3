import React, { useRef, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
export default function From() { 
  const navigate=useNavigate()
  const [UserInput,setUserInput]=useState({
    first_name:"",
    last_name:"",
    Email:"",
    PhoneNo:"",
    State:"",
    City:"",
    UploadImage:""
  })
  const [IsImageSelected,setIsImageSelected]=useState(false)
  const [Error,setError]=useState(false)
  const [Error1,setError1]=useState(false)
  const [Error2,setError2]=useState(false)
  const Validation=(UserInput)=>{
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(UserInput.Email.length!==0&&!emailRegex.test(UserInput.Email)){
      setError(true)
      return true
    }else if(UserInput.first_name===""||UserInput.last_name===""||UserInput.Email===""||UserInput.PhoneNo===""||UserInput.State===""||UserInput.City===""||UserInput.UploadImage===""){
      setError2(true)
      console.log(3)
      return true
    }else if(UserInput.PhoneNo.length!==10){
      setError1(true)
      return true
    }else{
      setError(false)
      setError1(false)
      setError2(false)
      return false
    }
  }
  const [ImageButtonName,setImageButtonName]=useState("Please Select Profile Pic")
  const fileTake=useRef(null)
  const OnChangeData=(e)=>{
    if(e.target.files){
      e.preventDefault()
      setUserInput({ ...UserInput, [e.target.name]: e.target.files[0] });
      setIsImageSelected(true)
      setImageButtonName(e.target.files[0] .name)
    }else if(e.target.name==="Email"||e.target.name==="PhoneNo"){
      setUserInput({ ...UserInput, [e.target.name]: e.target.value })
    }else{
      const reg=/^([^0-9$%]*)$/;
      if (reg.test(e.target.value)) {
        setUserInput({ ...UserInput, [e.target.name]: e.target.value })
      }
    }
    };
    
    const SubmitData=(e)=>{
      e.preventDefault()
      if(Validation(UserInput)){
        console.log(6)
        return
      }
      navigate("/ShowData",this.state=UserInput)
    }
    const MaxLength=(e)=>{
      if (e.target.value.length > 10){
         e.target.value = e.target.value.slice(0, 9)
      }
    }
    const Takepic=(e)=>{
      e.preventDefault()
      fileTake.current.click()
    }
  return (
    <div className='Conatiner'> 
    <form className='form'>
      {IsImageSelected&&<div className="imageprofile">
        <img  src={URL.createObjectURL(UserInput.UploadImage)} width="250px"/>
      </div>}
    <div className='innerform'>
    <input className='field' maxLength="20" type="name" name="first_name" value={UserInput.first_name} onChange={(e)=>{OnChangeData(e)}} placeholder='Enter First_Name' />
    <input className='field' maxLength="20" type="name" name="last_name" value={UserInput.last_name} onChange={(e)=>{OnChangeData(e)}} placeholder='Enter Last_Name' required/>
    <input className='field' type="email" name="Email" value={UserInput.Email} onChange={(e)=>{OnChangeData(e)}} placeholder='Enter Email' required/>
    {Error&&<p className='error'>Email is invalid</p>}
    <input className='field' onKeyDown={(e)=>MaxLength(e)} type="number" name="PhoneNo" value={UserInput.PhoneNo} onChange={(e)=>{OnChangeData(e)}} placeholder='Enter PhoneNo.' required/>
    {Error1&&<p className='error'>PhoneNo is invalid</p>}
    <input className='field'  maxLength="30" type="text" name="State" value={UserInput.State} onChange={(e)=>{OnChangeData(e)}} placeholder='Enter State' required/>
    <input className='field'  maxLength="30" type="text" name="City" value={UserInput.City} onChange={(e)=>{OnChangeData(e)}} req placeholder='Enter City' required/>
    <div className='uploadimage'>
    <input type="file" name="UploadImage" ref={fileTake} onChange={(e)=>{OnChangeData(e)}} />
     <button className='button' onClick={(e)=>{Takepic(e)}}>{ImageButtonName}</button> 
    </div>
    {Error2&&<p className='error'>Some field are missing</p>}
    <input type="submit" value="Submit" onClick={(e)=>{SubmitData(e)}} />
    </div>
      </form>
    </div>
  )
}

