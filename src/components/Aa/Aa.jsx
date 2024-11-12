import React from 'react'
import './Aa.scss'

const Aa = ({num}) => {
  return (
    <>
      <a href={'#hero1${num}'}>SECTION {num}</a>
    </>
  )
}

export default Aa
