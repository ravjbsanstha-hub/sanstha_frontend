import React from 'react'
import { Heart, BookOpen, Handshake, Target } from 'lucide-react'
import './About.css'

const About = () => {
  const iconMap = {
    '❤️': Heart,
    '📚': BookOpen,
    '🤝': Handshake,
    '💪': Target
  }

  const timeline = [
    {
      year: '2012',
      title: 'Foundation',
      description: 'RAVJB Sanstha was founded with a vision to empower visually impaired individuals through education.'
    },
    {
      year: '2014',
      title: 'First School',
      description: 'Prerna Andha Vidyalay was established in Pune, our first specialized school for blind children.'
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Jyoti Blind School was opened in Mumbai, extending our reach to more students.'
    },
    {
      year: '2020',
      title: 'Digital Initiative',
      description: 'Launched computer literacy programs and digital learning platforms for visually impaired students.'
    },
    {
      year: '2023',
      title: 'Vision Hope Academy',
      description: 'Established our third school in Nagpur focusing on higher education and vocational training.'
    },
    {
      year: '2026',
      title: 'Growing Impact',
      description: 'Over 1,200 students educated and 25+ dedicated teachers across three schools.'
    }
  ]

  const coreValues = [
    {
      title: 'Compassion',
      description: 'We approach our work with empathy and understanding, creating a nurturing environment for every individual.',
      icon: '❤️'
    },
    {
      title: 'Education',
      description: 'We believe in the transformative power of education and strive to provide the best learning opportunities.',
      icon: '📚'
    },
    {
      title: 'Dignity',
      description: 'We respect the inherent worth and potential of every individual, fostering independence and self-respect.',
      icon: '🤝'
    },
    {
      title: 'Empowerment',
      description: 'We equip our students with skills, confidence, and resources to lead independent, fulfilling lives.',
      icon: '💪'
    }
  ]

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About RAVJB Sanstha</h1>
          <p className="hero-description">
            A journey of empowerment, education, and excellence since 2012
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To provide comprehensive education, skill development, and rehabilitation services 
                that enable visually impaired individuals to achieve independence, dignity, and 
                their full potential in society.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">👁️</div>
              <h2>Our Vision</h2>
              <p>
                To create an inclusive society where visually impaired individuals have equal 
                opportunities to access quality education, employment, and lead fulfilling lives 
                with respect and independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="history">
        <div className="container">
          <h2>Our History</h2>
          <div className="history-content">
            <div className="history-text">
              <p>
                RAVJB Sanstha began its journey in 2012 with a small group of dedicated individuals 
                who recognized the urgent need for specialized educational facilities for visually 
                impaired children in Maharashtra. What started as a modest initiative has grown into 
                a comprehensive organization serving over 1,200 students across three cities.
              </p>
              <p>
                Our founder, Dr. Rajesh Kumar, a visionary educator with over 20 years of experience 
                in special education, envisioned a society where visual impairment would not be a 
                barrier to education and success. Through persistent efforts and community support, 
                this vision has transformed into a reality that continues to grow and impact lives.
              </p>
            </div>
            <div className="history-image">
              <img 
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Students celebrating graduation"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="founder-message">
        <div className="container">
          <div className="founder-content">
            <div className="founder-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Dr. Rajesh Kumar, Founder"
                loading="lazy"
              />
            </div>
            <div className="founder-text">
              <h2>Message from Our Founder</h2>
              <blockquote>
                "Every individual deserves the opportunity to learn, grow, and succeed regardless of 
                their physical abilities. At RAVJB Sanstha, we don't just teach subjects; we build 
                confidence, nurture dreams, and create pathways to independence. Our greatest joy 
                comes from seeing our students overcome challenges and achieve what many thought 
                was impossible."
              </blockquote>
              <p className="founder-name">
                <strong>Dr. Rajesh Kumar</strong><br />
                Founder & Director, RAVJB Sanstha
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {React.createElement(iconMap[value.icon], { size: 32 })}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline-container">
            {timeline.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{event.year}</div>
                <div className="timeline-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
