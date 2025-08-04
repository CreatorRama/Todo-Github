import '../../styles/components/Header.css'

const LoadingSpinner = () => {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading user data...</p>
    </div>
  )
}

export default LoadingSpinner