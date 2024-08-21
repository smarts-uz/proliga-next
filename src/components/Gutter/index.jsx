export default function Gutter({ children, className }) {
  return (
    <div
      className={
        'mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-12 ' +
        className
      }
    >
      {children}
    </div>
  )
}
