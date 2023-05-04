import React, { useEffect, useState } from 'react';
import ViewCard from '../ViewCard/ViewCard';

const ViewDetails = () => {

    const [viewDetails, setViewDetails] = useState([]);
    useEffect(() => {
        fetch('https://chef-recipe-servers-najmul19977.vercel.app/recipeData')
            .then((res) => res.json())
            .then((data) => setViewDetails(data))
    }, []);
    return (
        <div className='container'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5'>
                {
                    viewDetails.map(info => <ViewCard
                        key={info.id}
                        info={info}

                    >

                    </ViewCard>)
                }
            </div>

        </div>
    );
};

export default ViewDetails;