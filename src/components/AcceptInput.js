import React from 'react'

function AcceptInput() {
  return (
    <div className='input-group'>
        <label>
            <input type="checkbox" className='checkbox'  name="insured" value="insured" checked='checked' /> 
            &nbsp;I accept the Terms and Privacy Policy
        </label>
    </div>
  )
}

export default AcceptInput