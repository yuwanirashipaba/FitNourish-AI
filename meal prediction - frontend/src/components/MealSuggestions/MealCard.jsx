function MealCard({ meal }) {
  return (
    <div className="meal-card">
      <div className="meal-header">
        <span className="meal-name">{meal.meal_name}</span>
        <span className="meal-time">{meal.time}</span>
      </div>
      
      {meal.image && (
        <div className="meal-image-container">
          <img src={meal.image} alt={meal.description} className="meal-image" />
        </div>
      )}
      
      <p className="meal-description">{meal.description}</p>
      
      {meal.ingredients && meal.ingredients.length > 0 && (
        <div className="meal-ingredients">
          <strong>Ingredients:</strong>
          <ul className="ingredients-list-small">
            {meal.ingredients.map((ingredient, i) => {
              const ingredientName = typeof ingredient === 'string' 
                ? ingredient 
                : ingredient.name || ingredient
              return <li key={i}>{ingredientName}</li>
            })}
          </ul>
        </div>
      )}
      
      {meal.nutrients && meal.nutrients.length > 0 && (
        <div className="meal-nutrients">
          <strong>Nutrients:</strong>
          <div className="nutrients-list-small">
            {meal.nutrients.map((nutrient, i) => (
              <div key={i} className="nutrient-item-small">
                <span className="nutrient-name-small">{nutrient.name}:</span>
                <span className="nutrient-amount-small">
                  {nutrient.amount.toFixed(1)} {nutrient.unit}
                </span>
                <span className="nutrient-percentage-small">
                  ({nutrient.percentage.toFixed(1)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="meal-calories">
        <span className="calories-badge">
          {meal.calories.toFixed(0)} kcal
          {meal.mass && ` (${meal.mass.toFixed(0)}g)`}
        </span>
      </div>
    </div>
  )
}

export default MealCard

