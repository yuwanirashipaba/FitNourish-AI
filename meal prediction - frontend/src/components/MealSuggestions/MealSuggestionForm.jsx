function MealSuggestionForm({ 
  totalCalories, 
  setTotalCalories, 
  mealsPerDay, 
  setMealsPerDay,
  onMealsPerDayChange,
  loading,
  onSubmit 
}) {
  return (
    <div className="suggestion-form">
      <div className="form-group">
        <label htmlFor="total-calories">Total Calories per Day</label>
        <input
          id="total-calories"
          type="number"
          min="0"
          step="100"
          value={totalCalories}
          onChange={(e) => setTotalCalories(e.target.value)}
          placeholder="e.g., 2000"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="meals-per-day">Number of Meals per Day</label>
        <select
          id="meals-per-day"
          value={mealsPerDay}
          onChange={onMealsPerDayChange}
          className="form-select"
        >
          <option value={2}>2 Meals</option>
          <option value={3}>3 Meals</option>
          <option value={4}>4 Meals</option>
        </select>
      </div>

      <button 
        className="suggest-btn" 
        onClick={onSubmit}
        disabled={loading || !totalCalories}
      >
        {loading ? 'Loading...' : '✨ Get Meal Suggestions'}
      </button>
    </div>
  )
}

export default MealSuggestionForm

