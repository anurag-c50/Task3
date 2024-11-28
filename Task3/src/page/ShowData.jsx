import React from 'react'

export default function ShowData({UserInput}) {
    console.log(UserInput)
  return (
    <div className='Conatiner'> 
    <form className='form'>
    <div className="imageprofile">
        <img  src={URL.createObjectURL(UserInput.UploadImage)} width="250px"/>
      </div>
    <div className='innerform'>
    <input className='fields'  type="name" name="first_name" value={UserInput.first_name}/>
    <input className='fields' type="name" name="last_name" value={UserInput.last_name} onChange={(e)=>{OnChangeData(e)}} required/>
    <input className='fields' type="email" name="Email" value={UserInput.Email} />
    <input className='fields'  type="number" name="PhoneNo" value={UserInput.PhoneNo}/>
    <input className='fields'  type="text" name="State" value={UserInput.State}/>
    </div>
      </form>
    </div>
  )
}
