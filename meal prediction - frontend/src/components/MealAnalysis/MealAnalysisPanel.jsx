import { useState } from 'react'
import ImageUpload from './ImageUpload'
import AnalysisResults from './AnalysisResults'
import { analyzeMeal } from '../../utils/api'

function MealAnalysisPanel() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
      setAnalysisResult(null)
    }
  }

  const handleRemoveImage = () => {
    setSelectedImage(null)
    setImagePreview(null)
    setAnalysisResult(null)
  }

  const handleAnalyze = async () => {
    if (!selectedImage) return

    setAnalyzing(true)
    try {
      const data = await analyzeMeal(selectedImage)
      setAnalysisResult(data)
    } catch (error) {
      console.error('Error analyzing meal:', error)
      alert('Failed to analyze meal. Please make sure the backend is running.')
    } finally {
      setAnalyzing(false)
    }
  }

  return (
    <div className="panel left-panel">
      <h2>📸 Meal Analysis</h2>
      <p className="panel-description">Upload a meal photo to analyze ingredients, nutrients, and calories</p>
      
      <ImageUpload 
        imagePreview={imagePreview}
        onImageUpload={handleImageUpload}
        onRemoveImage={handleRemoveImage}
      />

      {selectedImage && (
        <button 
          className="analyze-btn" 
          onClick={handleAnalyze}
          disabled={analyzing}
        >
          {analyzing ? 'Analyzing...' : '🔍 Analyze Meal'}
        </button>
      )}

      {analysisResult && (
        <AnalysisResults analysisResult={analysisResult} />
      )}
    </div>
  )
}

export default MealAnalysisPanel

