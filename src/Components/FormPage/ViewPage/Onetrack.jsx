import { collection, deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../../config/firebase'
import "./View.css"


function Onetrack({ name, id }) {
  const naviagte = useNavigate()

  function updatepage() {
    const idCode = id
    const obj = {name , idCode}
    naviagte(`/UpdatePage/${idCode}`)
  }


  // Delete track .....
// const docref = collection(db , "tracktable")

  const  deleteTrack = async() => {
    const datadoc = doc(db, "tracktable", id)
    // confirm("Delete")
    
    await deleteDoc(datadoc)
    .then(()=>alert("Deleted"))
  }
  

  return (
    <tr>
    <td>{ name }</td>
          <td>{id}</td>
          <td className='btn'><button onClick={deleteTrack}>Delete</button></td>
          <td><button onClick={updatepage}>Update</button></td>
</tr>
  )
}

export default Onetrack











