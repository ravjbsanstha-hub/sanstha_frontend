import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/gallery', label: 'Gallery' }
  ]

  const schoolLinks = [
    { path: '/schools#prerna', label: 'Prerna Andha Vidyalay' },
    { path: '/schools#jyoti', label: 'Jyoti Blind School' },
    { path: '/schools#vision', label: 'Vision Hope Academy' }
  ]

  const socialLinks = [
    { name: 'Facebook', url: '#', icon: Facebook },
    { name: 'Twitter', url: '#', icon: Twitter },
    { name: 'Instagram', url: '#', icon: Instagram },
    { name: 'LinkedIn', url: '#', icon: Linkedin }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>RAVJB Sanstha</h3>
            <p>
              Empowering visually impaired individuals through education, 
              skill development, and rehabilitation since 2012.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  aria-label={`Follow us on ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Schools</h4>
            <ul className="footer-links">
              {schoolLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                <strong>Address:</strong><br />
                <MapPin size={16} style={{ display: 'inline', marginRight: '5px' }} />
                RAVJB Sanstha<br />
                Near Shivaji Nagar<br />
                Pune, Maharashtra 411016
              </p>
              <p>
                <strong>Email:</strong><br />
                <Mail size={16} style={{ display: 'inline', marginRight: '5px' }} />
                <a href="mailto:info@ravjbsanstha.org">info@ravjbsanstha.org</a>
              </p>
              <p>
                <strong>Phone:</strong><br />
                <Phone size={16} style={{ display: 'inline', marginRight: '5px' }} />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 RAVJB Sanstha. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
