import '../../styles/components/GitHubComponents.css'

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt="User Avatar" className="avatar" />
      <div className="user-info">
        <h2>{user.name || user.login}</h2>
        {user.bio && <p className="bio">{user.bio}</p>}
        {user.location && (
          <p className="location">📍 {user.location}</p>
        )}
        <div className="stats">
          <div className="stat">
            <strong>{user.followers}</strong>
            <span>Followers</span>
          </div>
          <div className="stat">
            <strong>{user.public_repos}</strong>
            <span>Repositories</span>
          </div>
        </div>
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="profile-link"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  )
}

export default UserCard