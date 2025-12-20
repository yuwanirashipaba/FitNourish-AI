# Meal Prediction Backend

FastAPI backend for meal prediction application.

## Setup

### Using Virtual Environment (Recommended)

1. Create and activate virtual environment:

**On macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

**On Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
python main.py
```

Or with uvicorn directly:
```bash
uvicorn main:app --reload
```

### Without Virtual Environment

1. Install dependencies globally:
```bash
pip install -r requirements.txt
```

2. Run the server:
```bash
python main.py
```

Or with uvicorn directly:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

### Deactivate Virtual Environment

When you're done working, deactivate the virtual environment:
```bash
deactivate
```

## API Endpoints

- `POST /api/analyze-meal` - Analyze uploaded meal image
- `POST /api/suggest-meals` - Get meal suggestions based on daily calories
- `GET /api/health` - Health check endpoint

## API Documentation

Once the server is running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

