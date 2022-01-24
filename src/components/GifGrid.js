import React, { useState, useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import { GifGridItem } from '../GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );

    /* const [images, setImages] = useState([]);


        useEffect( () => {
            getGifs( category )
            .then(imgs => setImages( imgs ));
        }, [ category ]) */
  
  return (
    <Fragment>
        <h3 className='animate__animated animate__headShake'> { category } </h3>
      
        { loading && <p className='animate__animated animate__headShake'>Loading...</p>}

       <div className='card-grid'>
           {images.map( img => 
             <GifGridItem
             key={img.id} 
             {...img} />
        )}
        
    </div> 
    </Fragment>
  )
};
