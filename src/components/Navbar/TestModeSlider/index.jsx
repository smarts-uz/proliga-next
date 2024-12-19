import React from 'react'

const TestModeSlider = ({ text, speed = 'normal', className }) => {
  const speedClass = {
    slow: 'animate-marquee-slow',
    normal: 'animate-marquee-normal',
    fast: 'animate-marquee-fast',
  }[speed]

  return (
    <div
      className={`overflow-hidden border-y border-primary/50 text-xs text-neutral-200 ${className}`}
      role="marquee"
      aria-live="off"
    >
      <div className={`whitespace-nowrap ${speedClass}`}>
        <span className="inline-block px-4 font-bold uppercase tracking-wider">
          {text}
        </span>
      </div>
    </div>
  )
}

export default TestModeSlider
