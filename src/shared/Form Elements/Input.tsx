import React from 'react'
import { inputTypes } from '../../types'
import './input.css'

const Input:React.FC<inputTypes> = ({className, placeHolder}) => {
  return (
    <input className={className} placeholder={placeHolder} />
  )
}

export default Input