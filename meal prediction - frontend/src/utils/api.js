import { API_BASE_URL } from './constants'

export const analyzeMeal = async (imageFile) => {
  const formData = new FormData()
  formData.append('image', imageFile)

  const response = await fetch(`${API_BASE_URL}/api/analyze-meal`, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error('Analysis failed')
  }

  return response.json()
}

export const getMealSuggestions = async (totalCalories, mealsPerDay, calorieRatios, macroRatios) => {
  const response = await fetch(`${API_BASE_URL}/api/suggest-meals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      total_calories: parseFloat(totalCalories),
      meals_per_day: mealsPerDay,
      calorie_distribution_ratios: calorieRatios,
      target_macro_ratios: macroRatios,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to get suggestions')
  }

  return response.json()
}

