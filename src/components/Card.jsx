import './Card.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../Redux/actions';
import React, {useEffect} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

export function Card({id, name, status, species, gender, origin, image, onClose}) {
  
   const [isFav, setIsFav] = React.useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   
   function handleFavorite(event){
      if(isFav === true){
         setIsFav(false)
         dispatch(removeFav(id))
      }
      if(isFav === false){
         setIsFav(true);
         dispatch(addFav({id, name, status, species, gender, origin, image, onClose}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

    return (
      
      <div className="card">
            {
               isFav ? (
                  <button style={{cursor: 'pointer'}} onClick={handleFavorite}>❤️</button>
               ) : (
                  <button style={{cursor: 'pointer'}} onClick={handleFavorite}>🤍</button>
               )
            }        
          <button style={{cursor: 'pointer'}} onClick={()=>onClose(id)}>X</button>
          <Link to={`/detail/${id}`} ><h2>{name}</h2>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin}</h2>
          <img className ="img" src={image} alt={name} /></Link>
       </div>
    );
 }

 export const matchDispatchToProps = (dispatch)=>({
   addFav: (personaje)=>{dispatch(addFav(personaje))},
   removeFav: (id) =>{dispatch(removeFav(id))} 
})

export const mapStateToProps =(state)=>{
   return {
      myFavorites: state.myFavorites
   }
}
connect(null,mapStateToProps)(Card)

export default connect(null, matchDispatchToProps)(Card);