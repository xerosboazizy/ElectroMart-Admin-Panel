import React from 'react'
import CustomInput from '../components/CustomInput'

const Forgotpassword = () => {
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
        <h5 className='text-center'>Forgot password?</h5>
        <p className='text-center'>Enter your registerd email to get your password reset link</p>
        <form action="">
          <CustomInput type='text' label="User Email" id='email' />
          <button className="border-0 px-3 py-2 text-white fw-bold w-100" style={{ "background": "gray" }} type='submit'>Send link</button>
        </form>
      </div>
    </div>
  )
}

export default Forgotpassword