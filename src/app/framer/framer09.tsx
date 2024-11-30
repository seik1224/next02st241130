import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Framer09 = () => {
  return (
    <>
      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">상단 섹션</h1>
      </section>

      <div ref={containerRef} className="h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div className="flex h-full items-center" style={{ x }}>
            {colors.map((color, index) => (
              <motion.div
                key={index}
                className={`h-[100vh] w-full flex-shrink-0`}
              >
                <div
                  className={`w-full h-full ${color} rounded-xl flex items-center justify-center text-white text-4xl font-bold`}
                >
                  SECTION {index + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold">하단 섹션</h1>
      </section>
    </>
  )
}

export default Framer09