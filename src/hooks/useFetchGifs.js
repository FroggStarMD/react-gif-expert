import { useEffect, useState } from "react/cjs/react.development"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    const[state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
        .then(img => {

            setTimeout( () => {
                setState({
                    data: img,
                    loading: false
                });
            }, 3000);
        });
    }, []);

   

    return state;

}