import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card';
import { filterCards, orderCards } from '../Redux/actions';

export default function Favorites() {

    const {myFavorites} = useSelector(state => state);
   const dispatch = useDispatch();

   function handleOrder(e){
      dispatch(orderCards(e.target.value));
   }
   function handleFilter(e){
      dispatch(filterCards(e.target.value))
   }
    
        return (
            
            <div className='cards_container'> 
            <div><select onChange={handleOrder}>
               <option value= 'A'>Ascendente</option>
               <option value= 'D'>Descendente</option>
            </select>
            <select onChange={handleFilter}>
               <option value= 'Male'>Male</option>
               <option value= 'Female'>Female</option>
               <option value= 'Genderless'>Genderless</option>
               <option value= 'unknown'>unknown</option>
            </select></div>
            {
               myFavorites && myFavorites.map((element,index)=>{
                  return <Card key={index}
               id={element.id}
               name={element.name}
               status={element.status}
               species={element.species}
               gender={element.gender}
               origin={element.origin.name}
               image={element.image}
               > </Card>
   
               })
            }          
      </div>);

  
}
