import { doc, getDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../config/firebase'

function GetDatawithButton() {

        // ...........................................
        const [idcodeEnter, setIdcodeEnter] = useState(null)
        const [setTrack, setSetTrack] = useState(null)
        
          const setCodeChange = (e) => {
            const { value } = e.target
            setIdcodeEnter(value)
          }
        
          if(idcodeEnter)console.log(idcodeEnter)
    
        const getTrack = async () => {
            const tracktoUpdate = doc(db, "tracktable" , idcodeEnter)
            // console.log(tracktoUpdate)
            try {
              
              const docSnap = await getDoc(tracktoUpdate);
              if(docSnap.exists()) {
                console.log(docSnap.data());
                alert("success")
                // setSetTrack(prev => ({
                //   ...prev, 
                //   ...docSnap.data() 
                // }))
              } else {
                  alert("Document does not exist")
              }
          
          } catch(error) {
              console.log(error)
          } 
          }
        // ...........................................
        

  return (
      <div
      
      >
          
          <input type="text"  onChange={setCodeChange}/>
          <button onClick={getTrack}>Get data</button>
          
    </div>
  )
}

export default GetDatawithButton