import React from 'react'
import BaseStepper from './BaseStepper'

import { ReactComponent as Lock } from './svg/lock.svg';
import { ReactComponent as User } from './svg/user.svg';
import { ReactComponent as Dollar } from './svg/dollar.svg';
import { ReactComponent as Like } from './svg/like.svg';

const baseSteps = [
  {
    checked: true,
    note: 'Account',
    Svg: <Lock />
  },
  {
    checked: false,
    number:2,
    note: 'Personal',
    Svg: <User />
  },
  {
    checked: false,
    number:3,
    note: 'Billing',
    Svg: <Dollar />
  },
  {
    checked: false,
    number:4,
    note: 'Done',
    Svg: <Like />
  },
]

const CtSection = () => {
  return (
    <div className='ctsection'>
      {
        baseSteps.map((val, key)=>
          <BaseStepper {...val} key = {key} />
        )
      }
    </div>
  )
}

export default CtSection