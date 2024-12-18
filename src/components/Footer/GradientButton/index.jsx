import Link from 'next/link'
import { cn } from 'app/utils/cn'
import { gradientAnimationClasses as classes } from 'app/utils/animations'

export function GradientButton({
  href,
  children,
  variant = 'gradient',
  className,
}) {
  const baseButtonStyles = cn(
    'min-w-[160px] h-[48px]',
    'relative rounded-md',
    'flex items-center justify-center',
    'text-sm font-bold',
    classes.gradient.transition,
    // classes.hover.scale,
    classes.hover.shadow
  )

  if (variant === 'gradient') {
    return (
      <GradientBorder>
        <div className={cn(baseButtonStyles, 'bg-black', className)}>
          <Link
            href={href}
            className={cn(
              classes.gradient.background,
              'bg-clip-text text-transparent',
              'whitespace-nowrap px-4',
              classes.gradient.animate
            )}
          >
            {children}
          </Link>
        </div>
      </GradientBorder>
    )
  }

  return (
    <button
      className={cn(
        baseButtonStyles,
        classes.gradient.background,
        classes.gradient.animate,
        'text-black shadow-md',
        'focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50',
        className
      )}
    >
      <Link href={href} className="relative z-10 whitespace-nowrap px-4">
        {children}
      </Link>
    </button>
  )
}

export function GradientBorder({ children, className }) {
  return (
    <div className="group relative">
      <div
        className={cn(
          'absolute -inset-0.5 rounded-lg',
          classes.gradient.background,
          classes.gradient.animate,
          'opacity-70 blur-sm group-hover:opacity-100',
          classes.gradient.transition,
          className
        )}
      />
      {children}
    </div>
  )
}

export default GradientButton
