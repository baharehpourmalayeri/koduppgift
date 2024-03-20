import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  function getUser() {
    setLoading(true)
    fetch('https://randomuser.me/api/')
      .then((response) => {
        setLoading(false)
        if (response.ok) {
          return response.json()
        }
        else {
          setError(true)
        }
      })
      .then((result) => {
        if (result === null || result.results.length < 1) {
          setError(true)
        }
        else {
          setError(false)
          setUser(result.results[0])
        }
      })
  }

  return (
    <>
      <div className="container">
        <h1>Get your random user</h1>

        <div className="content">
          <button className='button' onClick={getUser}>Get User
          </button>
          {loading && <div className='loading'><img src='/src/assets/spinner.gif' alt='Loading...' /></div>}
          {!error && user !== null && <div className="info">
            <img className='image' src={user.picture.large} />
            <div className='row'>
              <span className='label'>Gender:</span>
              <span className='value'>{user.gender}</span>
            </div>
            <div className='row'>
              <span className='label'>Name:</span>
              <span className='value'>{user.name.title + ' ' + user.name.first + ' ' + user.name.last}</span>
            </div>
            <div className='row'>
              <span className='label'>Age:</span>
              <span className='value'>{user.dob.age}</span>
            </div>
            <div className='row'>
              <span className='label'>Email:</span>
              <span className='value'>{user.email}</span>
            </div>
            <div className='row'>
              <span className='label'>Phone:</span>
              <span className='value'>{user.phone}</span>
            </div>
            <div className='row'>
              <span className='label'>Location:</span>
              <span className='value'>{user.location.street.number + ' ' + user.location.street.name}, {user.location.city}, {user.location.country + ' ' + user.location.postcode}</span>
            </div>
          </div>}
          {error && <div className="error">
            <p>Something went wrong! Please try again.</p>
          </div>}
        </div>
      </div>
    </>
  )
}

export default App
