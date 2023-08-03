import React from 'react'
import {IconProps} from './Icon.types'

const Hamburger = ({color, size = 32}: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}  viewBox="0 0 24 24" >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          stroke="#0C0310"
          strokeLinecap="round"
          strokeWidth={2}
          d="M5 6h14M5 14h14M5 10h8M5 18h8"
        />
      </g>
    </svg>
  )
}

export default Hamburger
