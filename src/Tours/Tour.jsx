import React, { useState } from 'react'

const Tour = ({ tour, handleDelete }) => {
    const { id, image, info, name, price } = tour;
    // console.log(id);
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = (getCurrentId) => {
        console.log(getCurrentId);
        setShowMore(!showMore)

    }


    return (
        <div className='tour'>
            <img src={image} alt={name} />
            <div className="tour-info">
                <h3>{name}</h3>
                <p>{showMore ? info : `${info.substring(0, 200)}...`} <i onClick={() => handleShowMore(id)}>{showMore ? <span>Show Less</span> : <span>Show More</span>} </i> </p>
            </div>
            <span className='price'>${price}</span>
            <button onClick={() => handleDelete(id)}>Not Interested</button>
        </div>
    )
}

export default Tour