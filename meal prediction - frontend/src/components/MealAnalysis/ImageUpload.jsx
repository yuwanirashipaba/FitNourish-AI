function ImageUpload({ imagePreview, onImageUpload, onRemoveImage }) {
  return (
    <div className="upload-section">
      <div className="image-upload-area">
        {imagePreview ? (
          <div className="image-preview-container">
            <img src={imagePreview} alt="Preview" className="image-preview" />
            <button 
              className="change-image-btn" 
              onClick={onRemoveImage}
            >
              Change Image
            </button>
          </div>
        ) : (
          <label className="upload-label">
            <input
              type="file"
              accept="image/*"
              onChange={onImageUpload}
              className="file-input"
            />
            <div className="upload-placeholder">
              <span className="upload-icon">📷</span>
              <p>Click to upload meal photo</p>
              <p className="upload-hint">or drag and drop</p>
            </div>
          </label>
        )}
      </div>
    </div>
  )
}

export default ImageUpload

