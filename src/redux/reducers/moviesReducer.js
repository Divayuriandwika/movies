const movieReducer = (state = [], action) => {
    switch (action.type){

        case "GET_MOVIE" :
            state= [...action.payload.data];
            return state;

        case "GET_MOVIEID" :
            state= [...action.payload.data];
            return state;

        case "GET_MOVIETITLE" :
            state= [...action.payload.data];
            return state;

       case "POST_MOVIE" :
           state = [...state, action.payload.data]
            return state;

        case "EDIT_TASK" :
            state = [...state, action.payload.data]
            return state;

        case "DELETE_MOVIE" :
            const index = state.findIndex(res=> res._id === action.payload.data._id)

            if(index !== -1 ){
                state= [
                    ...state.slice(0,index),
                    ...state.slice(index+1),
                    ]
            }
            return state;

        case "GET_BYRATINGUP":

            return state.slice().sort(function(a, b){return b.rating - a.rating})

        case "GET_BYRATINGDOWN":

            return state.slice().sort(function(a, b){return a.rating - b.rating})
                
        default :
            return state
    }
}

export default movieReducer;