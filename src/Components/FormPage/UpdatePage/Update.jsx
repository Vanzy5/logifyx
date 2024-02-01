import React, { useEffect, useState } from 'react'

import "./Update.css"
import Barcode from 'react-barcode'
import Navbar from '../../Navbar/Navbar'
import Bottom from '../../BottomEnd/Bottom'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../config/firebase'


function Update() {
  const [windowD, setWindowD] = useState({
    height: 0,
    width: 0
  })
  const [currenttrack, setCurrenttrack] = useState(null)
    // Read the params ....

  const { idCode } = useParams()
  // const { idCodeParam } = useParams()
  // const { name , idCode} = idCodeParam 


  console.log(idCode)
  // console.log(name)
  const navigate = useNavigate()


  const tostringid = String(idCode)
  const tracktoUpdate = doc(db , "tracktable" , tostringid )

  // useEffect(() => { 
   
  // },[])
  // Get track to update ...

    // SenderInformation

    const [senderInfo, setSenderInfo] = useState({
        Name: "", 
        Town:  "" ,
        PhoneNumber: "", 
        Email : ""
    })

    const onSenderInfoChange = (e) => {
        const { name, value } = e.target 
        setSenderInfo(prev => ({
            ...prev, 
            [name] : value
        }))
    }



    // RecieverInformation

    const [recieverInfo, setRecieverInfo] = useState({
      Name: "", 
        Town: "" ,
        PhoneNumber:"" ,  
        Email :"" 
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
          origin: "",
          Package: "",
          status: "" ,
          destination: "",
          Carrier: "",
          typeofshipment: "", 
          Weight: "", 
          ShipmentMode: "",
          CarrierReferenceNo: "",
          product: "", 
          Qty: "",
          PaymentMode: "",
          TotalFreight: "", 
          ExpectedDeliveryDate: "",
          DepartureTime: "", 
          PickUpDate: "" , 
          PickUpTime: "", 
          Comments: ""
  
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
        date: "" ,
        Time: "",
        location: "", 
        status: "", 
        Updatedby: "" , 
        remarks: ""
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
      date: "" ,
      Time: "",
      location: "", 
      status: "", 
      Updatedby: "" , 
      remarks: ""
    })

    const onrecieverShipmentHistoryChange = (e) => {
        const { name, value } = e.target 
        setRecieverShipmentHistory(prev => ({
            ...prev, 
            [name] : value
        }))
  }
  
  if(currenttrack) console.log(currenttrack)

  useEffect(() => {
  
    const getcurrenttrack = async () => {
      try {
        const docSnap = await getDoc(tracktoUpdate);
          
        setRecieverInfo(prev => {
          return {
            ...prev, 
            ...docSnap.data().recieverInfo
          }
        })
        setSenderInfo(prev => {
          return {
            ...prev, 
            ...docSnap.data().senderInfo
          }
        })
        setShipmentInformation(prev => {
          return {
            ...prev, 
            ...docSnap.data().shipmentInformation
          }
        })
        setSenderShipmentHistory(prev => {
          return {
            ...prev, 
            ...docSnap.data().senderShipmentHistory
          }
        })
        setRecieverShipmentHistory(prev => {
          return {
            ...prev, 
            ...docSnap.data().recieverShipmentHistory
          }
        })
        // if(docSnap.exists()) {
        //   setCurrenttrack({ ...docSnap.data() })
        // } else {
        //     console.log("Document does not exist")
        // }


    
    } catch(error) {
        console.log(error)
    }
    }
    getcurrenttrack()
 
    setWindowD(prev => ({
        height: window.innerHeight,
        width: window.innerWidth
    }))
}, [windowD.width, windowD.height])

  console.log(windowD.width)
  

  // useEffect(() => {
  
  // },[])

  
  const updatetrack = async () => {
    
    const form = {
      senderInfo, 
      recieverInfo, 
      shipmentInformation, 
      senderShipmentHistory, 
      recieverShipmentHistory
    }
   
    await updateDoc(tracktoUpdate, form)
      .then(() => {
              return navigate("/ViewPage")
            })
      
    }

    currenttrack && console.log(currenttrack) 

  return (<>
 
<section className="bodyupdate"
style={{
"--windowwidth": `${windowD.width}px`,
"--windowheight": `${windowD.height}px`
}}
  >
    <Navbar />
    
    <section className="trackorderformcontainer">
      <ul>
        {/* <li className="h1">TRACK</li> */}
        {/* <li className="table">
          <table>
            <tr>
            <td colSpan={2} className="h1">
                ENTER THE CONSIGNMENT NO.
                </td>
            </tr> */}
            {/* <tr className='trinput'>
              <td><input
                type="text"
                name="TrackID" id=""
              placeholder=' Enter Tracking Number'
              /></td>
              <td><div className="buttontrack">TRACK RESULT</div></td>
              
            </tr> */}
            {/* <tr>
              <td colSpan={2} className="h1">
                EXP:12345
                </td>
            </tr>
          </table>
        </li> */}

        <li className='trackform'>
          <ul>
              <li className="title">Update { recieverInfo.Name}</li>
            <li className="barcode">
                {/* <div className="photo"><Barcode displayValue={true} width={windowD.width >  2} height={150} fontSize={30} value={idCode} /></div> */}
                <div className="photo"><Barcode displayValue={true} width={windowD.width < 2001? 0.8 : 2} height={windowD.width < 2001? 80: 150} fontSize={windowD.width < 2001?15: 30} value={idCode} /></div>

                {/* <div className="code">dfad3789372vad</div> */}
            </li>
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
                      <div><input type="email" name="Email" id="" value={senderInfo.Email} onChange={ onSenderInfoChange}/></div>
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
            SHIPMENT STATUS  :   { !recieverShipmentHistory.remarks? senderShipmentHistory.remarks :  recieverShipmentHistory.remarks}
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
                    <td> <input type="text"  name="date" id="" value={recieverShipmentHistory.date} onChange={onrecieverShipmentHistoryChange } /></td>
                    <td> <input type="text"  name="Time" id="" value={recieverShipmentHistory.Time} onChange={onrecieverShipmentHistoryChange } /></td>
                    <td> <input type="text"  name="location" id="" value={recieverShipmentHistory.location} onChange={onrecieverShipmentHistoryChange } /></td>
                    <td> <input type="text"  name="status" id="" value={recieverShipmentHistory.status} onChange={onrecieverShipmentHistoryChange } /></td>
                    <td> <input type="text"  name="Updatedby" id="" value={recieverShipmentHistory.Updatedby} onChange={onrecieverShipmentHistoryChange } /></td>
                    <td> <input type="text"   name="remarks" id="" value={recieverShipmentHistory.remarks} onChange={onrecieverShipmentHistoryChange } /></td>
                    
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
          
          <li><div onClick={updatetrack}   className="printinvoice"> Update  </div></li>
      </ul>
    </section>
    <Bottom/>
    </section>
    </>
  )
}

export default Update