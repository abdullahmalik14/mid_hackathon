import { Box, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import Custom_input_field from '../components/Custom_input_filed'
import Custom_button from '../components/Custom_button'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {auth, database} from '../firebase/index'
import { ref, set } from 'firebase/database'
const Blood_donor_form = () => {
    const [data, setdata] = useState({})
    const change_handle = (e) => {
        const { id, value } = e.target
        const newData = { ...data, [id]: value }

        setdata(newData);
        
        console.log(newData);
    }
    
    return (
        <div style={{ marginTop: "-45px" }} className=' h-[100dvh] grid place-items-center '>
            <Box component='form'
                // onSubmit={submit_handle}
                className="max-w-md bg-white w-[100%] space-y-5 px-4 py-5 rounded">

                <Typography className='text-primary' align='center' fontWeight='bold' fontSize={30}>
                    Blood Donor
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
                        label='Blood group'
                        required={true}
                        placeholder="Enter Blood group"
                        id='Dropdown label'
                        onChange={change_handle}
                    />

      
                    <Custom_input_field
                        label='Mobile Phone'
                        required={true}
                        type='text'
                        placeholder="Enter Mobile Number"
                        id='number'
                        onChange={change_handle}
                    />
                    <Custom_input_field
                        label='Address'
                        required={true}
                        type='text'
                        placeholder="Enter Address"
                        id='address'
                        onChange={change_handle}
                    />
                </div>
                <Custom_button type='submit'>
                    Registered
                </Custom_button>
               
            </Box>

        </div>
    )
}

export default Blood_donor_form