



const intialState ={
    myFavorites:[],
    allCharacters: []
}

export default function favsReducer(state= intialState, action)
{   switch(action.type){
        case 'ADD_FAV':
            return{
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case 'REMOVE_FAV':
           let favs = [...state.myFavorites];
           let favs2 = favs.filter((p)=> p.id !== parseInt(action.payload)) 

            return{
                ...state,
                myFavorites: favs2
            }
        case 'FILTER':
            var copia = state.allCharacters;
            copia = copia.filter((char)=>{return char.gender === action.payload})
            return{
                ...state,
                myFavorites: copia
            }
        case 'ORDER':
            var copia2 = state.allCharacters;
            if(action.payload ==="A"){copia2 = copia2.sort((a,b)=>{return a.id - b.id})}
            if(action.payload ==='D'){copia2= copia2.sort((a,b)=>{return b.id - a.id})}
            return{
                ...state,
                myFavorites: copia2
            }    
        default:
                return state;
            
}

}

