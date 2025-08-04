import { useState } from 'react'
import '../../styles/components/GitHubComponents.css'

const SearchForm = ({ onSearch, loading }) => {
  const [username, setUsername] = useState('')



const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        console.log("ram");
      onSearch(username)
    }
  }

  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyPress}
        className="github-input"
      />
      <button 
        onClick={() => onSearch(username)} 
        className="search-btn" 
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  )
}

export default SearchForm
