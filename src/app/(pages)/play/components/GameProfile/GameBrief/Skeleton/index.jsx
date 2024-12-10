import { Skeleton } from '@/components/ui/skeleton'

const GameBriefSkeleton = () => {
  return (
    <>
      {/* 1 */}
      <Container className="border-b border-neutral-700">
        <Item>
          <Skeleton className="h-6 w-12 xl:h-7" />
          <Skeleton className="h-6 w-16 bg-primary/50 xl:h-7" />
        </Item>
        <Item>
          <Skeleton className="h-6 w-24 xl:h-7" />
          <Skeleton className="h-6 w-32 bg-primary/50 xl:h-7" />
        </Item>
      </Container>
      {/* 2 */}
      <Container className="border-b border-neutral-700">
        <Item>
          <Skeleton className="h-6 w-28 xl:h-7" />
          <Skeleton className="h-6 w-24 bg-primary/50 xl:h-7" />
        </Item>
        <Item>
          <Skeleton className="h-6 w-24 xl:h-7" />
          <Skeleton className="h-6 w-36 bg-primary/50 xl:h-7" />
        </Item>
      </Container>
      {/* 3 */}
      <Container className="border-b border-neutral-700">
        <Item>
          <Skeleton className="h-6 w-12 xl:h-7" />
          <Skeleton className="h-6 w-24 bg-primary/50 xl:h-7" />
        </Item>
        <Item>
          <Skeleton className="h-6 w-40 xl:h-7" />
          <Skeleton className="h-6 w-16 bg-primary/50 xl:h-7" />
        </Item>
      </Container>
      {/* 4 */}
      <Container className="border-b border-neutral-700">
        <Item>
          <Skeleton className="h-6 w-44 xl:h-7" />
          <Skeleton className="h-6 w-16 bg-primary/50 xl:h-7" />
        </Item>
        <Item>
          <Skeleton className="h-6 w-48 xl:h-7" />
          <Skeleton className="h-6 w-16 bg-primary/50 xl:h-7" />
        </Item>
      </Container>
      {/* 5 */}
      <Container className="border-b border-neutral-700">
        <Item>
          <Skeleton className="h-6 w-20 xs:w-28 xl:h-7" />
          <Skeleton className="h-6 w-40 bg-primary/50 xs:w-48 xl:h-7" />
        </Item>
        <Item>
          <Skeleton className="h-6 w-28 xl:h-7" />
          <Skeleton className="h-6 w-16 bg-primary/50 xl:h-7" />
        </Item>
      </Container>
      {/* 6 */}
      <Container>
        <Item>
          <Skeleton className="h-6 w-24 xl:h-7" />
          <Skeleton className="h-6 w-12 bg-primary/50 xl:h-7" />
        </Item>
        <Item>
          <Skeleton className="h-6 w-16 xl:h-7" />
          <Skeleton className="h-6 w-12 bg-primary/50 xl:h-7" />
        </Item>
      </Container>
    </>
  )
}

const Container = ({ children, className }) => {
  return (
    <div className={`flex flex-col gap-2 pb-2 ${className}`}>{children}</div>
  )
}
const Item = ({ children, className }) => {
  return (
    <div className={`flex items-center justify-between gap-1 ${className}`}>
      {children}
    </div>
  )
}

export default GameBriefSkeleton
