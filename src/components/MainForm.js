import React from 'react'
import AcceptInput from './AcceptInput'
import InputGroup from './InputGroup'

const bigInputs = [
  {
    title: 'Name',
    placeholder: 'Bryan Koelpin',
    smallLabel:''
  },
  {
    title: 'Email*',
    placeholder: 'Email Address',
    smallLabel:'Please input a real Email Address'
  },
]
const smallInputs = [
  {
    title: "Password*",
    placeholder: 'Password',
    smallLabel:'Please enter your password',
    width:'half'
  },
  {
    title: "Confirm Password*",
    placeholder: 'Confirm Password',
    smallLabel:'Password need to match',
    width:'half'
  },
]
function MainForm() {
  return (
    <div className='mainForm'>
      {
        bigInputs.map((val, key)=>
          <InputGroup {...val} key = {key} />
        )
      }
      <div className='flex-half flex-between'>
        {
          smallInputs.map((val, key)=>
            <InputGroup {...val} key = {key} />
          )
        }
      </div>
      <AcceptInput />
    </div>
  )
}

export default MainForm