import { createContext, useReducer } from "react";

export const ExperiencesContext = createContext();

// This keeps the local state (what you see on the page) in sync with the database.
export const experiencesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EXPERIENCES':
      return {
        experiences: action.payload
      }
    case 'CREATE_EXPERIENCE':
      return {
        experiences: [action.payload, ...state.experiences] // ...state.experiences is the previous state
      }
    case 'DELETE_EXPERIENCE':
      return {
        experiences: state.experiences.filter((experience) => experience._id !== action.payload._id)
      }
    default:
      return state;
  }
}

export const ExperiencesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(experiencesReducer, { 
    experiences: null
  });
      
  return (
    <ExperiencesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ExperiencesContext.Provider>
  );
}