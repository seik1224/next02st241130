import React from 'react'

const Gsap05 = () => {
  return (
    <>
        <section className='h-screen'></section>
        <section className='flex w-full h-screen overflow-x-clip'>
            {[...Array(4)].map((v, index)=>(
                <div key={index} 
                className='flex justify-center items-center text-4xl 
                text-white min-w-full h-screen'
                style ={{
                    backgroundColor : `hs;(${index * 100}, 70%, 50%)`
                }}
                >
                    SECTION {index + 1}
                </div>
            ))}
        </section>
        <section className='h-screen'></section>
    </>
  )
}

export default Gsap05