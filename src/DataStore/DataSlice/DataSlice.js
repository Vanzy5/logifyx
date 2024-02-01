import {createSlice } from "@reduxjs/toolkit"



const initialState = {
    data: "Meetime",
    status: "",
    error : "" 
}




export const DataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        printInfo: () => {
            console.log("Hello Brol...")
        }
    }
})


export const dataInfo = (state) => state.datareducer.data

export const { printInfo } = DataSlice.actions

export default DataSlice.reducer


