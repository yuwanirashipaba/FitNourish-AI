export const API_BASE_URL = 'http://localhost:8000'

export const getDefaultCalorieRatios = (meals) => {
  if (meals === 2) return [0.40, 0.60]
  if (meals === 3) return [0.25, 0.40, 0.35]
  if (meals === 4) return [0.20, 0.15, 0.35, 0.30]
  return Array(meals).fill(1.0 / meals)
}

export const DEFAULT_MACRO_RATIOS = { fat: 0.30, carb: 0.45, protein: 0.25 }

