import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TodoPage from './pages/TodoPage'
import GitHubPage from './pages/GithubPage'
import './App.css'


function App() {
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/github" element={<GitHubPage />} />
      </Routes>
    </div>
  )
}

export default App