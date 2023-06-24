import { useExperiencesContext } from '../hooks/UseExperiencesContext'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import format from 'date-fns/format'

const ExperienceDetails = ({ experience }) => {
    const { dispatch } = useExperiencesContext()

    const handleClick = async () => {
        const response = await fetch('/api/experiences/' + experience._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        
        if(response.ok) {
            dispatch({type: 'DELETE_EXPERIENCE', payload: json})
        }
    }

    //Format start date
    const formattedDate = experience.date ? format(new Date(experience.date), 'dd/MM/yyyy') : '';

    return (
        <div className='card text-bg-light mb-3' style={{width: "50rem"}}>
            <div className='card-body'>
                <h4 className='card-title'>{experience.title}</h4>
                <p className='card-text'><strong>Description: </strong>{experience.description}</p>
                <p><strong>Location: </strong>{experience.location}</p>
                <p><strong>Transportation: </strong>{experience.transportation}</p>
                <p><strong>Costs (DKK): </strong>{experience.costs}</p>
                <p><strong>Security: </strong>{experience.security}</p>
                <p><strong>Start date: </strong>{formattedDate}</p>
                <p><strong>Duration (days): </strong>{experience.duration}</p>
                <p><strong>Image: </strong>{experience.image}</p>
                <p><strong>Rating (1-5): </strong>{experience.rating}</p>
                <p><strong>Other places to visit: </strong>{experience.otherPlacesToVisit}</p>
                <p>{formatDistanceToNow(new Date(experience.createdAt), { addSuffix: true })}</p>
                <span className="btn btn-danger" onClick={handleClick}>Delete</span>
            </div>
        </div>
    )
}

export default ExperienceDetails;