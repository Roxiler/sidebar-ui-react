import React from 'react'
import { IconProps } from './Icon.types'

const Icon = ({color,size=30}:IconProps) => (
  <svg
  style={{marginTop: '10px'}} width={size} height={size} fill='#235c71'
  xmlns="http://www.w3.org/2000/svg" viewBox="-4.5 0 32 32" >
    <title>{"home"}</title>
    <path d="m19.469 12.594 3.625 3.313c.438.406.313.719-.281.719h-2.719v8.656c0 .594-.5 1.125-1.094 1.125h-4.719v-6.063c0-.594-.531-1.125-1.125-1.125h-2.969c-.594 0-1.125.531-1.125 1.125v6.063H4.343c-.594 0-1.125-.531-1.125-1.125v-8.656H.53c-.594 0-.719-.313-.281-.719l10.594-9.625c.438-.406 1.188-.406 1.656 0l2.406 2.156V6.719c0-.594.531-1.125 1.125-1.125h2.344c.594 0 1.094.531 1.094 1.125v5.875z" />
  </svg>
)

export default Icon

