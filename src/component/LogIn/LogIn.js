import React from 'react'
import { useState } from 'react'
import './LogIn.css'
import Admin from '../../Admin/OnlyAdminCanEnter'

function LogIn() {

    const[data, setData]= useState(null)
    const[print, setPrint]= useState(false)
    const[password]=useState('lazyfrombr06')
    const[email]=useState('brajeshfrombr06@gmail.com')

    function getData(val){
        // alert(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }

  return (
    <div className='login-component'>
       { print? <h2 className='heading-text' >Welcome !</h2> : <h3 className='heading-text'>Welcome to admin Profile</h3>}

       <input type="text" value={email} className='input-data'  />

       <input type="password" onChange={getData} className='input-data' placeholder='Enter password Here' /> 

       {/* <button onClick={()=>setPrint(true)} className='Print-button'> click here</button> */}

       {
       data ===password? <Admin/> : <h3 className='heading-text' style={{height:'100vh'}}>Incorect password</h3>
       }

    </div>
  )
}

export default LogIn