import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Custom_input_field from '../components/Custom_input_filed'
import Custom_button from '../components/Custom_button'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, database} from '../firebase/index'
import { ref, set } from 'firebase/database'
const Login = () => {
    const [data, setdata] = useState({})
    const change_handle = (e) => {
        const { id, value } = e.target
        const newData = { ...data, [id]: value }

        setdata(newData)
        console.log(newData);
    }
    const submit_handle = async (e) => { // Declare submit_handle as an async function
        e.preventDefault();
        try {
            const { email, password } = data;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential;
            await writeUserData(user.uid, {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email
            });
            console.log('User signed up:', user);
        } catch (error) {
            console.error(error);
        }
    }
      // Function to write user data to the database
      const writeUserData = (userId, userData) => {
        return set(ref(database, 'users/' + userId), userData);
    };

    return (
        <div style={{ marginTop: "-45px" }} className=' h-[100dvh] grid place-items-center '>
            <Box component='form'
                onSubmit={submit_handle}
                className="max-w-md bg-white w-[100%] space-y-5 px-4 py-5 rounded">

                <Typography className='text-primary' align='center' fontWeight='bold' fontSize={30}>
                    Signup
                </Typography>

                <div className='space-y-5'>
                    <Custom_input_field
                        label='First Name'
                        required={true}
                        type='text'
                        placeholder="Enter First Name"
                        id='firstName'
                        onChange={change_handle}
                    />
                    <Custom_input_field
                        label='Last Name'
                        required={true}
                        type='text'
                        placeholder="Enter Last Name"
                        id='lastName'
                        onChange={change_handle}
                    />
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
                    Signup
                </Custom_button>
                <div className='text-center'>
                    Already have an account?
                    <Link className='text-primary underline px-4' to='/login'>Login</Link>
                </div>
            </Box>

        </div>
    )
}

export default Login