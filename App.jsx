import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import HealthQuestionnaire from './components/HealthQuestionnaire'
import NutrientChart from './components/NutrientChart'
import FoodGallery from './components/FoodGallery'
import NutritionCard from './components/NutritionCard'
import FoodImageUpload from './components/FoodImageUpload'
import AnimatedUserAvatar from './components/AnimatedUserAvatar'
import { HealthReport } from './components/HealthReport'

export default function App(){
  const [user, setUser] = useState(null)
  const [health, setHealth] = useState(null)
  const [page, setPage] = useState('gallery')
  const [selected, setSelected] = useState(null)

  useEffect(()=>{
    const saved = localStorage.getItem('nutricheck_user')
    const savedHealth = localStorage.getItem('nutricheck_health')
    if (saved) setUser(JSON.parse(saved))
    if (savedHealth) setHealth(JSON.parse(savedHealth))
  },[])

  function handleLogin(u){
    setUser(u)
    localStorage.setItem('nutricheck_user', JSON.stringify(u))
  }

  function handleHealthComplete(h){
    setHealth(h)
    localStorage.setItem('nutricheck_health', JSON.stringify(h))
  }

  function handleLogout(){
    setUser(null)
    setHealth(null)
    localStorage.removeItem('nutricheck_user')
    localStorage.removeItem('nutricheck_health')
  }

  if (!user) return <Login onLogin={handleLogin} />
  if (!health) return <HealthQuestionnaire onComplete={handleHealthComplete} />

  return (
    <div className="app-root">
      <header className="topbar-modern">
        <div className="topbar-left">
          <h1 className="app-logo">🥗 NutriCheck</h1>
        </div>

        <nav className="nav-tabs-modern">
          <button className={`nav-btn-modern ${page === 'gallery' ? 'active' : ''}`} onClick={() => {setPage('gallery'); setSelected(null)}}>
            <span className="nav-icon">🥗</span>
            <span>Food Gallery</span>
          </button>
          <button className={`nav-btn-modern ${page === 'chart' ? 'active' : ''}`} onClick={() => setPage('chart')}>
            <span className="nav-icon">📊</span>
            <span>Nutrients</span>
          </button>
          <button className={`nav-btn-modern ${page === 'upload' ? 'active' : ''}`} onClick={() => setPage('upload')}>
            <span className="nav-icon">📸</span>
            <span>Scan Food</span>
          </button>
          <button className={`nav-btn-modern ${page === 'report' ? 'active' : ''}`} onClick={() => setPage('report')}>
            <span className="nav-icon">📋</span>
            <span>Health Report</span>
          </button>
        </nav>

        <div className="topbar-right">
          <AnimatedUserAvatar username={user.username} health={health} />
          <button className="btn-logout" onClick={handleLogout}>⏻</button>
        </div>
      </header>

      <main className="main-content-modern">
        {page === 'gallery' && (
          <div className="main-grid">
            <section className="left">
              <FoodGallery onSelect={setSelected} health={health} />
            </section>
            <aside className="right">
              <NutritionCard foodKey={selected} health={health} />
            </aside>
          </div>
        )}

        {page === 'chart' && (
          <div className="page-center">
            <NutrientChart />
          </div>
        )}

        {page === 'upload' && (
          <div className="page-center">
            <FoodImageUpload onImageUpload={setSelected} />
            {selected && <NutritionCard foodKey={selected} health={health} />}
          </div>
        )}

        {page === 'report' && (
          <HealthReport health={health} />
        )}
      </main>

      <footer className="footer-modern">
        <div className="footer-content">
          <p>👤 <strong>{health.name}</strong> • 🎂 Age <strong>{health.age}</strong> • 🏥 <strong>{health.diseases.join(', ')}</strong></p>
          <p className="footer-tip">💡 Tip: Personalized recommendations based on your health profile</p>
        </div>
      </footer>
    </div>
  )
}
