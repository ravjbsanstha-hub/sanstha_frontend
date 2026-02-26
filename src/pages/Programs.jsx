import { useState } from 'react'
import React from 'react'
import FormInput from '../components/FormInput'
import { BookOpen, Wrench, Monitor, GraduationCap } from 'lucide-react'
import './Programs.css'

const Programs = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    education: '',
    program: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const iconMap = {
    '📖': BookOpen,
    '🔧': Wrench,
    '💻': Monitor,
    '🎓': GraduationCap
  }

  const programs = [
    {
      id: 'braille',
      title: 'Braille Education Program',
      icon: '📖',
      image: 'https://images.unsplash.com/photo-1577563908411-9973b4f3f1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Comprehensive braille literacy program designed to empower visually impaired individuals with reading and writing skills using braille system.',
      duration: '6 months',
      ageGroup: '6-25 years',
      highlights: [
        'Learn Grade 1 and Grade 2 Braille',
        'Reading comprehension skills',
        'Writing techniques and tools',
        'Braille mathematics basics',
        'Access to braille library'
      ],
      outcomes: [
        'Independent reading ability',
        'Enhanced educational opportunities',
        'Better academic performance',
        'Access to literature and knowledge'
      ]
    },
    {
      id: 'vocational',
      title: 'Vocational Training',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Skill-based training programs focused on creating employment opportunities and financial independence for visually impaired individuals.',
      duration: '12 months',
      ageGroup: '18-35 years',
      highlights: [
        'Handicrafts and art work',
        'Massage therapy training',
        'Telephone operator skills',
        'Small business management',
        'Entrepreneurship development'
      ],
      outcomes: [
        'Employment readiness',
        'Business startup skills',
        'Financial independence',
        'Career advancement opportunities'
      ]
    },
    {
      id: 'computer',
      title: 'Computer Literacy for Blind',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Modern computer training program using assistive technologies to bridge digital divide and open new opportunities.',
      duration: '3 months',
      ageGroup: '12-40 years',
      highlights: [
        'Screen reader software training',
        'Keyboard navigation skills',
        'Microsoft Office applications',
        'Internet and email usage',
        'Social media and digital communication'
      ],
      outcomes: [
        'Digital literacy',
        'Remote work opportunities',
        'Access to online education',
        'Enhanced communication skills'
      ]
    },
    {
      id: 'scholarship',
      title: 'Scholarship Program',
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      description: 'Financial assistance program to support higher education and professional development for deserving visually impaired students.',
      duration: 'Variable',
      ageGroup: '15-30 years',
      highlights: [
        'Merit-based scholarships',
        'Financial aid for courses',
        'Book and material assistance',
        'Exam fee support',
        'Mentorship program'
      ],
      outcomes: [
        'Higher education access',
        'Reduced financial burden',
        'Academic excellence',
        'Career development support'
      ]
    }
  ]

  const handleApply = (programId) => {
    setSelectedProgram(programId)
    setFormData({ ...formData, program: programId })
    setShowModal(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Phone must be 10 digits'
    if (!formData.age) newErrors.age = 'Age is required'
    if (!formData.education) newErrors.education = 'Education level is required'
    if (!formData.program) newErrors.program = 'Program selection is required'
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      // Show success message
      alert('Application submitted successfully! We will contact you soon.')
      setShowModal(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        education: '',
        program: '',
        message: ''
      })
      setErrors({})
    } else {
      setErrors(newErrors)
    }
  }

  const educationOptions = [
    { value: 'primary', label: 'Primary School' },
    { value: 'secondary', label: 'Secondary School' },
    { value: 'higher-secondary', label: 'Higher Secondary' },
    { value: 'graduate', label: 'Graduate' },
    { value: 'postgraduate', label: 'Post Graduate' },
    { value: 'other', label: 'Other' }
  ]

  return (
    <div className="programs">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="container">
          <h1>Our Programs</h1>
          <p className="hero-description">
            Empowering lives through specialized education and skill development programs
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="programs-grid">
        <div className="container">
          <div className="programs-list">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-image">
                  <img src={program.image} alt={program.title} />
                  <div className="program-icon">
                    {React.createElement(iconMap[program.icon], { size: 24 })}
                  </div>
                </div>
                
                <div className="program-content">
                  <h2>{program.title}</h2>
                  <p className="program-description">{program.description}</p>
                  
                  <div className="program-meta">
                    <div className="meta-item">
                      <span className="meta-label">Duration:</span>
                      <span className="meta-value">{program.duration}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Age Group:</span>
                      <span className="meta-value">{program.ageGroup}</span>
                    </div>
                  </div>
                  
                  <div className="program-sections">
                    <div className="program-section">
                      <h4>Program Highlights</h4>
                      <ul>
                        {program.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="program-section">
                      <h4>Expected Outcomes</h4>
                      <ul>
                        {program.outcomes.map((outcome, index) => (
                          <li key={index}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleApply(program.id)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Program Application</h3>
              <button 
                className="modal-close"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            
            <form className="application-form" onSubmit={handleSubmit}>
              <FormInput
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                required
              />
              
              <FormInput
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
              
              <FormInput
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
                placeholder="10-digit mobile number"
                required
              />
              
              <FormInput
                label="Age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                error={errors.age}
                min="6"
                max="50"
                required
              />
              
              <FormInput
                label="Education Level"
                type="select"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                error={errors.education}
                options={educationOptions}
                required
              />
              
              <FormInput
                label="Program"
                type="select"
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                error={errors.program}
                options={programs.map(p => ({ value: p.id, label: p.title }))}
                required
              />
              
              <FormInput
                label="Additional Message"
                type="textarea"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about yourself and why you want to join this program..."
              />
              
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Submit Application
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Programs
