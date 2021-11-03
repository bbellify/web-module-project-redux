import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions'

const initialState = {
    favorites: [
        {
            id: 0,
            title: "The Godfather",
            director: "Francis Ford Coppola",
            metascore: 100,
            genre: "Drama",
            description: "War hero Michael is the prodigal son of aging but fearsome crime patriarch Don Vito Corleone. When Michael returns home only to be thrust into an all-too-familiar world of hitmen, corrupt cops, and simmering mafia rivalries, he is forced to choose between his own path and the Corleone family legacy."
          },
          {
            id: 1,
            title: "Star Wars",
            director: "George Lucas",
            metascore: 92,
            genre: "Scifi",
            description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
          }],        
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE: 
            return {
                ...state,
                favorites: [...state.favorites, {
                    title: action.payload.title, 
                    director: action.payload.director, 
                    genre: action.payload.genre, 
                    metascore: action.payload.metascore, 
                    description: action.payload.description, 
                    id: action.payload.id}]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default: 
            return state
    }    
}

export default reducer