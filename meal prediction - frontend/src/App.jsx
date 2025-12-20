import './App.css'
import Header from './components/common/Header'
import MealAnalysisPanel from './components/MealAnalysis/MealAnalysisPanel'
import MealSuggestionsPanel from './components/MealSuggestions/MealSuggestionsPanel'

function App() {
  return (
    <div className="app">
      <Header />

      <div className="main-container">
        <MealAnalysisPanel />
        <MealSuggestionsPanel />
      </div>
    </div>
  )
}

export default App
