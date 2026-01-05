function IngredientItem({ ingredient }) {
  const getPossibilityColor = (possibility) => {
    if (possibility >= 90) return '#2ea37a'
    if (possibility >= 75) return '#45b890'
    if (possibility >= 60) return '#7dd3af'
    return '#a0d9c2'
  }

  const color = getPossibilityColor(ingredient.possibility)

  return (
    <li className="ingredient-item">
      <div className="ingredient-info">
        <span className="ingredient-name">{ingredient.name}</span>
        {/* <span className="ingredient-amount">{ingredient.amount} {ingredient.unit}</span> */}
      </div>
      {/* <div className="ingredient-possibility">
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
      </div> */}
    </li>
  )
}

export default IngredientItem

