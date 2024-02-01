import React, { useEffect, useState } from 'react'
import Bottom from '../BottomEnd/Bottom'
import Navbar from '../Navbar/Navbar'
import "./AdminLogin.css"
import { MdLocationPin, MdMail, MdOutlineNavigateNext } from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'

function AdminLogin() {
    const [windowD, setWindowD] = useState({
        height: 0,
        width: 0
    })

    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const onInputData = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev, 
            [name]: value
        }))
    } 

    /// firebase sign in or login
    const FireSignIn = () => {

        console.log("Hello")
        signInWithEmailAndPassword(auth, form.email, form.password)
            .then((userCredentials) => {
                console.log(userCredentials.user)
                alert(userCredentials.user.email + "  Is logged In")
            }).catch((err) => {
                // console.log(err.message)
                alert("User not found or network problem")
            })
    }

        // Sign Out

        const SignOut = () => {
            signOut(auth)
                .then(() => {
                    alert("Sign Out was successful ..")
                }).catch(err => {
                    console.log(err.message)
                    alert("network problem try later")
                })
        }



    useEffect(() => {
        setWindowD(prev => ({
            height: window.innerHeight,
            width: window.innerWidth
        }))
    }, [windowD.width, windowD.height])

    console.log(windowD.width)
  return (
    <section className="bodyadminlogin"
          style={{
      "--windowwidth": `${windowD.width}px`,
      "--windowheight": `${windowD.height}px`
  }}
      >
           <Navbar />

           <section className='contactintro'
                 style={{
                    "--windowwidth": `${windowD.width}px`,
                    "--windowheight": `${windowD.height - 600}px`
                }}
                      >
              
               
              <div>
          <h1>Admin Login </h1>
          <input type="email" name="email" id="" placeholder="Email" onChange={onInputData} value={form.email} />
          <input type="password" name="password" id="" placeholder='Password' onChange={onInputData}  value={form.password}/>
          <button onClick={FireSignIn}>login</button>
          <button onClick={SignOut}>Logout</button>
          
          {/* {form.email} ... {form.password} */}
      </div>

              
                
                  </section>
          


          <Bottom/>
         
          </section>
  )
}

export default AdminLogin