import AuthSkeleton from './components/AuthSkeleton'

export default function Loading() {
  return (
    <main className="flex min-h-screen w-full justify-center">
      <AuthSkeleton />
    </main>
  )
}
