import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Freightforwading.css"
import { ImClock } from "react-icons/im"
import { FaBook, FaCalendarAlt, FaCar, FaStar, FaTruck, FaWarehouse } from "react-icons/fa"
import Bottom from '../BottomEnd/Bottom'

function Freightforwading() {
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
"--windowwidth": `${windowD.width}px`,
"--windowheight": `${windowD.height}px`
}}
    >
      <Navbar />

      <section className="freightintro"
          style={{
            "--windowwidth": `${windowD.width}px`,
            "--windowheight": `${windowD.height - 500}px`
            }}
      >
                      <ul>
                          <li className="h1">
                            
FREIGHT FORWARDING DESIGN TO GROW YOUR BUSINESS
                          </li>
                      <li className="text">
                      Ship your goods conveniently 
                      from one place to another with us.
Speed your shipping and grow your business with more 
satisfied clients
                        </li>
                        <li className="yesbtn">YES I WANT A QUOTE ASAP</li>
                      </ul>
      </section>
      

      {/* thisiswhy */}
      <section className="thisiswhy"
        style={{
          "--windowwidth": `${windowD.width}px`,
          "--windowheight": `${windowD.height + 500}px`
          }}
      >
        <ul>
          <li className="h1">THIS IS WHY</li>
          <li className="h2">WE SHOULD WORK TOGETHER</li>
          <li>
            <ul>
              <li>
                <ul>
                <li className="iconthis"><ImClock/></li>
                <li className="h3">TRACKING</li>
                  <li className="text">
                    We are providing our customers
                    with highly utilized tracking
                    service providers to keep them
                    updated about their shipments even
                    at international levels. logifyx
                    provides you with every necessary
                    information requested for
                    your shipping transactions at any time.
                </li>
                </ul>
              </li>
              <li>
                <ul>
                <li className="iconthis"><FaCar/></li>
                <li className="h3">TRANSPORT MANAGEMENT</li>
                  <li className="text">
                    logifyx utilizes cost-effective
                    inland routes for their transportations
                    of goods and persons from one point to
                    the other, making sure these
                    transportations are very organized
                    to keep records of these transactions.
                    Our team and partners ensure efficient
                    management systems across all operations.
                  </li>
                </ul>
              </li>
              
              <li>
                <ul>
                <li className="iconthis"><FaCalendarAlt/></li>
                <li className="h3">PREPARATION OF EXPORT DOCUMENTS</li>
                  <li className="text">
                    A series of transportation documents
                    are required to prove that the shipments
                    are in line with the shipment policies.
                    Here, we would thereby outline and
                    provide appropriate documents with the
                    correct information
                    for your shipments for submission.
                </li>
                </ul>
              </li>

              <li>
                <ul>
                <li className="iconthis"><FaWarehouse/></li>
                <li className="h3">WAREHOUSING</li>
                  <li className="text">
                    with logifyx, facilities are provided
                    both for indoor and outdoor storage of
                    your product packages. At the same
                    time, we take responsibility for the
                    reception, exploration,
                    and retrieval of these same packages.
                    </li>
                </ul>
              </li>
              <li>
                <ul>
                <li className="iconthis"><FaBook/></li>
                <li className="h3">CARGO BOOKINGS</li>
                  <li className="text">
                    logifyx identify suitable cargo
                    carriers for your freight, then we
                    sought what sort among your product
                    to ship across
                    the globe through these cargo carriers.
                    </li>
                </ul>
              </li>
              <li>
                <ul>
                <li className="iconthis"><FaTruck/></li>
                <li className="h3">FREIGHT CONSOLIDATION</li>
                  <li className="text">
                    Our team consults its experts to
                    come up with the most reliable and
                    applicable ways to manage your
                    resources and attain high freight
                    rates by combining small shipments
                    with others. This method is less
                    costly and you may save more time,
                    energy, and money in the process.
                    </li>
                </ul>
              </li>
 
            </ul>
          </li>
        </ul>
      </section>

      <section className="personsf"
              style={{
                  "--windowwidth": `${windowD.width}px`,
                  "--windowheight": `${windowD.height-800}px`
              }}
          >
              
              <ul>
                  <li>
                      <ul>
                          <li className="stars">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar/>
                          </li>
                          <li className="text">
                              I've been working with you for the past 13 months,
                              and you have proven to be a very reliable logistics
                              service provider. I have not experienced any loss as
                              per my experiences with the other logistics services
                              providers I worked with in the past. I look forward
                              to having many other fruitful transactions in the future.
                          </li>
                          <li className="userp">
                              <img src="/pics/logo/2R.jpg" alt="" />
                              <div className="name">Denise Gibson</div>
                          </li>
                          <li className="line"></li>
                      </ul>
                  </li>
                  <li>
                      <ul>
                          <li className="stars">
                          <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar/>
                          </li>
                          <li className="text">
                          Your team has helped my company a great deal in the transportation process. Your services have earned me more investors and loyal clients in return because I always get to supply them on time, all thanks to your management team.

                          </li>
                          <li className="userp">
                          <img src="/pics/logo/3R.jpg" alt="" />
                              <div className="name">Jean Herrera</div>
                          </li>
                          <li className="line"></li>
                      </ul>
                  </li>
                  <li>
                      <ul>
                          <li className="stars">
                          <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar/>
                          </li>
                          <li className="text">
                          Logifyx you're just the best! We have booked several other logistics companies before, they failed severally, and meeting their promises was difficult. I sometimes lost goods too. You have contributed a lot in making my business grow Thank you!
                          </li>
                          <li className="userp">
                          <img src="/pics/logo/1R.jpg" alt="" />
                              <div className="name">Raj Namasta</div>
                          </li>
                          <li className="line"></li>
                      </ul>
                  </li>
                  <li>
                      <ul>
                          <li className="stars">
                          <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar/>
                          </li>
                          <li className="text">
                          We must say we are impressed with the qualities of your freights, they are well capacitated, we don't think we have anything to worry about since the freighters are quite spacy and having trackings on them.
                          </li>
                          <li className="userp">
                          <img src="/pics/logo/4R.jpg" alt="" />
                              <div className="name">Edward Gordon</div>
                          </li>
                          <li className="line"></li>
                      </ul>
                  </li>
                  <li>
                      <ul>
                          <li className="stars">
                          <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar/>
                          </li>
                          <li className="text">
                          The timeliness of your team is quite impeccable, your team is doing a great job, you have impressed me. Most certainly, we are looking forward to continuing this relationship.
                          </li>
                          <li className="userp">
                          <img src="/pics/logo/5R.jpg" alt="" />
                              <div className="name">Frank Edwards</div>
                          </li>
                          <li className="line"></li>
                      </ul>
                  </li>
                  <li>
                      <ul>
                          <li className="stars">
                          <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar/>
                          </li>
                          <li className="text">
                          Well so far I don't have anything to complain about, I just hope you don't give reasons to complain in the long run.                          </li>
                          <li className="userp">
                          <img src="/pics/logo/6R.jpg" alt="" />
                              <div className="name"> 	
Peter Davis</div>
                          </li>
                          <li className="line"></li>
                      </ul>
                  </li>
              </ul>
              
      </section>
      


      {/* freeestimaate */}
      <section className="freeestimaate"
      >

        <ul>
          <li>
            <ul>
              <li className="h1">FREE ESTIMATION</li>
              <li className="h2">REQUEST A QUOTE</li>
            </ul>
          </li>
          <li className='getaqoutbtn'>GET A QOUTE</li>
        </ul>


      </section>
      

      <Bottom/>

      </section>
  )
}

export default Freightforwading