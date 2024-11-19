import React, { useEffect, useState } from 'react'
import Tours from './Tours';

const App2 = () => {

    const url = 'https://www.course-api.com/react-tours-project';


    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);


    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false)
            setTours(data)
            // console.log(data);
        } catch (error) {
            setLoading(true)
            console.log(error);

        }

    }

    useEffect(() => {
        fetchTours();
    }, [])

    // console.log(tours);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (tours.length === 0) {
        return <div>

            <h1>NO Tours Found</h1>
            <button className='refresh-btn' onClick={() => fetchTours()}>Refresh</button>
        </div>
    }



    return (
        <main>
            <h1>Our Tours</h1>
            <div className="underline"></div>
            <Tours tours={tours} setTours={setTours} />
        </main>
    )
}

export default App2