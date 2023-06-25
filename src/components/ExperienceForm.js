import { useState } from 'react'
import { useExperiencesContext } from '../hooks/UseExperiencesContext'

const ExperienceForm = () => {
  const { dispatch } = useExperiencesContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [transportation, setTransportation] = useState('')
  const [costs, setCosts] = useState('')
  const [security, setSecurity] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [image, setImage] = useState('')
  const [rating, setRating] = useState('')
  const [otherPlacesToVisit, setOtherPlacesToVisit] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const experience = {title, description, location, transportation, costs, security, date, duration, image, rating, otherPlacesToVisit}
    
    const response = await fetch('/api/experiences', {
      method: 'POST',
      body: JSON.stringify(experience),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setDescription('')
      setLocation('')
      setTransportation('')
      setCosts('')
      setSecurity('')
      setDate('')
      setDuration('')
      setImage('')
      setRating('')
      setOtherPlacesToVisit('')
      dispatch({type: 'CREATE_EXPERIENCE', payload: json})
    }

  }


  return (
    <form onSubmit={handleSubmit} className="mt-4">

      <div className='mb-3'>
      <label htmlFor="title" className='form-label'>Title:</label>
      <input 
        type="text" 
        placeholder='Title of your experience...'
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={`form-control ${emptyFields.includes('title') ? 'error' : ''}`}
        id="title"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="description" className='form-label'>Description:</label>
      <textarea
        type="text"
        placeholder='Describe your experience here...'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={`form-control ${emptyFields.includes('description') ? 'error' : ''}`}
        id="description"
        rows="3"
      />  
      </div>

      <div className='mb-3'>
      <label htmlFor="location" className='form-label'>Location:</label>
      <input
        type="text"
        placeholder='Where did you go?'
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        className={`form-control ${emptyFields.includes('location') ? 'error' : ''}`}
        id="location"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="transportation" className='form-label'>Transportation:</label>
      <input
        type="text"
        placeholder='Was it easy to get around?'
        onChange={(e) => setTransportation(e.target.value)}
        value={transportation}
        className={`form-control ${emptyFields.includes('transportation') ? 'error' : ''}`}
        id="transportation"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="costs" className='form-label'>Costs (DKK):</label>
      <input
        type="number"
        placeholder='How much did the trip cost?'
        onChange={(e) => setCosts(e.target.value)}
        value={costs}
        className={`form-control ${emptyFields.includes('costs') ? 'error' : ''}`}
        id="costs"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="security" className='form-label'>Security:</label>
      <input
        type="text"
        placeholder='How safe did you feel?'
        onChange={(e) => setSecurity(e.target.value)}
        value={security}
        className={`form-control ${emptyFields.includes('security') ? 'error' : ''}`}
        id="security"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="date" className='form-label'>Date:</label>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className={`form-control ${emptyFields.includes('date') ? 'error' : ''}`}
        id="date"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="duration" className='form-label'>Duration (days):</label>
      <input
        type="number"
        placeholder='How many days did you stay?'
        onChange={(e) => setDuration(e.target.value)}
        value={duration}
        className={`form-control ${emptyFields.includes('duration') ? 'error' : ''}`}
        id="duration"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="image" className='form-label'>Image:</label>
      <input
        type="text"
        placeholder='Add an image URL'
        onChange={(e) => setImage(e.target.value)}
        value={image}
        className={`form-control ${emptyFields.includes('image') ? 'error' : ''}`}
        id="image"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="rating" className='form-label'>Rating:</label>
      <input
        type="number"
        placeholder='How would you rate your experience?'
        onChange={(e) => setRating(e.target.value)}
        value={rating}
        className={`form-control ${emptyFields.includes('rating') ? 'error' : ''}`}
        id="rating"
      />
      </div>

      <div className='mb-3'>
      <label htmlFor="otherPlacesToVisit" className='form-label'>Other places to visit:</label>
      <input
        type="text"
        placeholder='Can you recommend other nearby places to visit?'
        onChange={(e) => setOtherPlacesToVisit(e.target.value)}
        value={otherPlacesToVisit}
        className={`form-control ${emptyFields.includes('otherPlacesToVisit') ? 'error' : ''}`}
        id="otherPlacesToVisit"
      />
      </div>

      <button type="submit" className="btn btn-success">Submit</button>
    </form>
  )
}

export default ExperienceForm;
