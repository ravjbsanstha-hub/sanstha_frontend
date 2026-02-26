import { useState, useEffect, useRef } from 'react'
import { Users, GraduationCap, Building, Target } from 'lucide-react'
import './StatsCounter.css'

const StatsCounter = ({ stats }) => {
  const [counters, setCounters] = useState(
    stats.map(() => ({ count: 0, targetReached: false }))
  )
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = stats.map((stat, index) => {
      if (counters[index].targetReached) return null

      const increment = stat.value / steps
      let currentStep = 0

      return setInterval(() => {
        currentStep++
        
        setCounters(prev => {
          const newCounters = [...prev]
          if (currentStep < steps) {
            newCounters[index] = {
              ...newCounters[index],
              count: Math.floor(increment * currentStep)
            }
          } else {
            newCounters[index] = {
              count: stat.value,
              targetReached: true
            }
          }
          return newCounters
        })

        if (currentStep >= steps) {
          clearInterval(intervals[index])
        }
      }, stepDuration)
    })

    return () => {
      intervals.forEach(interval => {
        if (interval) clearInterval(interval)
      })
    }
  }, [isVisible, stats])

  const iconMap = {
    '👥': Users,
    '👨‍🏫': GraduationCap,
    '🏫': Building,
    '🎯': Target
  }

  return (
    <div className="stats-counter" ref={counterRef}>
      <div className="container">
        <h2 className="stats-title">Our Impact</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = iconMap[stat.icon]
            return (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  <IconComponent size={32} />
                </div>
                <div className="stat-number">
                  {counters[index].count}
                  {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StatsCounter
