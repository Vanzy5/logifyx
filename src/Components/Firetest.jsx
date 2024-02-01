import React, { useEffect, useState } from 'react'

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'


function Firetest() {
    const [users, setUsers] = useState([])
    // Model ....
    const usersCollectionRef = collection(db, "users")  
// Model ....
    const [user, setUser] = useState({
        name: "",
        age: 0
    })

    useEffect(() => {
        // Read all the elements ..................
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            console.log(data.docs)
            setUsers(
                data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))
            )
            console.log("aa")
        }
        getUsers()    
        // Read all the elements ..................

    }, [])



//    Create User 
    const CreateUser = async () => {
        // addDoc     .... for creating ......   ... 
        await addDoc(usersCollectionRef,user)
    }

    const enterUser = (e) => {
        const {value , name} = e.target
        setUser(prev => ({
            ...prev, 
            [name] : value
        }))
    }



// Update User
    const UpdateAge = async (id, age) => {
        // Get single element 
        const userdoc = doc(db, "users", id)
        console.log( userdoc)
        const newFields = { age: age + 1 }
        await updateDoc(userdoc , newFields)
        
    }



// Delete User
    const DeleteUser = async (id) => {
        const userdoc = doc(db, "users", id) 
        await deleteDoc(userdoc)
    } 





    return (
        <>
                Read all 
            <div>{users.map(u => <div>{u.name} : {u.age}
                <button onClick={() => UpdateAge(u.id, u.age)}>update age + 1</button>
                <button onClick={() => DeleteUser(u.id)}>Delete</button>
            </div>)}</div>
               
            {/* Add item */}

            <input type="text" name="name" id="" placeholder='Name' onChange={enterUser}/>
            <input type="number" name="age" id="" placeholder='Age' onChange={enterUser}/>
            <button onClick={CreateUser}>Create</button>    

            <div>{user.name}</div>
            <div>{user.age}</div>

        </>
            )
}

export default Firetest