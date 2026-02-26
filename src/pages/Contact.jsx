import { useState } from 'react'
import FormInput from '../components/FormInput'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)
      
      // Simulate API call
      setTimeout(() => {
        alert(`Thank you for contacting us, ${formData.name}! We have received your message and will get back to you within 24 hours. A confirmation email has been sent to ${formData.email}.`)
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        setErrors({})
        setIsSubmitting(false)
      }, 1500)
    } else {
      setErrors(newErrors)
    }
  }

  const contactInfo = {
    address: 'RAVJB Sanstha, Near Shivaji Nagar, Pune, Maharashtra 411016',
    email: 'info@ravjbsanstha.org',
    phone: '+91 98765 43210',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed'
  }

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'admission', label: 'Admission Query' },
    { value: 'donation', label: 'Donation Information' },
    { value: 'volunteer', label: 'Volunteer Opportunities' },
    { value: 'partnership', label: 'Partnership Proposal' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' }
  ]

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="hero-description">
            Get in touch with us to learn more about our programs, volunteer opportunities, or to support our cause
          </p>
        </div>
      </section>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-card">
                <h2>Send us a Message</h2>
                <p className="form-intro">
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="contact-form">
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
                    label="Subject"
                    type="select"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    error={errors.subject}
                    options={subjectOptions}
                    required
                  />
                  
                  <FormInput
                    label="Message"
                    type="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    error={errors.message}
                    placeholder="Tell us how we can help you..."
                    rows="5"
                    required
                  />
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="info-card">
                <h2>Get in Touch</h2>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="contact-text">
                      <h3>Address</h3>
                      <p>{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Mail size={20} />
                    </div>
                    <div className="contact-text">
                      <h3>Email</h3>
                      <p>
                        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Phone size={20} />
                    </div>
                    <div className="contact-text">
                      <h3>Phone</h3>
                      <p>
                        <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>{contactInfo.phone}</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <Clock size={20} />
                    </div>
                    <div className="contact-text">
                      <h3>Working Hours</h3>
                      <p style={{ whiteSpace: 'pre-line' }}>{contactInfo.workingHours}</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="map-section">
                  <h3>Find Us</h3>
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2631277245!2d73.856123!3d18.516726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzAwLjIiTiA3M8KwNTEnMjIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="RAVJB Sanstha Location"
                    ></iframe>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="quick-links">
                  <h3>Quick Links</h3>
                  <div className="links-grid">
                    <a href="/about" className="quick-link">About Us</a>
                    <a href="/schools" className="quick-link">Our Schools</a>
                    <a href="/programs" className="quick-link">Programs</a>
                    <a href="/donate" className="quick-link">Donate</a>
                    <a href="/gallery" className="quick-link">Gallery</a>
                    <a href="/volunteer" className="quick-link">Volunteer</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
