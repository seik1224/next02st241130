import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const framer10 = () => {
  return (
    <>
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">상단 섹션</h1>
      </section>
      <section className="h-[100vh] flex items-center justify-center">
        <div className="flex space-x-4">
          <motion.div
           
            className="bg-blue-500 w-20 h-20"
          />
          <motion.div
            className="bg-blue-500 w-20 h-20"
          />
          <motion.div
            className="bg-blue-500 w-20 h-20"
          />
        </div>
      </section>
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">하단 섹션</h1>
      </section>
    </>
  )
}

export default framer10