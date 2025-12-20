import { getDefaultCalorieRatios, DEFAULT_MACRO_RATIOS } from '../../utils/constants'

function SettingsModal({ 
  show, 
  onClose, 
  calorieRatios, 
  setCalorieRatios, 
  macroRatios, 
  setMacroRatios,
  mealsPerDay 
}) {
  if (!show) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>⚙️ Meal Plan Settings</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="settings-section">
            <h4>Calorie Distribution Ratios</h4>
            <p className="settings-hint">Set how calories are distributed across meals (must sum to 100%)</p>
            <div className="ratio-inputs">
              {calorieRatios.map((ratio, index) => (
                <div key={index} className="ratio-input-group">
                  <label>Meal {index + 1}:</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={ratio}
                    onChange={(e) => {
                      const newRatios = [...calorieRatios]
                      newRatios[index] = parseFloat(e.target.value) || 0
                      setCalorieRatios(newRatios)
                    }}
                    className="ratio-input"
                  />
                  <span className="ratio-percentage">({(ratio * 100).toFixed(0)}%)</span>
                </div>
              ))}
            </div>
            <div className="ratio-sum">
              Total: {(calorieRatios.reduce((sum, r) => sum + r, 0) * 100).toFixed(1)}%
              {Math.abs(calorieRatios.reduce((sum, r) => sum + r, 0) - 1.0) > 0.01 && (
                <span className="ratio-warning"> (Should be 100%)</span>
              )}
            </div>
            <button 
              className="reset-btn"
              onClick={() => setCalorieRatios(getDefaultCalorieRatios(mealsPerDay))}
            >
              Reset to Defaults
            </button>
          </div>
          
          <div className="settings-section">
            <h4>Macronutrient Target Ratios</h4>
            <p className="settings-hint">Set target percentages for macronutrients (must sum to 100%)</p>
            <div className="macro-inputs">
              <div className="macro-input-group">
                <label>Fat:</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={macroRatios.fat}
                  onChange={(e) => setMacroRatios({...macroRatios, fat: parseFloat(e.target.value) || 0})}
                  className="macro-input"
                />
                <span className="macro-percentage">({(macroRatios.fat * 100).toFixed(0)}%)</span>
              </div>
              <div className="macro-input-group">
                <label>Carbohydrates:</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={macroRatios.carb}
                  onChange={(e) => setMacroRatios({...macroRatios, carb: parseFloat(e.target.value) || 0})}
                  className="macro-input"
                />
                <span className="macro-percentage">({(macroRatios.carb * 100).toFixed(0)}%)</span>
              </div>
              <div className="macro-input-group">
                <label>Protein:</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="1"
                  value={macroRatios.protein}
                  onChange={(e) => setMacroRatios({...macroRatios, protein: parseFloat(e.target.value) || 0})}
                  className="macro-input"
                />
                <span className="macro-percentage">({(macroRatios.protein * 100).toFixed(0)}%)</span>
              </div>
            </div>
            <div className="ratio-sum">
              Total: {((macroRatios.fat + macroRatios.carb + macroRatios.protein) * 100).toFixed(1)}%
              {Math.abs((macroRatios.fat + macroRatios.carb + macroRatios.protein) - 1.0) > 0.01 && (
                <span className="ratio-warning"> (Should be 100%)</span>
              )}
            </div>
            <button 
              className="reset-btn"
              onClick={() => setMacroRatios(DEFAULT_MACRO_RATIOS)}
            >
              Reset to Defaults
            </button>
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="save-btn" onClick={onClose}>Save & Close</button>
        </div>
      </div>
    </div>
  )
}

export default SettingsModal

