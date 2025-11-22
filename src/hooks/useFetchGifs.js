import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {


        const [categories, setCategories] = useState([]);
        const [isLoading, setIsLoading] = useState(true);


        const newCategories = async () => {
 
            const categoriesGif = await getGifs(category);
            
            setCategories(categoriesGif)
            setIsLoading(false)
        }
    
        useEffect( ()=>{
    
            newCategories();
    
        }, [  ])// Si solo dejo un array vacio significa que este hook se va disparar la primera vez que se construya el componente
    
      


    return {
        images:categories,
        isLoading
    }
}
