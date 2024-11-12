import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
     <section className={`hero hero${num}`} id={`hero${num}`} >
        <div className="container">
            <h1 className="hero__title">
                SECTION {num}
            </h1>
        </div>
     </section>
    </>
  )
}

export default Hero
