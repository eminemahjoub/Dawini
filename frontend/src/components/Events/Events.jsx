import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/styles'
import EventCard from "./EventCard";
import { getAllEventsShop } from '../../redux/actions/event';

const Events = () => {
  const {allEvents,isLoading} = useSelector((state) => state.events);
  const dispatch = useDispatch()  
  useEffect(()=>{
    dispatch(getAllEventsShop)
  })
   
  return (
    <div>
     {
      !isLoading && (
        <div className={`${styles.section}`}>
      <div className={`${styles.heading}`}>
        <h1>Popular Events</h1>
      </div>

      <div className="w-full grid">
  {allEvents && allEvents.length !== 0 && (
    <EventCard data={allEvents[0]} />
  )}
  <h4>
    {!allEvents || allEvents.length === 0 ? 'No Events have!' : ''}
  </h4>
</div>

     
    </div>
      )
     }
  </div>
  )
}

export default Events