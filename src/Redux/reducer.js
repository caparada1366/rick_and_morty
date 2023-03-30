



const intialState ={myFavorites:[]}

export default function favsReducer(state= intialState, action)
{   switch(action.type){
        case 'ADD_FAV':
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case 'REMOVE_FAV':
           let favs = [...state.myFavorites];
           let favs2 = favs.filter((p)=> p.id !== parseInt(action.payload)) 

            return{
                ...state,
                myFavorites: favs2
            }
        default:
                return state;
            
}

}

