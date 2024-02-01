import React, { useEffect, useState } from 'react'
import Bottom from '../BottomEnd/Bottom'
import Navbar from '../Navbar/Navbar'
import "./Contact.css"
import { MdLocationPin, MdMail, MdOutlineNavigateNext } from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"

function Contact() {
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
    <section className="body"
          style={{
            backgroundImage: `url("/pics/plane.jpg")`,
            backgroundSize: "cover",
      "--windowwidth": `${windowD.width}px`,
      "--windowheight": `${windowD.height}px`
  }}
      >
          {/* contactintro */}

           <section className='contactintro'
                 style={{
                    "--windowwidth": `${windowD.width}px`,
                    "--windowheight": `${windowD.height - 200}px`
                }}
                      >
              
                  <Navbar />

                  <section className="aboutus">
                      <ul>
                          <li className="h1">CONTACT US</li>
                      <li className="text">
                          In need of shipping, transportation, and logistic
                          services? Contact us using any
                          of the means below and we’ll get to you as soon as possible
                      </li>
                      </ul>
                  </section>
            </section>


          

          <section className="contactinformation"
           style={{
            "--windowwidth": `${windowD.width}px`,
            "--windowheight": `${windowD.height - 900}px`
        }}
          >
              <div>
                  <div>
                        <ul>
                            <li className="contactA">
                                <ul>
                                    <li className="icon"><BsFillTelephoneFill/></li>
                                    <li className="h2">PHONE</li>
                                    <li className="text">+1 (916) 581-0183</li>
                                </ul>
                            </li>
                            <li className="contactA">
                                <ul>
                                    <li className="icon"><MdMail/></li>
                                    <li className="h2">EMAIL</li>
                                    <li className="text">support@logifyx.com</li>
                                </ul>
                            </li>
                            <li className="contactA">
                                <ul>
                                    <li className="icon"><MdLocationPin/></li>
                                    <li className="h2">ADDRESS</li>
                                    <li className="text">474 Happy Hollow Road, BEDFORD, WY, 83112</li>
                                </ul>
                            </li>
                        </ul>
                  </div>
                  <div className="line"></div>
              </div>
             
          </section>

          
          <Bottom/>
         
          </section>
  )
}

export default Contact