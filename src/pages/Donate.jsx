import { useState } from 'react'
import FormInput from '../components/FormInput'
import './Donate.css'

const Donate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    amount: '',
    customAmount: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const presetAmounts = [500, 1000, 5000]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }

    // Clear custom amount error when preset is selected
    if (name === 'amount' && value !== 'custom') {
      setErrors({ ...errors, customAmount: '' })
      setFormData(prev => ({ ...prev, customAmount: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    
    if (!formData.amount) {
      newErrors.amount = 'Please select or enter a donation amount'
    } else if (formData.amount === 'custom' && !formData.customAmount) {
      newErrors.customAmount = 'Please enter a custom amount'
    } else if (formData.amount === 'custom' && (parseFloat(formData.customAmount) < 50 || parseFloat(formData.customAmount) > 1000000)) {
      newErrors.customAmount = 'Amount must be between ₹50 and ₹10,00,000'
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
        const finalAmount = formData.amount === 'custom' ? formData.customAmount : formData.amount
        alert(`Thank you for your generous donation of ₹${finalAmount}! Your contribution will help us continue our mission of empowering visually impaired individuals. A confirmation email has been sent to ${formData.email}.`)
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          amount: '',
          customAmount: '',
          message: ''
        })
        setErrors({})
        setIsSubmitting(false)
      }, 2000)
    } else {
      setErrors(newErrors)
    }
  }

  const donationImpact = [
    { amount: 500, impact: 'Provides braille books for one student for 3 months' },
    { amount: 1000, impact: 'Sponsors a student\'s computer training for 1 month' },
    { amount: 5000, impact: 'Supports a student\'s education for 6 months' }
  ]

  return (
    <div className="donate">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="container">
          <h1>Make a Donation</h1>
          <p className="hero-description">
            Your generosity can transform lives and create opportunities for visually impaired individuals
          </p>
        </div>
      </section>

      <div className="donate-content">
        <div className="container">
          <div className="donate-grid">
            {/* Donation Form */}
            <div className="donation-form-section">
              <div className="form-card">
                <h2>Donate Now</h2>
                <p className="form-intro">
                  Every contribution, no matter the size, makes a significant difference in the lives of our students.
                </p>
                
                <form onSubmit={handleSubmit} className="donation-form">
                  <FormInput
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    error={errors.fullName}
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
                  
                  <div className="amount-section">
                    <label className="amount-label">
                      Donation Amount <span className="required">*</span>
                    </label>
                    <div className="preset-amounts">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          className={`amount-btn ${formData.amount === amount.toString() ? 'active' : ''}`}
                          onClick={() => handleInputChange({ target: { name: 'amount', value: amount.toString() } })}
                        >
                          ₹{amount}
                        </button>
                      ))}
                      <button
                        type="button"
                        className={`amount-btn ${formData.amount === 'custom' ? 'active' : ''}`}
                        onClick={() => handleInputChange({ target: { name: 'amount', value: 'custom' } })}
                      >
                        Custom
                      </button>
                    </div>
                    
                    {formData.amount === 'custom' && (
                      <FormInput
                        label="Custom Amount (₹)"
                        type="number"
                        name="customAmount"
                        value={formData.customAmount}
                        onChange={handleInputChange}
                        error={errors.customAmount}
                        placeholder="Enter amount"
                        min="50"
                        max="1000000"
                        required
                      />
                    )}
                  </div>
                  
                  <FormInput
                    label="Message (Optional)"
                    type="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any specific message or instructions..."
                  />
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Donate Now'}
                  </button>
                </form>
              </div>
            </div>

            {/* Donation Impact */}
            <div className="donation-impact-section">
              <div className="impact-card">
                <h2>Your Impact</h2>
                <p className="impact-intro">
                  See how your donation can make a real difference:
                </p>
                
                <div className="impact-list">
                  {donationImpact.map((item, index) => (
                    <div key={index} className="impact-item">
                      <div className="impact-amount">₹{item.amount}</div>
                      <div className="impact-description">{item.impact}</div>
                    </div>
                  ))}
                </div>

                <div className="other-ways">
                  <h3>Other Ways to Give</h3>
                  <div className="giving-options">
                    <div className="giving-option">
                      <h4>Monthly Giving</h4>
                      <p>Become a monthly supporter and provide consistent help to our students.</p>
                    </div>
                    <div className="giving-option">
                      <h4>Corporate Sponsorship</h4>
                      <p>Partner with us through corporate social responsibility programs.</p>
                    </div>
                    <div className="giving-option">
                      <h4>In-Kind Donations</h4>
                      <p>Donate braille books, computers, or other educational materials.</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info">
                  <h3>Need Help?</h3>
                  <p>
                    For donation-related queries, please contact us:<br />
                    <strong>Email:</strong> donate@ravjbsanstha.org<br />
                    <strong>Phone:</strong> +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
