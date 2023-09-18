import React from 'react'
import CustomInput from '../components/CustomInput'

const Resetpassword = () => {
  return (
    <div className='py-5' style={{ "background": "gray", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4'>
        <div>
          <h3 className='text-center'>ElectroMart</h3>
        </div>
        <h5 className='text-center'>Reset Password</h5>
        <p className='text-center'>Please enter your new pasasword </p>
        <form action="">
          <CustomInput type='password' label="New Password" id='pass' />
          <CustomInput type='password' label="Confirm Password" id='confirmpass' />
          <button className="border-0 px-3 py-2 text-white fw-bold w-100" style={{ "background": "gray" }} type='submit'>Reset Password</button>
        </form>
      </div>
    </div>
  )
}

export default Resetpassword