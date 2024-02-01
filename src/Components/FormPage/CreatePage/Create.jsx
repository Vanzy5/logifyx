import React, { useEffect, useState } from 'react'

import "./Create.css"
import Barcode from 'react-barcode'
import Navbar from '../../Navbar/Navbar'
import Bottom from '../../BottomEnd/Bottom'
import { db } from '../../../config/firebase'
import {addDoc, collection } from "firebase/firestore"

function Create() {
  const [windowD, setWindowD] = useState({
    height: 0,
    width: 0
  })
    
    // SenderInformation

    const [senderInfo, setSenderInfo] = useState({
        Name: "Emmanuel Blake", 
        Town:  "Pennsylvania" ,
        PhoneNumber: "430-257-8494", 
        Email : "usedcarsforsalesale@gmail.com"
    })

    const onSenderInfoChange = (e) => {
        const { name, value } = e.target 
        setSenderInfo(prev => ({
            ...prev, 
            [name] : value
        }))
  }
  
  console.log(senderInfo.Name)


    // RecieverInformation

    const [recieverInfo, setRecieverInfo] = useState({
      Name: "", 
      Town:  "" ,
      PhoneNumber: "" ,
      Email : ""
    })

    const onRecieverInfoChange = (e) => {
        const { name, value } = e.target 
        setRecieverInfo(prev => ({
            ...prev, 
            [name] : value
        }))
    }


// Shippment Infomation
    const [shipmentInformation, setShipmentInformation] = useState(
        {
            origin: "USA",
            Package: "01",
            status: "En route" ,
            destination: "USA",
            Carrier: "logifyx",
            typeofshipment: "Cargo", 
            Weight: "4832Lbs", 
            ShipmentMode: "LandShipping",
            CarrierReferenceNo: "G00054332",
            product: "Cadillac CTS", 
            Qty: "01",
            PaymentMode: "Cash",
            TotalFreight: "01", 
            ExpectedDeliveryDate: "2022-11-20",
            DepartureTime: "08:00 am", 
            PickUpDate: "2022-11-20" , 
            PickUpTime: "11:00 am", 
            Comments: "En route"
  
        }
    )

    const onShippmentInfoChange = (e) => {
        const { name, value } = e.target 
        setShipmentInformation(prev => ({
            ...prev, 
            [name] : value
        }))
    }


    // Shippment History sender ....

    const [senderShipmentHistory, setSenderShipmentHistory] = useState({
        date: "2022-11-18" ,
        Time: "7:00 am",
        location: "Pennsylvania", 
        status: "Registered On Board", 
        Updatedby: "logifyx" , 
        remarks: "Registered on board"
    })

    const onsenderShipmentHistoryChange = (e) => {
        const { name, value } = e.target 
        setSenderShipmentHistory(prev => ({
            ...prev, 
            [name] : value
        }))
    }


    // Shippment History reciever ....

    const [recieverShipmentHistory, setRecieverShipmentHistory] = useState({
        date: "2022-11-18" ,
        Time: "7:00 am",
        location: "", 
        status: "Registered On Board", 
        Updatedby: "logifyx" , 
        remarks: ""
    })

    const onrecieverShipmentHistoryChange = (e) => {
        const { name, value } = e.target 
        setRecieverShipmentHistory(prev => ({
            ...prev, 
            [name] : value
        }))
    }


useEffect(() => {
    setWindowD(prev => ({
        height: window.innerHeight,
        width: window.innerWidth
    }))
}, [windowD.width, windowD.height])

  console.log(windowD.width)
  


// Create ...
  
const tracktableCollectionRef = collection(db, "tracktable") 

  const createTrackform = async () => {
    const form = {
      senderInfo, 
      recieverInfo, 
      shipmentInformation, 
      senderShipmentHistory, 
      recieverShipmentHistory
    }
   
    await addDoc(tracktableCollectionRef, form)
      .then(
        (track) => alert("Track created with id : " + track.id)
      ).catch(err => console.log(err.message))
    
}



  return (<>
 <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>

<section className="bodycreate"
style={{
"--windowwidth": `${windowD.width}px`,
"--windowheight": `${windowD.height}px`
}}
  >
    <Navbar />
    
    <section className="trackorderformcontainer">
      <ul>
    
        <li className='trackform'>
          <ul>
            <li className="title">Create Track</li>
            <li className='sendandreciver'>
              <ul>
                <li>
                  <ul>
                    <li className="h1">Shipper Information</li><hr />
                    <li className="line1"><div></div></li>
                    <li className="text">

                                              <div><input type="text" name="Name" id="" value={senderInfo.Name} onChange={ onSenderInfoChange} /></div>
                      <div><input type="text" name="Town" id="" value={senderInfo.Town} onChange={ onSenderInfoChange}/></div>
                      <div><input type="text" name="PhoneNumber" id="" value={senderInfo.PhoneNumber} onChange={ onSenderInfoChange}/></div>
                      <div><input type="email" name = "Email" id="" value={senderInfo.Email} onChange={ onSenderInfoChange}/></div>
                    </li>
                  </ul>
                </li>
            
                <li>
                  <ul>
                    <li className="h1">Receiver Information</li><hr />
                    <li className="line"><div></div></li>
                    <li className="text">
                      <div><input type="text" name="Name" id="" value={recieverInfo.Name} onChange={ onRecieverInfoChange}/></div>
                      <div><input type="text" name="Town" id="" value={recieverInfo.Town} onChange={ onRecieverInfoChange}/></div>
                      <div><input type="text" name="PhoneNumber" id="" value={recieverInfo.PhoneNumber} onChange={ onRecieverInfoChange}/></div>
                      <div><input type="email" name="Email" id="" value={recieverInfo.Email} onChange={ onRecieverInfoChange}/></div>
                      {/* <div>7637 Jacobie Blvd dallas tx 75217</div>
                      <div>214-554-6817</div>
                      <div>fieldsedward95@gmail.com</div> */}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="shipstatus">
                SHIPMENT STATUS: {recieverShipmentHistory.remarks}
            </li>
            <li className='S1'>Shipment information</li>
            <li className="line"><div></div></li>
            <li className='info'>
              <ul>
              
                  <li>
                
                  <div className="h1">Origin:</div>
                  <div className="text"><input type="text" name="origin" id="" value={shipmentInformation.origin} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Package:</div>
                  <div className="text"><input type="text" name="Package" id="" value={shipmentInformation.Package} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Status:</div>
                  <div className="text"><input type="text" name="status" id="" value={shipmentInformation.status} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Destination:</div>
                  <div className="text"><input type="text" name="destination" id="" value={shipmentInformation.destination} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Carrier:</div>
                  <div className="text"><input type="text" name="Carrier" id="" value={shipmentInformation.Carrier} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Type of Shipment:</div>
                  <div className="text"><input type="text" name="typeofshipment" id="" value={shipmentInformation.typeofshipment} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Weight:</div>
                  <div className="text"><input type="text" name="Weight" id="" value={shipmentInformation.Weight} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Shipment Mode:</div>
                  <div className="text"><input type="text" name="ShipmentMode" id="" value={shipmentInformation.ShipmentMode} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Carrier Reference No.:</div>
                  <div className="text"><input type="text" name="CarrierReferenceNo" id="" value={shipmentInformation.CarrierReferenceNo} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Product:</div>
                  <div className="text"><input type="text" name="product" id="" value={shipmentInformation.product} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Qty:</div>
                  <div className="text"><input type="text" name="Qty" id="" value={shipmentInformation.Qty} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Payment Mode:</div>
                  <div className="text"><input type="text" name="PaymentMode" id="" value={shipmentInformation.PaymentMode} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Total Freight:</div>
                  <div className="text"><input type="text" name="TotalFreight" id="" value={shipmentInformation.TotalFreight} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Expected Delivery Date:</div>
                  <div className="text"><input type="text" name="ExpectedDeliveryDate" id="" value={shipmentInformation.ExpectedDeliveryDate} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Departure Time:</div>
                  <div className="text"><input type="text" name="DepartureTime" id="" value={shipmentInformation.DepartureTime} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Pick-up Date:</div>
                  <div className="text"><input type="text" name="PickUpDate" id="" value={shipmentInformation.PickUpDate} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Pick-up Time:</div>
                  <div className="text"><input type="text" name="PickUpTime" id="" value={shipmentInformation.PickUpTime} onChange={onShippmentInfoChange} /></div>
              
              </li>
                  <li>
                
                  <div className="h1">Comments:</div>
                  <div className="text"><input type="text" name="Comments" id="" value={shipmentInformation.Comments} onChange={onShippmentInfoChange} /></div>
              
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
                   <td>Date </td>
                      <td>Time</td>
                      <td>Location</td>
                      <td>	Status</td>
                      <td>		Updated By</td>
                      <td>		Remarks</td>
                    </tr>
                    <tr>
                      <td> <input type="text" name="date" id="" value={senderShipmentHistory.date} onChange={onsenderShipmentHistoryChange } /></td>
                      <td> <input type="text" name="Time" id="" value={senderShipmentHistory.Time} onChange={onsenderShipmentHistoryChange } /></td>
                      <td> <input type="text" name="location" id="" value={senderShipmentHistory.location} onChange={onsenderShipmentHistoryChange } /></td>
                      <td> <input type="text" name="status" id="" value={senderShipmentHistory.status} onChange={onsenderShipmentHistoryChange } /></td>
                      <td> <input type="text" name="Updatedby" id="" value={senderShipmentHistory.Updatedby} onChange={onsenderShipmentHistoryChange } /></td>
                      <td> <input type="text" name="remarks" id="" value={senderShipmentHistory.remarks} onChange={onsenderShipmentHistoryChange } /></td>
                     
                    </tr>
                    <tr>
                    <td> <input type="text" name="date" id="" value={recieverShipmentHistory.date} onChange={onrecieverShipmentHistoryChange } /></td>
                    <td> <input type="text" name="Time" id="" value={recieverShipmentHistory.Time} onChange={onrecieverShipmentHistoryChange } /></td>
                    <td> <input type="text" name="location" id="" value={recieverShipmentHistory.location} onChange={onrecieverShipmentHistoryChange } /></td>
                    <td> <input type="text" name="status" id="" value={recieverShipmentHistory.status} onChange={onrecieverShipmentHistoryChange } /></td>
                    <td> <input type="text" name="Updatedby" id="" value={recieverShipmentHistory.Updatedby} onChange={onrecieverShipmentHistoryChange } /></td>
                    <td> <input type="text" name="remarks" id="" value={recieverShipmentHistory.remarks} onChange={onrecieverShipmentHistoryChange } /></td>
                    
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
                          <li><input type="text" name="date" id="" value={senderShipmentHistory.date} onChange={onsenderShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Time</li>
                          <li><input type="text" name="Time" id="" value={senderShipmentHistory.Time} onChange={onsenderShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Location</li>
                          <li><input type="text" name="location" id="" value={senderShipmentHistory.location} onChange={onsenderShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                    
                      <li>
                        <ul>
                          <li>Status</li>
                          <li><input type="text" name="status" id="" value={senderShipmentHistory.status} onChange={onsenderShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Updated By</li>
                          <li><input type="text" name="Updatedby" id="" value={senderShipmentHistory.Updatedby} onChange={onsenderShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Remarks</li>
                          <li><input type="text" name="remarks" id="" value={senderShipmentHistory.remarks} onChange={onsenderShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className='recievershipmobile'>
                    <ul>
                      <li>
                        <ul>
                          <li>Date</li>
                          <li><input type="text" name="date" id="" value={recieverShipmentHistory.date} onChange={onrecieverShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Time</li>
                          <li><input type="text" name="Time" id="" value={recieverShipmentHistory.Time} onChange={onrecieverShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Location</li>
                          <li><input type="text" name="location" id="" value={recieverShipmentHistory.location} onChange={onrecieverShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                    
                      <li>
                        <ul>
                          <li>Status</li>
                          <li><input type="text" name="status" id="" value={recieverShipmentHistory.status} onChange={onrecieverShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Updated By</li>
                          <li><input type="text" name="Updatedby" id="" value={recieverShipmentHistory.Updatedby} onChange={onrecieverShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li>Remarks</li>
                          <li><input type="text" name="remarks" id="" value={recieverShipmentHistory.remarks} onChange={onrecieverShipmentHistoryChange } /></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                 
                
                 
                </ul>
              </li>
          </ul>

          </li>
          
          <li><div  className="printinvoice" onClick={createTrackform}> Create track </div></li>
      </ul>
    </section>
    <Bottom/>
    </section>
    </>
  )
}

export default Create