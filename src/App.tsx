import './App.css'
import FindPlanCard from './FinPlanCard.tsx'
import OfferCard from './OfferCard.tsx'
import TopNav from './TopNav.tsx'

function App() {
  return (
    <>
      <TopNav />
      <h1 className="text-3xl font-bold underline mb-3">Money Affairs</h1>
      <FindPlanCard />
      <h1 className="text-3xl font-bold underline mb-3">Current Offers</h1>
      <OfferCard />
      <OfferCard />
      <h1 className="text-3xl font-bold underline mb-3">Physical Preparedness</h1>
      </>
  )
}

export default App
