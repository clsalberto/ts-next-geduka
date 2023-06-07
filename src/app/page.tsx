import { Button } from '@ui/Button'

export default function Home() {
  return (
    <main className="w-full h-screen bg-gray-100">
      <h1 className="font-bold text-4xl">Hello World</h1>
      <Button size="sm" intent="success">
        Complete
      </Button>
    </main>
  )
}
