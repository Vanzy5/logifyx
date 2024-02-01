// import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./DataSlice/DataSlice";



// export default configureStore({
//     reducer: {
//         datareducer : DataReducer
//     },
// })


// import { configureStore } from '@reduxjs/toolkit'
// import DataReducer from "./DataSlice/DataSlice"

// export default configureStore({
//     reducer: {
//         datareducer : DataReducer
//   },
// })

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store =  configureStore({
  reducer: {
        counter: counterReducer,
        datareducer : DataReducer
  },
})