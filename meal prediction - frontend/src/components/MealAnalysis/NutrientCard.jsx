function NutrientCard({ nutrient }) {
  return (
    <div className="nutrient-card">
      <div className="nutrient-header">
        <span className="nutrient-name">{nutrient.name}</span>
        <span className="nutrient-percentage">{nutrient.percentage.toFixed(1)}%</span>
      </div>
      <div className="nutrient-amount">
        {nutrient.amount.toFixed(1)} {nutrient.unit}
      </div>
      <div className="nutrient-bar">
        <div 
          className="nutrient-bar-fill" 
          style={{ width: `${Math.min(nutrient.percentage, 100)}%` }}
        ></div>
      </div>
    </div>
  )
}

export default NutrientCard

