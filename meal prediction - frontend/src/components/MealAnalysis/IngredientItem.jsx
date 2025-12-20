function IngredientItem({ ingredient }) {
  const getPossibilityColor = (possibility) => {
    if (possibility >= 90) return '#10b981'
    if (possibility >= 75) return '#3b82f6'
    if (possibility >= 60) return '#f59e0b'
    return '#ef4444'
  }

  const color = getPossibilityColor(ingredient.possibility)

  return (
    <li className="ingredient-item">
      <div className="ingredient-info">
        <span className="ingredient-name">{ingredient.name}</span>
        <span className="ingredient-amount">{ingredient.amount} {ingredient.unit}</span>
      </div>
      <div className="ingredient-possibility">
        <span className="possibility-label">Possibility:</span>
        <span 
          className="possibility-value"
          style={{ color }}
        >
          {ingredient.possibility.toFixed(1)}%
        </span>
        <div className="possibility-bar">
          <div 
            className="possibility-bar-fill"
            style={{ 
              width: `${ingredient.possibility}%`,
              backgroundColor: color
            }}
          ></div>
        </div>
      </div>
    </li>
  )
}

export default IngredientItem

