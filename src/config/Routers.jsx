import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom";
import React, { useEffect } from 'react'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../components/Layout";
import Signup from "../pages/Signup";
import Public_Routes from "./Public_Routes";
import Private_Routes from "./Private_Routes";
import { useDispatch, useSelector } from "react-redux";
import { set_user_auth } from "../store/slice/user_auth_slice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Blood_donor_form from "../pages/Blood_donor_Form";
import Blood_request_Form from "../pages/Blood_request_Form";

const router=createBrowserRouter(createRoutesFromElements(
    <Route element={ <Layout/>}>
      <Route element={<Private_Routes/>}>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/blood_donor_form" element={<Blood_donor_form/>}/>
        <Route  path="/blood_request_form" element={<Blood_request_Form/>}/>
        
        </Route>

        <Route element={<Public_Routes/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Route>
    </Route>
))
const Routers = () => {
  const user_auth_state = useSelector((state) => state.user_auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(set_user_auth({ data: {}, auth: true }));
      } else {
        dispatch(set_user_auth({ data: {}, auth: false }));
      }
    });
  }, []);
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Routers