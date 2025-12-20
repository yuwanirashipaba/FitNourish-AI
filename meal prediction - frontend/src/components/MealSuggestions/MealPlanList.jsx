import MealCard from './MealCard'

function MealPlanList({ suggestions }) {
  const totalCalories = suggestions.reduce((sum, meal) => sum + meal.calories, 0)

  return (
    <div className="suggestions-results">
      <h3>Your Meal Plan</h3>
      <div className="meals-list">
        {suggestions.map((meal, idx) => (
          <MealCard key={idx} meal={meal} />
        ))}
      </div>
      <div className="total-calories-summary">
        <strong>Total: {totalCalories.toFixed(0)} kcal</strong>
      </div>
    </div>
  )
}

export default MealPlanList

