import IngredientList from './IngredientList'
import NutrientsGrid from './NutrientsGrid'

function AnalysisResults({ analysisResult }) {
  return (
    <div className="analysis-results">
      <h3>Analysis Results</h3>
      
      <div className="calories-display">
        <div className="calorie-badge">
          <span className="calorie-label">Calories per 100g</span>
          <span className="calorie-value">{analysisResult.calories_per_100g.toFixed(1)} kcal</span>
        </div>
      </div>

      <div className="results-section">
        <IngredientList ingredients={analysisResult.ingredients} />
        <NutrientsGrid nutrients={analysisResult.nutrients} />
      </div>
    </div>
  )
}

export default AnalysisResults

