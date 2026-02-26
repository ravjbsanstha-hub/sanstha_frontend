import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import './SchoolCard.css'

const SchoolCard = ({ school }) => {
  return (
    <div className="school-card">
      <div className="school-image">
        <img 
          src={school.image} 
          alt={`${school.name} - ${school.location}`}
          loading="lazy"
        />
        <div className="school-badge">{school.type}</div>
      </div>
      
      <div className="school-content">
        <h3>{school.name}</h3>
        <p className="school-location">
          <MapPin size={16} style={{ display: 'inline', marginRight: '5px' }} />
          {school.location}
        </p>
        
        <p className="school-description">{school.description}</p>
        
        <div className="school-stats">
          <div className="stat">
            <span className="stat-number">{school.students}</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat">
            <span className="stat-number">{school.teachers}</span>
            <span className="stat-label">Teachers</span>
          </div>
        </div>
        
        <div className="school-facilities">
          <h4>Facilities</h4>
          <div className="facilities-list">
            {school.facilities.slice(0, 3).map((facility, index) => (
              <span key={index} className="facility-tag">
                {facility}
              </span>
            ))}
            {school.facilities.length > 3 && (
              <span className="facility-tag more">
                +{school.facilities.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <Link 
          to={`/schools#${school.id}`} 
          className="btn btn-primary school-link"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default SchoolCard
