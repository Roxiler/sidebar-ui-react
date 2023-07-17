import React from 'react'
import {IconProps} from './Icon.types'

const Analytics = ({color, size = 25}: IconProps) => {
  return (
    <svg style={{marginTop: '10px'}} width={size} height={size} fill='#235c71' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M746.667 106.667H1173.33V1493.33H746.667V106.667ZM533.333 533.333H106.667V1493.33H533.333V533.333ZM1920 1706.67H0V1824H1920V1706.67ZM1813.33 746.667H1386.67V1493.33H1813.33V746.667Z"></path> </g></svg>
  )
}

export default Analytics

