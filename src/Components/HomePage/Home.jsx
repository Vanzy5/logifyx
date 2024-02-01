import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import {HiPlusSm} from 'react-icons/hi'
import { MdOutlineLibraryBooks, MdOutlineNavigateNext } from "react-icons/md"
import {FaShip , FaPlane, FaRegKeyboard, FaRegListAlt} from "react-icons/fa"  // ship , plane
import { MdLocalShipping } from "react-icons/md"  // car
import { FaStar } from "react-icons/fa"
import Bottom from '../BottomEnd/Bottom'


function Home() {
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
                    backgroundImage: (windowD.width > 2000)? `url("/pics/plane.jpg")`: "none",
                    backgroundSize: "cover",
                    "--windowwidth": `${windowD.width}px`,
                    "--windowheight": `${windowD.height}px`
                }}
            >
                {/* Intro  */}
                <section className='intro'
                    style={{
                        backgroundImage: `url("/pics/plane.jpg")`,
                        "--windowwidth": `${windowD.width}px`,
                        "--windowheight": `${windowD.height}px`,
             
                    }}
                >
                    <Navbar />
                    <div className="introtextsection">
                        <ul>
                            <li><h1>
                                FAST COURIER FOR SUCCESSFUL BUSINESSES
                            </h1></li>
                            <li className='text'>
                                Over the years, we have rendered
                                incredible services that have
                                helped our customers grow their businesses.

                            </li>
                            <li><div className="introreadmore">READ MORE</div></li>
                        </ul>
                    </div>

                    <div class="introinfoconnect">
                        <ul>
                            <li><div className="introline"></div></li>
                            <li><h1>GET A QUOTE</h1></li>
                            <li className='introgreatericon'><MdOutlineNavigateNext className='MdOutlineNavigateNext' /></li>
                        </ul>
                        <ul>
                            <li><div className="introline"></div></li>
                            <li><h1>INSURANCE</h1></li>
                            <li className='introgreatericon'><MdOutlineNavigateNext className='MdOutlineNavigateNext' /></li>
                        </ul>
                        <ul>
                            <li><div className="introline"></div></li>
                            <li><h1>CONTACT US</h1></li>
                            <li className='introgreatericon'><MdOutlineNavigateNext className='MdOutlineNavigateNext' /></li>
                         
                        </ul>
                    </div>
      
                </section>

                {/* About  */}
                <section className="about"
                    style={{
                        "--windowwidth": `${windowD.width}px`,
                        "--windowheight": `${windowD.height - 200}px`
                    }}
                >
                    
                    <div className="aboutwrapper">
                        <div className="aboutpart">
                            <ul>
                                <li><h1>ABOUT</h1></li>
                                <li><h4>
                                    21 YEARS NOW AND COUNTING, WE HAVE SUPPLIED LOGISTICS SOLUTIONS TO OUR CLIENTS WORLDWIDE.
                                </h4></li>
                                <li>
                                    With the help of our partners and
                                    a team with expertise in Business
                                    transport, packing, and relocation
                                    assistance, and freight forwarding
                                    customs clearance amongst others, we
                                    do everything to maintain good customer
                                    relationships. We uphold outstanding
                                    optimized logistic solutions to
                                    suit the various industries of our clients.
                                </li>
                                <li>
                                    In no specific order,
                                    logifyx offer logistics
                                    solutions in the fields of education,
                                    construction, agriculture, health, and
                                    other distribution companies in the
                                    commercial base,
                                    be it operating under an NGO or not.
                                </li>
                            </ul>
                        </div>
                        <div className="industrysectors">
                            <h1>INDUSTRY SECTORS</h1>
                            <ul>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>International Freight Forwarding</li><div className='hrHome'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Road Transportation</li><div className='hrHome'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Automotive</li><div className='hrHome'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Customs Clearance</li><div className='hrHome'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Preparation of Export Documents</li><div className='hrHome'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Transport Management</li><div className='hrHome'></div>
                                <li><a className='plusparent'><HiPlusSm className='plus' /></a>Technology</li>
                            </ul>
                            
                        </div>
                    </div>
                  
                </section>

                


                {/* how we help you section ..... */}
                <section className="howwehelpyou"
                    style={{
                        backgroundImage: `url("/pics/truck.jpg")`,
                        backgroundSize: "cover",
                        "--windowwidth": `${windowD.width + 200}px`,
                        "--windowheight": `${windowD.height + 300}px`
                    }}
                >
                    <h1>HOW WE HELP YOU</h1>
                    <div className="howwehelpyoucontainer"
                        style={{
                            "--windowwidth": `${windowD.width - 900}px`,
                            "--windowheight": `${windowD.height - 200}px`
                        }}
                    >
                        <ul
                        
                        >
                            <li className='howwehelplistitem'><div className="howweIcon"><FaShip /></div></li>
                            <li className='howwehelplistitem'><h1>SEA FREIGHT</h1></li>
                            <li className='howwehelplistitem'>
                                We provide customized supply chains for your
                                equipment up to the point of delivery.
                                Our team is always present to make sure
                                your freighter successfully
                                reaches its destination in proper condition.
                            </li>
                        </ul>
                        <ul>
                            <li className='howwehelplistitem'><div className="howweIcon"><MdLocalShipping /></div></li>
                            <li className='howwehelplistitem'><h1>ROAD FREIGHT</h1></li>
                            <li className='howwehelplistitem'>
                                We offer bourgeois door-to-door freight
                                transport services through optimized big
                                or small container loads. With logifyx,
                                your business is given a competitive advantage over your
                                competitors in the global road transport system
                            </li>
                        </ul>
                        <ul>
                            <li className='howwehelplistitem'><div className="howweIcon"><FaPlane /></div></li>
                            <li className='howwehelplistitem'><h1>AIR FREIGHT</h1></li>
                            <li className='howwehelplistitem'>
                                logifyx provide readily available full
                                freighter aircraft best suitable for your
                                types of equipment be it a direct or combined
                                service. Our air freights are
                                highly capacitated and best suit urgent delivery.
                            </li>
                        </ul>
                    </div>

                </section>

                
                {/* ourcustomerstrust.. */}
                <section className="ourcustomerstrust"
                               style={{
                                backgroundImage: (windowD.width < 2000)? `url("/pics/logo/contruction.jpg")`: "none",
                                backgroundSize: "cover",
                                "--windowwidth": `${windowD.width}px`,
                                "--windowheight": `${windowD.height}px`
                            }}
                >

                    <div className="ourcustomercontainer">
                        <ul>
                            <li><h1>OUR CUSTOMERS TRUST US</h1></li>
                            <li><div className="moretestimonials">MORE TESTIMONIALS</div></li>
                        </ul>
                        <ul>
                            <li className='ourstars'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar/>
                            </li>
                            <li className='text'>
                                The timeliness of your team is
                                quite impeccable, your team is
                                doing a great job, you have impressed
                                me. Most certainly, we are looking
                                forward to continuing this relationship.
                            </li>
                            <li className='ourcustomer'>
                                <img src="/pics/ship1.webp"/> <a>Alen wood</a>
                            </li>
                        </ul>
                    </div>

                </section>



                {/* whychooseuse */}

                <section className="whychooseuse"
                    style={{
                         
                        "--windowwidth": `${windowD.width}px`,
                        "--windowheight": `${windowD.height}px`
                    }}
                >
                    <div className="questionwhy">
                        <h1>WHY CHOOSE US?</h1>
                    </div>
                    <div className="answerwhy"
                  style={{   backgroundImage: `url("/pics/logo/1Boy.jpg")`,
                     backgroundSize: "cover",
                    }}>
                        
                    </div>
                </section>
                       {/* whychooseusepart2*/}
                <section className='whychooseusepart2'>
                        <ul>
                        <li ><div className="whyicons">
                        <FaRegKeyboard/>
                        </div></li>
                            <li ><h1>OUR SCOPE</h1></li>
                               <li >
                            We make deliveries in all parts of
                            Europe and on an international level.
                            We provide particular shipments, air
                            crafts, and cargo trucks for extra-large
                            goods together with our management team that
                            will track the goods to their destination.
                                 </li>
                        </ul>
                        <ul>
                        <li ><div className="whyicons">
                        <MdOutlineLibraryBooks/></div></li>
                            <li ><h1>AFFORDABILITY</h1></li>
                               <li >
                            logifyx makes it easy for you to work
                            with an experienced team that provides
                            you with all the necessary materials.
                            Providing optimized shipments, freight
                            forwarding,
                            and delivery services at flexible prices.   </li>
                        </ul>
                        <ul>
                        <li ><div className="whyicons">
                        <FaRegListAlt/></div></li>
                            <li ><h1>RELIABILITY</h1></li>
                               <li >
                            We have come this far because of
                            the reliable partnerships we have
                            built with clients over the years.
                            logifyx is bent on maintaining a
                            solid reputation and creating many
                            reliable relationships
                            with our customers in the future.
                                 </li>
                        </ul>
                </section>

                <section className="partners">
                    <h1>OUR PARTNERS:</h1>
                    <div className="partnercontainer">
                        <img src="/pics/logo/1L.jpg" alt="" />
                        <img src="/pics/logo/2L.jpg" alt="" />
                        <img src="/pics/logo/3L.jpg" alt="" />
                        <img src="/pics/logo/4L.jpg" alt="" />
                       
                    </div>
                </section>




                {/* numberspeak....  */}

                <section className="numberspeak"
                
                >
                    <ul>
                        <li><h1>NUMBER SPEAKS</h1></li>
                        <li><div className="line"></div></li>
                        <li>
                            <div className="numbers">
                                <ul>
                                    <li className='h1'>109,000+</li>
                                    <li><div className="perso">Packages delivered</div></li>
                                    <li><div className="linesecond"></div></li>
                                </ul>
                                <ul>
                                    <li className='h1'>1,100K </li>
                                    <li><div className="perso">Team Members</div></li>
                                    <li><div className="linesecond"></div></li>
                                </ul>
                                <ul>
                                    <li className='h1'>1,040</li>
                                    <li><div className="perso">offices Worldwide</div></li>
                                    <li><div className="linesecond"></div></li>
                                </ul>
                                <ul>
                                    <li className='h1'>1,000,000+</li>
                                    <li><div className="perso">Satisfied Customers</div></li>
                                    <li><div className="linesecond"></div></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </section>


                {/* haveaquestion */}

                <section className="haveaquestion">
                    <ul>
                        <li className='h1'>HAVE A QUESTION?</li>
                        <li>
                            <ul>
                                <li><div className="estimatebtn">GET A FREE ESTIMATE</div></li>
                                <li><div className="contactbtn">CONTACT US</div></li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <section>
                <Bottom/>
            </section>

            </section>

            {/* <Bottom/> */}
        </>
    )

}

export default Home