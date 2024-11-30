import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Framer07 = () => {
  return (
    <>
        <section className='h-screen'></section>
        <section className='h-screen bg-gray-100 flex justify-center items-center'>
            <motion.div
                style={{}}
                className='bg-blue-500 size-40 rounded-lg'
            >
                섹션1
            </motion.div>
        </section>
        <section className='h-screen bg-gray-300 flex justify-center items-center'>
            <motion.div
                style={{}}
                className='bg-green-500 size-40 rounded-lg'
            >
                섹션2
            </motion.div>
        </section>
        <section className='h-screen'></section>
    </>
  )
}

export default Framer07