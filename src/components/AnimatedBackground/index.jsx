import React from 'react'

const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute h-full w-full">
        <div className="animate-float-ball absolute rounded-full bg-gradient-to-br from-yellow-400 to-primary opacity-20 blur-2xl"></div>
      </div>
    </div>
  )
}

export default AnimatedBackground
