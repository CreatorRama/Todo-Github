import { useState } from 'react'
import Header from '../components/common/Header'
import SearchForm from '../components/github/SearchForm'
import UserCard from '../components/github/UserCard'
import ErrorMessage from '../components/github/ErrorMessage'
import LoadingSpinner from '../components/common/LoadingSpinner'
import { fetchGitHubUser } from '../services/githubApi'
import '../styles/pages/GitHubPage.css'

const GitHubPage = () => {
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = async (username) => {
        if (!username.trim()) {
            setError('Please enter a username')
            return
        }

        setLoading(true)
        setError('')
        setHasSearched(true)

        try {
            const data = await fetchGitHubUser(username.trim())
            setUserData(data)
        } catch (err) {
            setError(err.message)
            setUserData(null)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="container">
            <div className="github-page">
                <Header title="GitHub User Search" />
                <SearchForm onSearch={handleSearch} loading={loading} />

                <div className="results-section">
                    {loading && <LoadingSpinner />}
                    {error && <ErrorMessage message={error} />}
                    {!hasSearched && !loading && (
                        <div className="default-message">
                            <p>Search a GitHub user to get started</p>
                        </div>
                    )}
                    {userData && !loading && <UserCard user={userData} />}
                </div>
            </div>
        </div>
    )
}

export default GitHubPage