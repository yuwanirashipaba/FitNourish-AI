# FitNourish AI

An intelligent, AI-powered nutrition assistant that delivers personalized meal planning, food analysis, and real-time health monitoring.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Project Dependencies](#project-dependencies)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Project Overview

FitNourish AI is an intelligent, AI-powered nutrition assistant designed to address poor dietary habits and the lack of personalized nutrition guidance in existing health applications. Many current diet and fitness apps rely on static recommendations and fail to adapt to users' real-time health data, leading to ineffective diet planning and long-term health issues.

To overcome these limitations, FitNourish AI integrates machine learning, computer vision, and real-time wellness monitoring to deliver personalized, dynamic, and data-driven dietary advice. The system analyzes user profiles, health goals, dietary preferences, and smartwatch biometrics to generate customized meal plans and proactive health alerts.

The platform also incorporates image processing to analyze food photos and suggest suitable meal options, as well as a smart grocery optimizer that creates cost-effective shopping lists aligned with the user's diet plan. By continuously monitoring lifestyle habits and health indicators, FitNourish AI adapts recommendations in real time, ensuring a holistic and user-centric nutrition solution.

### Project Summary

**Problem Addressed:** Poor dietary habits and lack of personalized, real-time nutrition advice in existing applications

**Research Gap:** Absence of intelligent, adaptive, and holistic nutrition systems that utilize real-time health data

**Proposed Solution:** An AI-driven nutrition assistant that dynamically personalizes diet plans and health recommendations

**Main Objective:** To help users manage health conditions and achieve fitness goals through personalized meal planning, health monitoring, and timely alerts

## 🏗️ Architecture

The system architecture of FitNourish AI is illustrated below:

![Architecture Diagram](images/architecture.jpeg)

## ✨ Key Features

- **Personalized meal planning** using machine learning
- **Smartwatch-based biometric** and wellness monitoring
- **Food image analysis** using computer vision
- **Budget-friendly grocery** recommendations
- **Real-time health alerts** and habit tracking
- **Ingredient detection** with ML confidence scores
- **Nutrient prediction** from meal images
- **Calorie tracking** and meal optimization

## 🚀 Installation

### Prerequisites

- **Python** 3.8 or higher
- **Node.js** v20.12.2 or higher
- **npm** 10.5.0 or higher


## 📦 Project Dependencies

<!-- Project dependencies content will be added here -->


## 💡 Usage

<!-- Add other member feature usages here-->

### Component 2 - AI-powered Dynamic Meal Generator and Visual Ingredient Identifier

<table>
<tr>
<td width="50%">
  <img src="images/meal-prediction/1.png" alt="Meal Analysis Interface" />
</td>
<td width="50%">
  <img src="images/meal-prediction/2.png" alt="Meal Suggestions Interface" />
</td>
</tr>
</table>

#### Meal Analysis

1. Click on the upload area in the left panel
2. Select a meal image from your device
3. Click "Analyze Meal" button
4. View the results:
   - **Ingredients:** List of detected ingredients with ML confidence scores
   - **Nutrients:** Nutritional breakdown with amounts and percentages
   - **Calories:** Calorie content per 100g

#### Meal Suggestions

1. Enter your daily calorie target (e.g., 2000 calories)
2. Select the number of meals per day (2, 3, or 4)
3. Optionally customize settings:
   - Click the settings icon (⚙️) to adjust:
     - Calorie distribution ratios across meals
     - Target macro ratios (carbohydrates, proteins, fats)
4. Click "Get Meal Suggestions"
5. Browse through the suggested meals with:
   - Meal images
   - Ingredient lists
   - Nutritional information
   - Calorie content

