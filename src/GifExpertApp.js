import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    //const categories = ["one punch ", "Samurai x ", "Dragon ball z"];
    const [categories, setCategories] = useState(["Dragon ball z"]);

    const handleAdd = () => {
        setCategories(categories => [...categories, " Mario bros"]);
    }


    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map(categories => (
                        <GifGrid
                        key={categories} 
                        category={categories} />
                    ))
                }

            </ol>
           
        </Fragment>
    )       
}