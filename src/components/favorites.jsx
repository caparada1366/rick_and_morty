import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';

export default function Favorites() {

    const {myFavorites} = useSelector(state => state);

    
        return (
            <div className='cards_container'> 
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
