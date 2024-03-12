import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Custom_input_field from '../components/Custom_input_filed'
import Custom_button from '../components/Custom_button'
import { Link,  useNavigate } from 'react-router-dom'
import { auth } from '../firebase/index'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { set_user_auth } from '../store/slice/user_auth_slice'
import { useDispatch } from 'react-redux'

const Login = () => {
 
  const [data, setdata] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const change_handle = (e) => {
    const { id, value } = e.target;
  const newData = {...data,[id]:value}
  setdata(newData)
  console.log(newData);
    
  };
  const submit_handle = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const user = await signInWithEmailAndPassword(auth,email, password);
      alert('User signed in', user);
      navigate('/');
      dispatch(set_user_auth({auth:true}))
      // Redirect or perform other actions after successful login
    } catch (error) {
      console.error('Error signing in:', error);
      // Handle login error
    }
  };
  
  return (
    <div style={{marginTop:"-45px"}} className='h-[100dvh] grid place-items-center '>
        <Box
        component='form'
        onSubmit={submit_handle}
        className="max-w-md bg-white w-[100%] space-y-5 px-4 py-5 rounded">

        <Typography className='text-primary' align='center' fontWeight='bold' fontSize={30}>
            Login
        </Typography>

       <div className='space-y-5'>
         <Custom_input_field 
        label='Email'
        required={true}
        type='email'
        placeholder="Enter Email"
        id='email'
        onChange={change_handle}
        />
         <Custom_input_field 
        label='Password'
        required={true}
        type='password'
        placeholder="Enter Password"
        id='password'
        onChange={change_handle}

        />
       </div>
       <Custom_button type='submit'>
        Login
       </Custom_button>
       <div className='text-center'>
       Don't have account?
       <Link className='text-primary underline px-4' to='/signup'>Signup</Link>
       </div>
        </Box>

    </div>
  )
}

export default Login