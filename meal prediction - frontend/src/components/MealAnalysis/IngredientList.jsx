import IngredientItem from './IngredientItem'

function IngredientList({ ingredients }) {
  return (
    <div className="ingredients-section">
      <h4>🥗 Ingredients</h4>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, idx) => (
          <IngredientItem key={idx} ingredient={ingredient} />
        ))}
      </ul>
    </div>
  )
}

export default IngredientList

