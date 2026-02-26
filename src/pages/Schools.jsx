import { useState } from 'react'
import './Schools.css'

const Schools = () => {
  const [activeTab, setActiveTab] = useState('prerna')

  const schools = {
    prerna: {
      id: 'prerna',
      name: 'Prerna Andha Vidyalay',
      location: 'Pune, Maharashtra',
      type: 'Primary School',
      established: '2014',
      principal: 'Mrs. Anjali Deshmukh',
      students: 450,
      teachers: 12,
      staff: 8,
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      address: '123, Shivaji Road, Near Pune Railway Station, Pune - 411001',
      phone: '+91 20 2444 5555',
      email: 'prerna@ravjbsanstha.org',
      description: 'Prerna Andha Vidyalay is our flagship primary school, providing foundational education and care for visually impaired children aged 6-14. We focus on creating a nurturing environment where children can learn, play, and grow with confidence.',
      facilities: [
        'Braille Library with over 5,000 books',
        'Modern Computer Lab with assistive technology',
        'Residential Hostel with 24/7 care',
        'Sensory Garden and Playground',
        'Medical Room with regular health check-ups',
        'Music and Arts Room',
        'Physiotherapy Center',
        'Counseling Services'
      ],
      achievements: [
        '95% pass rate in state examinations',
        'Winner of National Excellence Award 2023',
        '30+ students placed in mainstream schools',
        'Recognized for innovative teaching methods'
      ],
      admission: {
        age: '6-14 years',
        process: 'Written test, personal interview, and medical assessment',
        documents: 'Birth certificate, medical certificate, residence proof',
        fees: 'Free education with nominal hostel charges'
      }
    },
    jyoti: {
      id: 'jyoti',
      name: 'Jyoti Blind School',
      location: 'Mumbai, Maharashtra',
      type: 'Secondary School',
      established: '2017',
      principal: 'Mr. Rajesh Sharma',
      students: 380,
      teachers: 8,
      staff: 6,
      image: 'https://images.unsplash.com/photo-1569074187119-c87815be434d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      address: '456, Bandra West, Near Mount Mary Church, Mumbai - 400050',
      phone: '+91 22 2644 7777',
      email: 'jyoti@ravjbsanstha.org',
      description: 'Jyoti Blind School offers comprehensive secondary education for visually impaired students aged 14-18. We combine academic excellence with life skills development, preparing students for higher education and independent living.',
      facilities: [
        'Advanced Science Laboratory',
        'Digital Library with audio books',
        'Music and Performing Arts Center',
        'Sports Complex with adaptive equipment',
        'Career Counseling Center',
        'Computer Training Center',
        'Hostel Facilities',
        'Health and Wellness Center'
      ],
      achievements: [
        '100% pass rate in SSC examinations',
        'State champions in blind cricket',
        '20+ students pursuing higher education',
        'Excellence in vocational training'
      ],
      admission: {
        age: '14-18 years',
        process: 'Entrance test, counseling session, and assessment',
        documents: 'Previous school records, medical certificate',
        fees: 'Minimal charges for hostel and materials'
      }
    },
    vision: {
      id: 'vision',
      name: 'Vision Hope Academy',
      location: 'Nagpur, Maharashtra',
      type: 'Higher Education & Vocational Training',
      established: '2023',
      principal: 'Dr. Priya Nair',
      students: 370,
      teachers: 5,
      staff: 10,
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      address: '789, Civil Lines, Near University Campus, Nagpur - 440001',
      phone: '+91 712 2555 8888',
      email: 'vision@ravjbsanstha.org',
      description: 'Vision Hope Academy is our premier institution for higher education and vocational training. We focus on empowering young adults with professional skills, higher education opportunities, and career guidance for successful employment.',
      facilities: [
        'Vocational Training Workshops',
        'Research and Development Center',
        'Placement Cell',
        'Entrepreneurship Development Center',
        'Advanced Computer Lab',
        'Language Learning Center',
        'Independent Living Training',
        'Recreation and Sports Facilities'
      ],
      achievements: [
        '85% placement rate in first year',
        '15+ successful entrepreneurs',
        'Partnerships with 50+ companies',
        'Recognition for skill development programs'
      ],
      admission: {
        age: '18-30 years',
        process: 'Skill assessment, interview, and career counseling',
        documents: 'Educational certificates, identity proof',
        fees: 'Based on program duration and type'
      }
    }
  }

  const currentSchool = schools[activeTab]

  return (
    <div className="schools">
      {/* Hero Section */}
      <section className="schools-hero">
        <div className="container">
          <h1>Our Schools</h1>
          <p className="hero-description">
            Three specialized institutions providing quality education and empowerment
          </p>
        </div>
      </section>

      {/* School Navigation Tabs */}
      <section className="school-tabs">
        <div className="container">
          <div className="tab-buttons">
            {Object.values(schools).map((school) => (
              <button
                key={school.id}
                className={`tab-btn ${activeTab === school.id ? 'active' : ''}`}
                onClick={() => setActiveTab(school.id)}
              >
                {school.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* School Details */}
      <section className="school-details">
        <div className="container">
          <div className="school-header">
            <div className="school-image">
              <img src={currentSchool.image} alt={currentSchool.name} />
              <div className="school-badge">{currentSchool.type}</div>
            </div>
            <div className="school-info">
              <h2>{currentSchool.name}</h2>
              <p className="school-location">
                <span className="location-icon">📍</span> {currentSchool.location}
              </p>
              <p className="school-description">{currentSchool.description}</p>
              
              <div className="school-stats">
                <div className="stat-item">
                  <span className="stat-number">{currentSchool.students}</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{currentSchool.teachers}</span>
                  <span className="stat-label">Teachers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{currentSchool.established}</span>
                  <span className="stat-label">Established</span>
                </div>
              </div>

              <div className="contact-info">
                <h3>Contact Information</h3>
                <p><strong>Principal:</strong> {currentSchool.principal}</p>
                <p><strong>Address:</strong> {currentSchool.address}</p>
                <p><strong>Phone:</strong> <a href={`tel:${currentSchool.phone}`}>{currentSchool.phone}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${currentSchool.email}`}>{currentSchool.email}</a></p>
              </div>
            </div>
          </div>

          <div className="school-content">
            {/* Facilities */}
            <div className="content-section">
              <h3>Facilities</h3>
              <div className="facilities-grid">
                {currentSchool.facilities.map((facility, index) => (
                  <div key={index} className="facility-item">
                    <span className="facility-icon">✓</span>
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="content-section">
              <h3>Achievements</h3>
              <div className="achievements-list">
                {currentSchool.achievements.map((achievement, index) => (
                  <div key={index} className="achievement-item">
                    <span className="achievement-icon">🏆</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Process */}
            <div className="content-section">
              <h3>Admission Process</h3>
              <div className="admission-info">
                <div className="admission-item">
                  <h4>Age Group</h4>
                  <p>{currentSchool.admission.age}</p>
                </div>
                <div className="admission-item">
                  <h4>Selection Process</h4>
                  <p>{currentSchool.admission.process}</p>
                </div>
                <div className="admission-item">
                  <h4>Required Documents</h4>
                  <p>{currentSchool.admission.documents}</p>
                </div>
                <div className="admission-item">
                  <h4>Fees</h4>
                  <p>{currentSchool.admission.fees}</p>
                </div>
              </div>
              <button className="btn btn-primary">
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Schools
