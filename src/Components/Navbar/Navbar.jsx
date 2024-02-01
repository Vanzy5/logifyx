import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { FiChevronDown , FiChevronUp} from "react-icons/fi";
import { IoIosMenu } from "react-icons/io"
import { MdClose } from "react-icons/md"
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { dataInfo, printInfo } from '../../DataStore/DataSlice/DataSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/firebase';

/*
BiMenu
*/

function Navbar() {
    const [windowwidth , setWindowwidth] = useState() 
    const [Onbarstatus ,setOnbarStatus] = useState(false)
    const [OnSubListstatus ,setOnSubListstatus] = useState(false)
    const location = useLocation();
    const pathname = location.pathname
    const dispatch = useDispatch()
    const [authUser, setAuthUser] = useState(null)
   // listen for auth changes .........
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
    }, [])


    useEffect(() => {
         dispatch(printInfo())
        setWindowwidth(window.innerWidth)
        console.log(windowwidth)
        if (windowwidth > 1201) {
            setOnbarStatus(true)
            setOnSubListstatus(true)
        }
    }, [windowwidth,dispatch])


    function togglebarparent() {
        if (windowwidth < 1201) {
           setOnbarStatus(!Onbarstatus)
        }
    }
    
    function togglesublist() {
        if (windowwidth < 1201) {
            setOnSubListstatus(!OnSubListstatus)
        }
    }

    // console.log(navigate.name)

    return (
      <>
      <nav>
                <div className="title">LOGIFYX</div> 
                <div className='bar'
                       style={{
                        color:(pathname === "/" || pathname === "/about" || pathname === "/contact") ? "white" : "black" ,
                        borderColor:(pathname === "/" || pathname === "/about" || pathname === "/contact" ) ? "white" : "black"
                        //    color: "black"
                       }}
                    onClick={togglebarparent}>{!Onbarstatus ? <IoIosMenu /> : <MdClose />}</div>      
          <div className='droplistparent' style={{display: (!Onbarstatus ) ? "none" : "block"}}>
              <ul>
                        <li><NavLink to="/" className="linkbtn"
                            style={{
                            color:(pathname === "/") && "rgb(146, 145, 145)"
                        }}  
                        >Home</NavLink></li><hr className='hrNav' />
                        <li
                                            style={{
                                                color: ( pathname === "/frieghtforwording" ||
                                                pathname === "/roadtransportationPage" ||
                                                pathname === "/automativesolutions" ||
                                                pathname === "/standardshipping") ? "rgb(146, 145, 145)"
                                                 : "black"
                                        }}
                        >
                            <div className='servicestag'
                                     
                            > <div>Sevices</div> <div className='drop' onClick={togglesublist}>{!OnSubListstatus ? <FiChevronDown /> : <FiChevronUp />}</div></div>
                            <div className='dropdown' style={{display:!OnSubListstatus && "none"}}>
                                <div className='transparentclass'></div>
                                <div className='orange'></div>
                                <ul>
                                    <li><NavLink to="/frieghtforwording" className="linkbtn"
                                        style={{
                                            color:(pathname === "/frieghtforwording") && "rgb(146, 145, 145)"
                                        }}
                                    >Freight forwording</NavLink> </li><hr className='hrNav' />
                                    <li><NavLink to="/roadtransportationPage" className="linkbtn"
                                     style={{
                                        color:(pathname === "/roadtransportationPage") && "rgb(146, 145, 145)"
                                    }}>Road Transportation</NavLink> </li><hr className='hrNav' />
                                    <li><NavLink to="/automativesolutions" className="linkbtn"
                                     style={{
                                        color:(pathname === "/automativesolutions") && "rgb(146, 145, 145)"
                                    }}>Automotive Solutions</NavLink> </li><hr className='hrNav' />
                                    <li><NavLink to="/standardshipping" className="linkbtn"
                                     style={{
                                        color:(pathname === "/standardshipping") && "rgb(146, 145, 145)"
                                    }}>Standard-shipping</NavLink> </li>
                            
                                </ul>
                            </div>
                  </li> <hr className='hrNav'/>
                        <li><NavLink to="/about" className="linkbtn"
                         style={{
                            color:(pathname === "/about") && "rgb(146, 145, 145)"
                        }}
                        >About</NavLink></li><hr className='hrNav' />
                        <li><NavLink to="/testimonial" className="linkbtn"
                         style={{
                            color:(pathname === "/testimonial") && "rgb(146, 145, 145)"
                        }}
                        >Testimonials</NavLink></li><hr className='hrNav' />
                        <li><NavLink to="/contact" className="linkbtn"
                         style={{
                            color:(pathname === "/contact") && "rgb(146, 145, 145)"
                        }}>Contact</NavLink></li><hr className='hrNav' />
                        
                     {authUser &&    <><li><NavLink to="/admin" className="linkbtn"
                         style={{
                            color:(pathname === "/admin") && "rgb(146, 145, 145)"
                        }}>Admin</NavLink></li><hr className='hrNav' /></> }
                        
                      <li>
                            {/* {windowwidth > 2001 ? <div className='trackorder'><NavLink className="trackorderLink" to="/trackOrderPage">TRACK ORDER</NavLink></div>:  <div className='trackorder'>Track order</div> } */}
                            <div className='trackorder'><NavLink className="trackorderLink" to="/trackOrderPage"
                            
                            style={{
                                color:(pathname === "/trackOrderPage") && "rgb(146, 145, 145)"
                            }}
                            >TRACK ORDER</NavLink></div>

                        </li>
              </ul>
             
          </div>
            </nav>
            {/* <h1>{location.pathname}</h1> */}
            </>
  )
}

export default Navbar


