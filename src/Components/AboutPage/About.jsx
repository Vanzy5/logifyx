import React, { useEffect, useState } from 'react'
import { HiPlusSm } from 'react-icons/hi'
import Bottom from '../BottomEnd/Bottom'
import Navbar from '../Navbar/Navbar'
import "./About.css"

import { IoIosPlay } from "react-icons/io"


function About() {
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
      <>
      <section className="body"
      style={{
        "--windowwidth": `${windowD.width}px`,
        "--windowheight": `${windowD.height}px`
    }}
          >
              <section className='aboutintro'
                 style={{
                    "--windowwidth": `${windowD.width}px`,
                    "--windowheight": `${windowD.height - 600}px`
                }}
                      >
              
                  <Navbar />

                  <section className="aboutus">
                      <ul>
                          <li className="h1">ABOUT US</li>
                          <li className="text">We're Bent Logistics. And we help businesses and brands
                              grow through innovative transport and logistics solutions</li>
                      </ul>
                  </section>
                  
              </section>
              {/* ourstory */}
              <section className="ourstory"
                    style={{
                        "--windowwidth": `${windowD.width}px`,
                        "--windowheight": `${windowD.height + 600}px`
                    }}
              >
                  
                  <ul>
                      <li><img src="/pics/logo/2B.jpg" alt="" /><div>Lisa Green - CMO</div></li>
                      <li className='movedown'><img src="/pics/logo/1B.jpg" alt="" /><div>Dr. John Smith — Founder & CEO.</div></li>
                      <li>
                          <ul>
                              <li className="h1">OUR STORY</li>
                              <li className="text1">
                                  For over 21 years now and counting,
                                  we have supplied logistics solutions to our clients
                                  worldwide. logifyx has its base in Rochester New York.
                                  With the help of our partners and a team with expertise
                                  in Business transport, packing, and relocation assistance,
                                  and freight forwarding customs clearance amongst others, we
                                  do everything to maintain good customer relationships. We
                                  uphold outstanding optimized logistic solutions to suit the
                                  various industries of our clients. We also ensure you to our
                                  expert team to support them in the transportation process through
                                  an effective supply chain and cost-effective system.
                              </li>
                              <li className="text2">
                                  In no specific order, logifyx offer logistics solutions in
                                  the fields of education, construction, agriculture, health,
                                  and other distribution companies in the commercial base, be
                                  it operating under an NGO or not. We are not only here to
                                  assist you to transport your items.
                                  We also help you grow and expand in your business or industry.
                              </li>
                          </ul>
                      </li>
                  </ul>
                      
              </section>
              

              {/* meetourteam */}

              <section className="meetourteam">
                  <ul>
                      <li className="h1">MEET OUR TEAM</li>
                      <li className='oneinfo'>
                          <ul>
                              <li><img src="/pics/logo/1P.jpg" alt="" /></li>
                              <li>
                                  <div className="h2">JACK LEE</div>
                                  <div className="text">Manager</div>
                              </li>
                          </ul>
                          <ul>
                              <li><img src="/pics/logo/2P.jpg" alt="" /></li>
                              <li>
                                  <div className="h2">Annie Barnes</div>
                                  <div className="text">Secretarian</div>
                              </li>
                          </ul>
                          <ul>
                              <li><img src="/pics/logo/3P.jpg" alt="" /></li>
                              <li>
                                  <div className="h2">Jenny perl</div>
                                  <div className="text">Assistant Manager</div>
                              </li>
                          </ul>
                          <ul>
                              <li><img src="/pics/logo/4P.jpg" alt="" /></li>
                              <li>
                                  <div className="h2">Jack Doe </div>
                                  <div className="text">Technical advisor</div>
                              </li>
                          </ul>
                          
                      </li>
                  </ul>
              </section>



                              {/* numberspeak....  */}

                              <section className="numberspeaks">
                    <ul>
                        <li><h1>NUMBER SPEAKS</h1></li>
                        <li><div className="line"></div></li>
                        <li>
                            <div className="numbers">
                                <ul>
                                    <li className='h1'>10+</li>
                                    <li><div className="perso">Awards</div></li>
                                    <li><div className="linesecond"></div></li>
                                </ul>
                                <ul>
                                    <li className='h1'>200+ </li>
                                    <li><div className="perso">Countries</div></li>
                                    <li><div className="linesecond"></div></li>
                                </ul>
                                <ul>
                                    <li className='h1'>12k</li>
                                    <li><div className="perso">Partners</div></li>
                                    <li><div className="linesecond"></div></li>
                                </ul>
                                <ul>
                                    <li className='h1'>79k+</li>
                                    <li><div className="perso">Deliveries</div></li>
                                    <li><div className="linesecond"></div></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
              </section>
              


              {/* why us  */}
              <section className="whyus"
                    style={{
                        "--windowwidth": `${windowD.width}px`,
                        "--windowheight": `${windowD.height + 400}px`
                    }}
              >
                  <ul>
                      <li className="h1">WHY US</li>
                      <li className='whyuscontent'>
                          <ul>
                              <li className='h2'><div className="icon"> <IoIosPlay/> </div>RELIABILITY AND PARTNERSHIP</li>
                              <li className='text'>
                                  We have come this far because of the reliable
                                  partnerships we have built with clients over
                                  the years. logifyx is bent on maintaining a
                                  solid reputation and creating many
                                  reliable relationships with our customers in the future.
                              </li>
                          </ul>
                          
                          <ul>
                              <li className='h2'><div className="icon"><IoIosPlay/></div>AFFORDABILITY</li>
                              <li className='text'>
                                  Most times, people face difficulties in booking
                                  a qualified logistics and transportation
                                  service provider because of the tax/tariff
                                  they are required to pay. logifyx makes it
                                  easy for you to work with an experienced team
                                  that provides you with all the necessary materials.
                              </li>
                          </ul>
                          <ul>
                              <li className='h2'><div className="icon"><IoIosPlay/></div>OUR SCOPE</li>
                              <li className='text'>
                                  We make deliveries in all parts of Northern
                                  America and on an international level.
                                  We provide particular shipments, air crafts,
                                  and cargo trucks for extra-large goods together
                                  with our management
                                  team that will track the goods to their destination. </li>
                          </ul>
                          <ul>
                              <li className='h2'><div className="icon"><IoIosPlay/></div>EXPERIENCE</li>
                              <li className='text'>
                                  Longevity in the field has given us an upper hand
                                  in handling our clients. Most customers have
                                  problems with import and export custom documentation.
                                  But working with us automatically uplifts any iota
                                  of doubts on your goods because of the name
                                  we have created and familiarity with custom affairs.  </li>
                          </ul>
                          <ul>
                              <li className='h2'><div className="icon"><IoIosPlay/></div>TIMELINESS</li>
                              <li className='text'>
                                  We make sure customers get their goods on time to
                                  avoid disappointments that may often result in
                                  discredits. We get your materials ready as soon as
                                  you book us and start preparations for your shipments
                                  and cargo deliveries, with the constant evaluation for
                                  the goods to
                                  reach you in time with the help of our great team
                                  expertise.</li>
                          </ul>
                          <ul>
                              <li className='h2'><div className="icon"><IoIosPlay/></div>FREE ESTIMATES</li>
                              <li className='text'>
                                  Our dedicated team is ever ready to give
                                  you a free quote. Just fill the
                                  form and get your quote in less than 24 hours </li>
                          </ul>
                      </li>
                  </ul>
              </section>




              {/* our vision and mission */}

              <section className="vistionmission"
                    style={{
                        "--windowwidth": `${windowD.width}px`,
                        "--windowheight": `${windowD.height - 300}px`
                    }}
              >
                  <ul>
                      <li>
                          <ul>
                              <li className='h1'>OUR VISION & MISSION</li>
                              <li><div className="newline"></div></li>
                              <li className='text'>
                                  We want to have outstanding popularity
                                  worldwide in meeting Customer
                                  expectations for their various
                                  Logistics and transportation affairs
                                  extensively, with additional services
                                  beneficial to their various
                                  industries and companies on a regular.
                              </li>
                              <li className='text'>
                                  We are setting Standards for a highly
                                  effective and competitive operational
                                  system to surpass our competitors in
                                  satisfying our customers. Irrespective
                                  of the situation our customers are our
                                  utmost priority.
                                  The ‘CUSTOMERS FIRST’ Maintenance Strategy.
                              </li>
                          </ul>
                      </li>
                      <li className="industrysectors">
                            <h1>INDUSTRY SECTORS</h1>
                          <ul>
                                <li><div className="newline"></div></li>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>International Freight Forwarding</li><div className='hrHomes'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Road Transportation</li><div className='hrHomes'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Automotive</li><div className='hrHomes'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Customs Clearance</li><div className='hrHomes'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Preparation of Export Documents</li><div className='hrHomes'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Transport Management</li><div className='hrHomes'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Technology</li>
                            </ul>
                            
                        </li>
                </ul>

              </section>

              
              <Bottom/>
            
          </section>
         
          </>
     
  )
}

export default About