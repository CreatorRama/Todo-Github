import { useNavigate } from 'react-router-dom'
import '../styles/pages/HomePage.css'

const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="home-page">
        <h1>Welcome to My React App</h1>
        <p>Choose an option below to get started:</p>
        <div className="button-group">
          <button 
            className="nav-button todo-btn"
            onClick={() => navigate('/todo')}
          >
            To-Do
          </button>
          <button 
            className="nav-button github-btn"
            onClick={() => navigate('/github')}
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage