import { useEffect } from 'react';
import { useExperiencesContext } from '../hooks/UseExperiencesContext';

//components
import ExperienceDetails from '../components/ExperienceDetails';

const Home = () => {
    const {experiences, dispatch} = useExperiencesContext()
    //empty array as second argument to prevent useEffect from running more than once
    //fetch uses proxy in package.json to connect to backend, only works in development
    useEffect(() => {
        const fetchExperiences = async () => {
            const response = await fetch('/api/experiences')
            const json = await response.json()

            console.log(response)

            if(response.ok) {
                dispatch({type: 'SET_EXPERIENCES', payload: json})
            }   
        }

        fetchExperiences()
    }, [dispatch])

    return (
        <div className='center'>
            <div className=''>
                <h1 className='center'>Travel experiences</h1>
                {experiences && experiences.map((experience) => (
                    <ExperienceDetails key={experience._id} experience={experience}/>
                ))}
            </div>
        </div>
    )
}

export default Home;