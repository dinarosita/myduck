import React from 'react'

export default function SnapFlex(props) {
  return (
    <div className='flex flex-col gap-2 sm:flex-row'>
      {props.children}
    </div>
  )
}
