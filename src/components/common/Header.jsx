import { Link } from 'react-router-dom'
import '../../styles/components/Header.css'

const Header = ({ title }) => {
  return (
    <div className="page-header">
      <h1>{title}</h1>
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  )
}

export default Header