import React from 'react'
import "./Bottom.css"
import { MdLocationPin, MdMail, MdOutlineNavigateNext } from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

function Bottom() {
    const navigate = useNavigate()
  return (
      <section className="bottom"
      >
          
          <div className="bottomcontainer">
              <ul className="powerfull">
                  <li className='h1'>Powerful alone. But stronger together </li>
                  <li>
                  logifyx offers the complete transport
                      management and logistics services
                      you need to grow your business.
                     Whether you want to transport goods,
                      warehouse them, Package and store,
                      door to door delivery. Our customized
                      packages are powerful alone but even
                      better when used together.
                      They can move your business 
                    
                  </li>
                  <li className='adminLogin'
                    //   style={{
                    //       position: "relative",
                    //       top:-30
                    //   }}
                      onClick={()=>{navigate("/adminLogin")}}
                  >fast.</li>
                  
              </ul>
              <ul className="packaging">
                  <li><div className='nexticon'><MdOutlineNavigateNext className='next' /></div>Packaging & Storage</li>
                  <li><div className="linebottom"></div></li>
                  <li><div className='nexticon'><MdOutlineNavigateNext className='next'/></div>Cargo</li>
                  <li><div className="linebottom"></div></li>
                  <li><div className='nexticon'><MdOutlineNavigateNext className='next'/></div>Worldwide Transport</li>
                  <li><div className="linebottom"></div></li>
                  <li><div className='nexticon'><MdOutlineNavigateNext className='next'/></div>Warehousing</li>
                  <li><div className="linebottom"></div></li>
                  <li><div className='nexticon'><MdOutlineNavigateNext className='next'/></div>Door to Door Delivery</li>
                  <li><div className="linebottom"></div></li>
                  <li><div className='nexticon'><MdOutlineNavigateNext className='next'/></div>Ground Transport</li>
              </ul>
              <ul className="support">
                  <li><div className='mailicon'><MdMail/></div>logifyx.biz@gmail.com</li>
                  <li><div className="linebottom"></div></li>
                  <li><div className='teleicon'><BsFillTelephoneFill/></div>+1 (916) 581-0183</li>
                  {/* <li><div className="linebottom"></div></li> */}
                  {/* <li><div className='gpsicon'><MdLocationPin/></div>474 Happy Hollow Road, */}
                      {/* BEDFORD,WY,83112
                  </li> */}
                  <li><div className="linebottomB"></div></li>
                  <li className='keepintouch'>KEEP IN TOUCH</li>
              </ul>
              <ul>
              <li className="bottomrights">Copyright © 2021 Courier | BentLogistics</li>
              </ul>
          </div>
         
          
     </section>
  )
}

export default Bottom