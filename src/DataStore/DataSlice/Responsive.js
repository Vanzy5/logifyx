import {createSlice } from "@reduxjs/toolkit"



const initialState = {
    
    currentdataUpdate: {
        senderInfo: {
                                Name: "", 
                                Town:  "" ,
                                PhoneNumber: "", 
                                Email : ""
        },
        shipmentInformation: {
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

        
    },
    status: "",
    error : "" 
}




export const UpdateHelperSlice = createSlice({
    name: "update",
    initialState,
    reducers: {
        printInfo: () => {
            console.log("Hello Brol...")
        }
    }
})


export const dataInfo = (state) => state.datareducer.data

export const { printInfo } = UpdateHelperSlice.actions

export default UpdateHelperSlice.reducer


