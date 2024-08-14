import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import { ModeToggle } from '../ModeToggle'

const Cart = () => {
  return (
    <>
    <ModeToggle />
    <BsHandbag size={36} className='cursor-pointer col-start-4 justify-self-end' />
    </>
  )
}

export default Cart