import React from 'react'
import { ReactComponent as Logo } from './svg/logo.svg';
import CtSection from './CtSection'
import CtButton from './CtButton'
import MainForm from './MainForm'

export default function StepperModal() {
  return (
    <div className="App">
        <Logo className="App-logo"/>
        <div className='content'>
            <CtSection />
            <MainForm />
            <CtButton />
        </div>
    </div>
  )
}
