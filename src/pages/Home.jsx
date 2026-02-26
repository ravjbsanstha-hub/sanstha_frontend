import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import SchoolCard from '../components/SchoolCard'
import StatsCounter from '../components/StatsCounter'
import './Home.css'

const Home = () => {
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1576086213369-97a26d5f6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Visually impaired students learning braille',
      title: 'Quality Education',
      description: 'Providing comprehensive education for visually impaired students'
    },
    {
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Students using assistive technology',
      title: 'Modern Technology',
      description: 'Equipping students with latest assistive technologies'
    },
    {
      url: 'https://images.unsplash.com/photo-1577563908411-9973b4f3f1a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Vocational training session',
      title: 'Skill Development',
      description: 'Building independent living skills for brighter future'
    }
  ]

  const schools = [
    {
      id: 'prerna',
      name: 'Prerna Andha Vidyalay',
      location: 'Pune, Maharashtra',
      type: 'Primary School',
      description: 'A nurturing environment for young visually impaired children to begin their educational journey with specialized care and attention.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      students: '450+',
      teachers: '12',
      facilities: ['Braille Library', 'Computer Lab', 'Hostel', 'Playground', 'Medical Room']
    },
    {
      id: 'jyoti',
      name: 'Jyoti Blind School',
      location: 'Mumbai, Maharashtra',
      type: 'Secondary School',
      description: 'Comprehensive secondary education with advanced learning resources and career guidance for visually impaired students.',
      image: 'https://images.unsplash.com/photo-1569074187119-c87815be434d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      students: '380+',
      teachers: '8',
      facilities: ['Science Lab', 'Music Room', 'Sports Complex', 'Counseling Center', 'Digital Library']
    },
    {
      id: 'vision',
      name: 'Vision Hope Academy',
      location: 'Nagpur, Maharashtra',
      type: 'Higher Education',
      description: 'Advanced learning center focusing on higher education and professional development for visually impaired adults.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      students: '370+',
      teachers: '5',
      facilities: ['Vocational Training', 'Career Guidance', 'Placement Cell', 'Research Center', 'Hostel']
    }
  ]

  const stats = [
    { icon: '👥', value: 1200, suffix: '+', label: 'Students Educated' },
    { icon: '👨‍🏫', value: 25, suffix: '+', label: 'Dedicated Teachers' },
    { icon: '🏫', value: 3, suffix: '', label: 'Active Schools' },
    { icon: '🎯', value: 10, suffix: '+', label: 'Skill Programs' }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title fade-in">
              Empowering Vision Beyond Sight
            </h1>
            <p className="hero-subtitle slide-up">
              Supporting visually impaired individuals with education and opportunity.
            </p>
            <div className="hero-buttons slide-up">
              <Link to="/donate" className="btn btn-secondary btn-large">
                Donate Now
              </Link>
              <Link to="/schools" className="btn btn-outline btn-large">
                Explore Schools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="carousel-section">
        <div className="container">
          <Carousel images={carouselImages} />
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Students learning together"
                loading="lazy"
              />
            </div>
            <div className="about-text">
              <h2>About RAVJB Sanstha</h2>
              <p>
                Founded in 2012, RAVJB Sanstha has been at the forefront of empowering visually impaired 
                individuals across Maharashtra. Our mission is to provide comprehensive education, skill development, 
                and rehabilitation services that enable independence and dignity for the visually impaired community.
              </p>
              <p>
                Through our three specialized schools and numerous programs, we have touched over 1,200 lives, 
                providing them with the tools, confidence, and opportunities needed to lead fulfilling lives and 
                contribute meaningfully to society.
              </p>
              <Link to="/about" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Schools Preview */}
      <section className="schools-preview">
        <div className="container">
          <h2 className="section-title">Our Schools</h2>
          <div className="schools-grid">
            {schools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats-section">
        <StatsCounter stats={stats} />
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Be the Light in Someone's Darkness</h2>
            <p>
              Your generous donation helps us provide quality education, essential resources, 
              and life-changing opportunities to visually impaired individuals.
            </p>
            <Link to="/donate" className="btn btn-secondary btn-large">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
