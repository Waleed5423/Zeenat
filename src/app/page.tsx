import HeroSection from './components/HeroSection'
import ProblemCards from './components/ProblemCards'
import SolutionCards from './components/SolutionCards'

export default function Home() {
  return (
    <div className="space-y-16 ">
      <HeroSection />
      <ProblemCards />
      <SolutionCards />
    </div>
  )
}