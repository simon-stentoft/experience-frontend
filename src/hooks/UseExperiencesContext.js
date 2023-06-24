import { ExperiencesContext } from '../context/ExperiencesContext';
import { useContext } from 'react';

//custom hook to use the experiences context
export const useExperiencesContext = () => {
    const context = useContext(ExperiencesContext);

    if(!context) {
        throw Error('useExperiencesContext must be used within a ExperiencesContextProvider')
    }

    return context;
}