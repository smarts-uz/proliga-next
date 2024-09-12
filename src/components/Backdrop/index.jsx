const Backdrop = ({ children, onClick, bgOpacity }) => {
  return (
    <div
      className={`fade-in-fast fixed bottom-0 left-0 right-0 top-0 z-30 flex 
      h-full w-full items-center justify-center overflow-y-hidden bg-black 
      backdrop-blur-sm before:w-full ${bgOpacity ? bgOpacity : 'bg-opacity-25'}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Backdrop
