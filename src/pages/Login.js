import React from 'react'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'

const Login = () => {
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
        <p className='text-center'>Login to your accont to continue</p>
        <form action="">
          <CustomInput type='text' label="User Email" id='email' />
          <CustomInput type='password' label="User Password" id='pass' />
          <Link to='/admin' className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5" style={{ "background": "gray" }} type='submit'>Login</Link>
          <div className='mt-4'>
            <Link to='forgot-password' className='text-center text-decoration-none'>
              <p>Forgot Password?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login