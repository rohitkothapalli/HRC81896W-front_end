import React from 'react'
import './header.css'

export default function () {
  return (
    <div id='heading'>
        <div id='h-text-1'>
            <p>
                <img src={process.env.PUBLIC_URL+"logo_h.svg"} alt='not availabe'/>
            </p>
        </div>

        <div id='h-text-2'>
        <p>
        <img src={process.env.PUBLIC_URL+"logo.svg"} />
        </p>
        </div>

    </div>
  )
}
