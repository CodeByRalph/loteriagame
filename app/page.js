import Image from 'next/image'
import GameCard from '../components/GameCard'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <GameCard />
    </main>
  )
}
