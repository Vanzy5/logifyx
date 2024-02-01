import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, valueCount } from '../DataStore/counterSlice'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'
// import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(valueCount)
    const dispatch = useDispatch()
    
    useEffect(() => { 
        dispatch(increment())
    },[dispatch])

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}