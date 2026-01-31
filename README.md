# NutriCheck — Advanced React Frontend

A comprehensive nutrition tracking web app with React + Vite + Recharts. Features multi-page navigation, health questionnaires, food scanning, and nutrient visualization.

## Features

✅ **Enhanced Login Page**
- Email/password validation (min 6 chars)
- "Forgot password" functionality
- Session persistence with localStorage

✅ **Health Profile Questionnaire**
- Collect user age, health conditions
- Disease tracking (Diabetes, Hypertension, etc.)
- Personalized nutrition recommendations

✅ **Nutrient Visualization**
- Interactive bar charts comparing foods
- Calories, Carbs, Protein, Fat, Fiber stats
- Built with Recharts

✅ **Food Scanning**
- Upload food images
- Auto-detect food type (mock)
- Display instant nutrition info

✅ **Food Gallery**
- Click-to-view nutrition details
- 4 sample foods with real data
- Responsive design

✅ **Improved UI/UX**
- Modern gradient design
- Tab navigation
- Sticky nutrition card
- Loading states and error handling

## Quick Start

1. Install dependencies:
```powershell
cd c:\NutriCheck\frontend
npm install
```

2. Start dev server:
```powershell
npm run dev
# open http://localhost:3000
```

3. Try it out:
   - Login with any username + 6+ char password
   - Complete health profile
   - Explore Food Gallery, Charts, and Scan Food tabs

## Build

```powershell
npm run build
npm run preview
```

## Project Structure

```
src/
├── App.jsx                          # Main app with multi-page routing
├── components/
│   ├── Login.jsx                    # Enhanced login + forgot password
│   ├── HealthQuestionnaire.jsx      # Health profile form
│   ├── NutrientChart.jsx            # Bar chart visualization
│   ├── FoodGallery.jsx              # Clickable food grid
│   ├── NutritionCard.jsx            # Nutrition details display
│   └── FoodImageUpload.jsx          # Image upload & detection
├── styles.css                       # Modern CSS with gradients
└── main.jsx                         # React entry point
```

## Dependencies

- **React** 18.2.0 - UI framework
- **Vite** 5.0+ - Build tool
- **Recharts** 2.10.3 - Charting library

## Notes

- Login validation enforces 6-character minimum passwords
- Health data is stored in localStorage (persists across sessions)
- Food image "detection" is simulated (randomly picks a sample food)
- To integrate real APIs:
  - **Auth**: Use Firebase, Auth0, or backend service
  - **Food Recognition**: Integrate Nutritionix or Edamam API
  - **Nutrient Data**: Replace mock data with live API calls

## Future Enhancements

- Real food image recognition (ML model or API)
- User history and favorites
- Meal planning
- Calorie tracking over time
- Social features (share meals, tips)

