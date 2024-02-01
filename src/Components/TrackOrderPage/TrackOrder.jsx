import React, { useEffect, useState } from 'react'
import Bottom from '../BottomEnd/Bottom'
import Navbar from '../Navbar/Navbar'
import "./TrackOrder.css"
import Barcode from 'react-barcode'
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'


function TrackOrder() {
  const [windowD, setWindowD] = useState({
    height: 0,
    width: 0
})

  const reFData = collection(db, "tracktable")

// get track from codde .....  .............
const [idcodeEnter, setIdcodeEnter] = useState(null)
const [setTrack, setSetTrack] = useState(null)

  const setCodeChange = (e) => {
    const { value } = e.target
    setIdcodeEnter(value)
  }

  if(idcodeEnter)console.log(idcodeEnter)

  // const tracktoUpdate = doc(db, "tracktable")
 
  const getTrack = async () => {
    const tracktoUpdate = doc(db, "tracktable" , idcodeEnter.trim())
    console.log(tracktoUpdate)
    try {
      const docSnap = await getDoc(tracktoUpdate);
      if(docSnap.exists()) {
        console.log(docSnap.data());
        // alert("success")
        setSetTrack(prev => ({
          ...prev,           
          ...docSnap.data()   
        }))
      } else {
          alert("Document does not exist")
      }
  
  } catch(error) {
      console.log(error)
  } 
  }
// get track from codde .....................

  
useEffect(() => {
    setWindowD(prev => ({
        height: window.innerHeight,
        width: window.innerWidth
    }))
}, [windowD.width, windowD.height])

console.log(windowD.width)
  return (<>
 <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>

<section className="body"
style={{
"--windowwidth": `${windowD.width}px`,
"--windowheight": `${windowD.height}px`
}}
  >
    <Navbar />
    
    <section className="trackorderformcontainer">
      <ul>
        <li className="h1">TRACK</li>
        <li className="table">
          <table>
            <tr>
            <td colSpan={2} className="h1">
                ENTER THE CONSIGNMENT NO.
                </td>
            </tr>
            <tr className='trinput'>
              <td><input
                type="text"
                name="TrackID" id=""
                  placeholder=' Enter Tracking Number'
                  onChange={setCodeChange}
              /></td>
                <td><div
                  onClick={getTrack}
                  className="buttontrack">TRACK RESULT</div></td>
              
            </tr>
            <tr>
              <td colSpan={2} className="h1">
                EXP:12345
                </td>
            </tr>
          </table>
        </li>
        <li><div  className="printinvoice"> Print Invoice </div></li>
          <li className='trackform'
          style={{display: setTrack?.senderInfo.Name? "block" : "none"}}
          >
          <ul>
            <li className="title">LOGIFYX.</li>
            <li className="barcode">
                <div className="photo"><Barcode displayValue={true} width={windowD.width < 2001? 0.8 : 2} height={windowD.width < 2001? 80: 150} fontSize={windowD.width < 2001?15: 30} value={idcodeEnter} /></div>
              {/* <div className="code">dfad3789372vad</div> */}
            </li>
            <li className='sendandreciver'>
              <ul>
                <li>
                  <ul>
                    <li className="h1">Shipper Information</li><hr />
                    <li className="line1"><div></div></li>
                    <li className="text">
                        <div>{setTrack?.senderInfo.Name}</div>
                      <div>{setTrack?.senderInfo.Town}</div>
                      <div>{setTrack?.senderInfo.PhoneNumber}</div>
                      <div>{setTrack?.senderInfo.Email}</div>
                    </li>
                  </ul>
                </li>
            
                <li>
                  <ul>
                    <li className="h1">Receiver Information</li><hr />
                    <li className="line"><div></div></li>
                    <li className="text">
                    <div>{setTrack?.recieverInfo.Name}</div>
                      <div>{setTrack?.recieverInfo.Town}</div>
                      <div>{setTrack?.recieverInfo.PhoneNumber}</div>
                      <div>{setTrack?.recieverInfo.Email}</div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="shipstatus">
            SHIPMENT STATUS : {!setTrack?.recieverShipmentHistory.remarks ? setTrack?.senderShipmentHistory.remarks : setTrack?.recieverShipmentHistory.remarks}
            </li>
            <li className='S1'>Shipment information</li>
            <li className="line"><div></div></li>
            <li className='info'>
              <ul>
              
                  <li>
                
                  <div className="h1">Origin:</div>
                    <div className="text"> {setTrack?.shipmentInformation.origin}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Package:</div>
                  <div className="text">{setTrack?.shipmentInformation.Package} </div>
              
              </li>
                  <li>
                
                  <div className="h1">Status:</div>
                  <div className="text">{setTrack?.shipmentInformation.status}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Destination:</div>
                  <div className="text">{setTrack?.shipmentInformation.destination}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Carrier:</div>
                  <div className="text">{setTrack?.shipmentInformation.Carrier}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Type of Shipment:</div>
                  <div className="text">{setTrack?.shipmentInformation.typeofshipment}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Weight:</div>
                  <div className="text">{setTrack?.shipmentInformation.Weight}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Shipment Mode:</div>
                  <div className="text">{setTrack?.shipmentInformation.ShipmentMode} </div>
              
              </li>
                  <li>
                
                  <div className="h1">Carrier Reference No.:</div>
                  <div className="text">{setTrack?.shipmentInformation.CarrierReferenceNo}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Product:</div>
                  <div className="text"> {setTrack?.shipmentInformation.product}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Qty:</div>
                  <div className="text">{setTrack?.shipmentInformation.Qty}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Payment Mode:</div>
                  <div className="text">{setTrack?.shipmentInformation.PaymentMode}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Total Freight:</div>
                  <div className="text">{setTrack?.shipmentInformation.TotalFreight}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Expected Delivery Date:</div>
                  <div className="text">{setTrack?.shipmentInformation.ExpectedDeliveryDate}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Departure Time:</div>
                  <div className="text">{setTrack?.shipmentInformation.DepartureTime}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Pick-up Date:</div>
                  <div className="text">{setTrack?.shipmentInformation.PickUpDate}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Pick-up Time:</div>
                  <div className="text">{setTrack?.shipmentInformation.PickUpTime}</div>
              
              </li>
                  <li>
                
                  <div className="h1">Comments:</div>
                  <div className="text">{setTrack?.shipmentInformation.Comments}</div>
              
              </li>
             
                 
              
                </ul>
            </li>

              <li className="formtable"
                style={{
                display: (windowD.width < 1201) && "none"
              }}
              >
              <ul>
              <li className='S1'>Shipment History</li>
                <li className="line"><div></div></li>
                <li>
                  <table>
                    {/* <th>
                      <td>hed</td>
                      <td>hed</td>
                      <td>hed</td>
                    </th> */}
                    <tr className='headtitle'>
                      <td>Date</td>
                      <td>Time</td>
                      <td>Location</td>
                      <td>	Status</td>
                      <td>		Updated By</td>
                      <td>		Remarks</td>
                    </tr>
                    <tr>
                      <td>{setTrack?.senderShipmentHistory.date}</td>
                      <td>{setTrack?.senderShipmentHistory.Time}</td>
                      <td>{setTrack?.senderShipmentHistory.location}</td>
                      <td>{setTrack?.senderShipmentHistory.status}</td>
                      <td>{setTrack?.senderShipmentHistory.Updatedby}</td>
                      <td>{setTrack?.senderShipmentHistory.remarks}</td>
                    
                    </tr>
                      <tr
                         style={{
                          display:!setTrack?.recieverShipmentHistory.remarks && "none"
                        }}
                      >
                    <td>{setTrack?.recieverShipmentHistory.date}</td>
                      <td>{setTrack?.recieverShipmentHistory.Time}</td>
                      <td>{setTrack?.recieverShipmentHistory.location}</td>
                      <td>{setTrack?.recieverShipmentHistory.status}</td>
                      <td>{setTrack?.recieverShipmentHistory.Updatedby}</td>
                      <td>{setTrack?.recieverShipmentHistory.remarks}</td>
                    </tr>
                
                  </table>
                </li>
              </ul>
              </li>
              






              <li className="shpipmenthistorymobile"
                 style={{
                  display: (windowD.width > 1200) && "none"
                }}
              >
                <li className='S1'>Shipment History</li>
                <hr />
                {/* <li className="line"><div></div></li> */}
                <ul>
                  <li className='sendershipmobile'>
                    <ul>
                      <li>
                        <ul>
                          <li>Date</li>
                          <li>{setTrack?.senderShipmentHistory.date}</li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Time</li>
                          <li>{setTrack?.senderShipmentHistory.Time}</li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Location</li>
                          <li>{setTrack?.senderShipmentHistory.location}</li>
                        </ul>
                      </li>
                    
                      <li>
                        <ul>
                          <li>Status</li>
                          <li>{setTrack?.senderShipmentHistory.status}</li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Updated By</li>
                          <li>{setTrack?.senderShipmentHistory.Updatedby}</li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Remarks</li>
                          <li>{setTrack?.senderShipmentHistory.remarks}</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className='recievershipmobile'
                  
                    style={{
                      display:!setTrack?.recieverShipmentHistory.remarks && "none"
                    }}
                  
                  >
                    <ul>
                      <li>
                        <ul>
                          <li>Date</li>
                          <li>{setTrack?.recieverShipmentHistory.date}</li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Time</li>
                          <li>{setTrack?.recieverShipmentHistory.Time}</li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Location</li>
                          <li>{setTrack?.recieverShipmentHistory.location}</li>
                        </ul>
                      </li>
                    
                      <li>
                        <ul>
                          <li>Status</li>
                          <li>{setTrack?.recieverShipmentHistory.status}</li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Updated By</li>
                          <li>{setTrack?.recieverShipmentHistory.Updatedby}</li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Remarks</li>
                          <li>{setTrack?.recieverShipmentHistory.remarks}</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                 
                </ul>
              </li>
          </ul>

        </li>
      </ul>
    </section>
    <Bottom/>
    </section>
    </>
  )
}

export default TrackOrder