import React, { useEffect, useState } from 'react'
import Bottom from '../BottomEnd/Bottom'
import Navbar from '../Navbar/Navbar'
import "./Admin.css"
import { MdLocationPin, MdMail, MdOutlineNavigateNext } from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom'

function Admin() {
    const [windowD, setWindowD] = useState({
        height: 0,
        width: 0
    })

    useEffect(() => {
        setWindowD(prev => ({
            height: window.innerHeight,
            width: window.innerWidth
        }))
    }, [windowD.width, windowD.height])

    console.log(windowD.width)
  return (
    <section className="bodyadmin"
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
              
               
              <ul>
                  <li>
                      <NavLink to={"/CreatePage"}>Create New Track</NavLink>
                  </li>
                  <li>
                      <NavLink to={"/ViewPage"}>View all Tracks</NavLink>
                  </li>
              </ul>

              
                
                  </section>
          


          <Bottom/>
         
          </section>
  )
}

export default Admin