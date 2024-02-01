import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Navbar.css"
import { FiChevronDown , FiChevronUp} from "react-icons/fi";
import { IoIosMenu } from "react-icons/io"
import { MdClose } from "react-icons/md"

/*
BiMenu
*/

function Navbar() {
    // const location = useLocation()
    const [windowwidth , setWindowwidth] = useState() 
    const [Onbarstatus ,setOnbarStatus] = useState(false)
    const [OnSubListstatus ,setOnSubListstatus] = useState(false)
    
    


    useEffect(() => {
        setWindowwidth(window.innerWidth)
        console.log(windowwidth)
        if (windowwidth > 2001) {
            setOnbarStatus(true)
            setOnSubListstatus(true)
        }
    }, [windowwidth])


    function togglebarparent() {
        if (windowwidth < 2001) {
           setOnbarStatus(!Onbarstatus)
        }
    }
    
    function togglesublist() {
        if (windowwidth < 2001) {
            setOnSubListstatus(!OnSubListstatus)
        }
    }

    // console.log(navigate.name)

    return (
      <>
      <nav>
                <div className="title">VATEXTICS</div> 
                <div className='bar' onClick={togglebarparent}>{!Onbarstatus ? <IoIosMenu /> : <MdClose/>}</div>      
          <div className='droplistparent' style={{display: (!Onbarstatus ) ? "none" : "block"}}>
              <ul>
                  <li>Home</li><hr />
                        <li>
                            <div className='servicestag'> <div>Sevices</div> <div className='drop' onClick={togglesublist}>{!OnSubListstatus?<FiChevronDown/>:<FiChevronUp/>}</div></div>
                            <div className='dropdown' style={{display:!OnSubListstatus && "none"}}>
                                <div className='transparentclass'></div>
                                <div className='orange'></div>
                                <ul>
                                    <li> Freight forwording</li><hr />
                                    <li> Road Transportation</li><hr />
                                    <li> Automotive Solutions</li><hr />
                                    <li> Standard-shipping</li>
                            
                                </ul>
                            </div>
                  </li> <hr />
                  <li>About</li><hr />
                  <li>Testimonials</li><hr />
                  <li>Contact</li><hr />
                  <li> <div className='trackorder'>TRACK ORDER</div></li>
              </ul>
             
          </div>
            </nav>
            {/* <h1>{location.pathname}</h1> */}
            </>
  )
}

export default Navbar


