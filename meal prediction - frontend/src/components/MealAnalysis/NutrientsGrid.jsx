import NutrientCard from './NutrientCard'

function NutrientsGrid({ nutrients }) {
  return (
    <div className="nutrients-section">
      <h4>📊 Nutrients</h4>
      <div className="nutrients-grid">
        {nutrients.map((nutrient, idx) => (
          <NutrientCard key={idx} nutrient={nutrient} />
        ))}
      </div>
    </div>
  )
}

export default NutrientsGrid

