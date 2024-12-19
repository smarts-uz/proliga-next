export const gradientAnimationClasses = {
  gradient: {
    background: 'bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500',
    animate: 'animate-gradient',
    glow: 'animate-glow hover:animate-gradient',
    transition: 'transition-all duration-300 ease-in-out',
  },
  hover: {
    scale: 'hover:scale-[105deg]',
    glow: 'hover:animate-pulse',
    animate: 'animate-gradient-x',
    shadow: 'hover:shadow-xl hover:shadow-pink-500/20',
  },
}
