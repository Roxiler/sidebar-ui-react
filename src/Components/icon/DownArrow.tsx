import React from 'react'
import {IconProps} from './Icon.types'

const DownArrow = ({color, size = 25}: IconProps) => {
  return (
    <svg
    width={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill='none'
      color='#235c71'
      // {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7 10 5 5 5-5"
      />
    </svg>
  )
}

export default DownArrow
