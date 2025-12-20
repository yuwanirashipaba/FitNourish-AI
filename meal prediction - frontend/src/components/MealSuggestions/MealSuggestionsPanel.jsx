import { useState } from 'react'
import MealSuggestionForm from './MealSuggestionForm'
import MealPlanList from './MealPlanList'
import SettingsModal from '../Settings/SettingsModal'
import { getMealSuggestions } from '../../utils/api'
import { getDefaultCalorieRatios, DEFAULT_MACRO_RATIOS } from '../../utils/constants'

function MealSuggestionsPanel() {
  const [totalCalories, setTotalCalories] = useState('')
  const [mealsPerDay, setMealsPerDay] = useState(3)
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [calorieRatios, setCalorieRatios] = useState(getDefaultCalorieRatios(3))
  const [macroRatios, setMacroRatios] = useState(DEFAULT_MACRO_RATIOS)

  const handleMealsPerDayChange = (e) => {
    const newMealsPerDay = parseInt(e.target.value)
    setMealsPerDay(newMealsPerDay)
    setCalorieRatios(getDefaultCalorieRatios(newMealsPerDay))
  }

  const handleGetSuggestions = async () => {
    if (!totalCalories || totalCalories <= 0) {
      alert('Please enter a valid total calorie amount')
      return
    }

    setLoading(true)
    try {
      const data = await getMealSuggestions(totalCalories, mealsPerDay, calorieRatios, macroRatios)
      setSuggestions(data)
    } catch (error) {
      console.error('Error getting suggestions:', error)
      alert('Failed to get meal suggestions. Please make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="panel right-panel">
        <div className="panel-header-with-settings">
          <div>
            <h2>🍎 Meal Suggestions</h2>
            <p className="panel-description">Get personalized meal suggestions based on your daily calorie goals</p>
          </div>
          <button className="settings-btn" onClick={() => setShowSettings(true)} title="Settings">
            ⚙️
          </button>
        </div>
        
        <MealSuggestionForm
          totalCalories={totalCalories}
          setTotalCalories={setTotalCalories}
          mealsPerDay={mealsPerDay}
          setMealsPerDay={setMealsPerDay}
          onMealsPerDayChange={handleMealsPerDayChange}
          loading={loading}
          onSubmit={handleGetSuggestions}
        />

        {suggestions.length > 0 && (
          <MealPlanList suggestions={suggestions} />
        )}
      </div>

      <SettingsModal
        show={showSettings}
        onClose={() => setShowSettings(false)}
        calorieRatios={calorieRatios}
        setCalorieRatios={setCalorieRatios}
        macroRatios={macroRatios}
        setMacroRatios={setMacroRatios}
        mealsPerDay={mealsPerDay}
      />
    </>
  )
}

export default MealSuggestionsPanel

