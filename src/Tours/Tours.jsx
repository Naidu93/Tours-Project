import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, setTours }) => {
    // const [id, image, info, name, price] = tours;
    // console.log(id, image, info, name, price);
    const handleDelete = (getCurrentId) => {
        console.log(getCurrentId);
        let newTours = tours.filter((tour) => tour.id !== getCurrentId);
        setTours(newTours)
        console.log(newTours);

    }
    return (
        <div className='tours-container' >
            {tours.map((tour) => {
                return <Tour key={tour.id} tour={tour} handleDelete={handleDelete} />
            })}
        </div>
    )
}

export default Tours