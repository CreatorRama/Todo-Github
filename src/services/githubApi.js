const GITHUB_API_BASE = 'https://api.github.com'

export const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`)
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('User not found')
      }
      throw new Error('Failed to fetch user data')
    }
    
    return await response.json()
  } catch (error) {
    throw error
  }
}