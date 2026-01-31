// Comprehensive health analysis and disease-specific recommendations

export const diseaseGuidelines = {
  diabetes: {
    name: 'Type 2 Diabetes',
    icon: '🩺',
    color: '#ef4444',
    priority: 'HIGH',
    riskFactors: ['High Blood Sugar', 'Insulin Resistance', 'Metabolic Issues'],
    goals: [
      'Maintain stable blood glucose levels',
      'Reduce refined carbohydrate intake',
      'Increase fiber consumption',
      'Monitor portion sizes'
    ],
    restrictions: ['High GI foods', 'Sugary drinks', 'Refined grains', 'Processed foods'],
    recommendations: [
      { food: 'Leafy Greens', reason: 'Low carb, high nutrients', priority: 'CRITICAL' },
      { food: 'Whole Grains', reason: 'Slow glucose release', priority: 'HIGH' },
      { food: 'Legumes', reason: 'High fiber, protein', priority: 'HIGH' },
      { food: 'Berries', reason: 'Low glycemic index', priority: 'MEDIUM' },
      { food: 'Nuts & Seeds', reason: 'Healthy fats, low carbs', priority: 'HIGH' }
    ],
    dailyTargets: {
      carbs: '130-150g (40-45%)',
      protein: '90-120g (25-30%)',
      fiber: '25-30g minimum',
      sugar: '<25g per day'
    }
  },
  hypertension: {
    name: 'High Blood Pressure',
    icon: '⚡',
    color: '#f59e0b',
    priority: 'HIGH',
    riskFactors: ['Salt Sensitivity', 'Sodium Retention', 'Vessel Stiffness'],
    goals: [
      'Reduce sodium intake to <2300mg/day',
      'Increase potassium-rich foods',
      'Maintain healthy weight',
      'Limit alcohol'
    ],
    restrictions: ['High sodium foods', 'Processed meats', 'Fried foods', 'Canned soups'],
    recommendations: [
      { food: 'Potassium-rich Foods', reason: 'Natural diuretic effect', priority: 'CRITICAL' },
      { food: 'Low-sodium Vegetables', reason: 'Heart protective', priority: 'HIGH' },
      { food: 'Fish', reason: 'Omega-3, heart healthy', priority: 'HIGH' },
      { food: 'Whole Grains', reason: 'Fiber reduces BP', priority: 'MEDIUM' },
      { food: 'Low-fat Dairy', reason: 'Calcium support', priority: 'MEDIUM' }
    ],
    dailyTargets: {
      sodium: '<2300mg (goal <1500mg)',
      potassium: '3500-4700mg',
      calcium: '1000-1200mg',
      magnesium: '400-420mg'
    }
  },
  cholesterol: {
    name: 'High Cholesterol',
    icon: '❤️',
    color: '#10b981',
    priority: 'MEDIUM',
    riskFactors: ['High LDL', 'Low HDL', 'Heart Disease Risk'],
    goals: [
      'Reduce LDL cholesterol',
      'Increase HDL cholesterol',
      'Reduce trans fats',
      'Increase soluble fiber'
    ],
    restrictions: ['Saturated fats', 'Trans fats', 'Full-fat dairy', 'Fatty meats'],
    recommendations: [
      { food: 'Oat Products', reason: 'Beta-glucan reduces cholesterol', priority: 'CRITICAL' },
      { food: 'Fatty Fish', reason: 'Omega-3 increases HDL', priority: 'HIGH' },
      { food: 'Nuts & Seeds', reason: 'Plant sterols', priority: 'HIGH' },
      { food: 'Olive Oil', reason: 'Monounsaturated fats', priority: 'HIGH' },
      { food: 'Beans & Legumes', reason: 'Soluble fiber', priority: 'MEDIUM' }
    ],
    dailyTargets: {
      saturatedFat: '<7% calories',
      transFat: '<1% calories',
      fiber: '>25g daily',
      omega3: '1-2g daily'
    }
  },
  heart: {
    name: 'Heart Disease',
    icon: '💓',
    color: '#ef4444',
    priority: 'CRITICAL',
    riskFactors: ['Coronary Artery Disease', 'Heart Attack Risk', 'Arrhythmia'],
    goals: [
      'Reduce cardiovascular strain',
      'Lower blood pressure and cholesterol',
      'Maintain healthy weight',
      'Increase antioxidants'
    ],
    restrictions: ['High sodium', 'Saturated fats', 'Processed meats', 'Excess alcohol'],
    recommendations: [
      { food: 'Fatty Fish', reason: 'Cardiac protective omega-3', priority: 'CRITICAL' },
      { food: 'Berries', reason: 'Antioxidants protect heart', priority: 'HIGH' },
      { food: 'Green Tea', reason: 'EGCG compound benefits', priority: 'HIGH' },
      { food: 'Dark Chocolate', reason: 'Flavonoids improve blood flow', priority: 'MEDIUM' },
      { food: 'Garlic', reason: 'Natural blood thinner', priority: 'MEDIUM' }
    ],
    dailyTargets: {
      sodium: '<1500mg',
      potassium: '4700mg',
      magnesium: '420mg',
      omega3: '2-3g daily'
    }
  },
  none: {
    name: 'General Wellness',
    icon: '✨',
    color: '#3b82f6',
    priority: 'LOW',
    riskFactors: [],
    goals: [
      'Maintain balanced nutrition',
      'Eat a variety of foods',
      'Stay active',
      'Get adequate sleep'
    ],
    restrictions: [],
    recommendations: [
      { food: 'Rainbow Vegetables', reason: 'Diverse nutrients', priority: 'HIGH' },
      { food: 'Lean Proteins', reason: 'Muscle maintenance', priority: 'HIGH' },
      { food: 'Whole Grains', reason: 'Sustained energy', priority: 'MEDIUM' },
      { food: 'Healthy Fats', reason: 'Brain and heart health', priority: 'MEDIUM' },
      { food: 'Fruits', reason: 'Vitamins and antioxidants', priority: 'MEDIUM' }
    ],
    dailyTargets: {
      calories: 'Based on activity level',
      protein: '0.8g per kg body weight',
      fiber: '25-30g daily',
      water: '2-3 liters daily'
    }
  }
}

export function generateHealthReport(user){
  const diseases = user.diseases || []
  const primaryDiseases = diseases.filter(d => d !== 'none')
  const hasConditions = primaryDiseases.length > 0

  const report = {
    username: user.name,
    age: user.age,
    hasConditions,
    primaryDiseases,
    riskLevel: hasConditions ? 'MODERATE-HIGH' : 'LOW',
    recommendations: [],
    warnings: [],
    dailyNutrientTargets: {},
    foodToEmphasize: [],
    foodToAvoid: [],
    mealSuggestions: []
  }

  // Analyze each disease
  primaryDiseases.forEach(disease => {
    const guideline = diseaseGuidelines[disease]
    if (guideline) {
      report.warnings.push(`${guideline.icon} ${guideline.name} detected - Priority: ${guideline.priority}`)
      report.recommendations.push(...guideline.recommendations)
      report.foodToEmphasize.push(...guideline.restrictions.map(r => ({ food: r, avoidReason: true })))
      guideline.recommendations.forEach(rec => {
        report.foodToEmphasize.push(rec)
      })
    }
  })

  // Deduplicate recommendations
  report.recommendations = Array.from(
    new Map(report.recommendations.map(r => [r.food, r])).values()
  ).sort((a, b) => {
    const priority = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 }
    return (priority[a.priority] || 3) - (priority[b.priority] || 3)
  })

  return report
}

export function getDiseaseSummary(disease){
  return diseaseGuidelines[disease] || diseaseGuidelines.none
}
