import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../../config/firebase'
import Bottom from '../../BottomEnd/Bottom'
import Navbar from '../../Navbar/Navbar'
import Onetrack from './Onetrack'

import "./View.css"


function View() {
    const [windowD, setWindowD] = useState({
        height: 0,
        width: 0
    })
    const [tracks, setTracks] = useState([])
    useEffect(() => {
        setWindowD(prev => ({
            height: window.innerHeight,
            width: window.innerWidth
        }))
    }, [windowD.width, windowD.height , tracks])
   // get all track ....
    const tracksCollectionRef = collection(db , "tracktable")
    const getUsers = async () => {
        const data = await getDocs(tracksCollectionRef)
        console.log(data.docs)
        setTracks(
            data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
        )
        console.log("aa")
    }
    // Update changers .... 
    const updatechanges = async () => {
        await onSnapshot(tracksCollectionRef, (dataIn) => {
            setTracks(
                dataIn.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))
            )
        })
    }
    useEffect(() => {
        getUsers() 
        updatechanges()
    }, [tracks])
    let trackdata
    if (tracks.length === 0) {
        trackdata = <p
            style={{
            marginLeft:100
        }}
        >No Data </p>
      }else if(tracks.length > 0){
        trackdata = tracks.map(t => {
        return <>
            <Onetrack name={t.recieverInfo.Name} id={t.id}/>
        </>
        })
    } else {
        trackdata = <p
        style={{
        marginLeft:100
    }}
    >Problem with Network </p>
    }
    // Read all the elements ..................
    console.log(windowD.width)
  return (
    <section className="bodyview"
          style={{
      "--windowwidth": `${windowD.width}px`,
      "--windowheight": `${windowD.height}px`
  }}
      >
          <Navbar />
          <section className='viewbodycontainer'
                  style={{
              "--windowwidth": `${windowD.width}px`,
              "--windowheight": `${windowD.height - 200}px`
          }}
          >
     <table>
              <tr>
                  <td className='head'>Reciever Name</td>
                  <td className='head'> code </td>
            </tr>
                  {trackdata}
          </table>
          </section>
          <Bottom/>
          </section>
  )
}
export default View