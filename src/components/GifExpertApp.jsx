import { useState } from 'react';
import { AddCategory, GifGrid } from "./index"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ "One Punch"]);

    const onAddCategory = (categorie) => {
        //setCategories(( cate ) => [...cate,"Naruto"])
        if(categories.includes(categorie)) return;

        setCategories([
            categorie,
            ...categories
        ]);

    }

    return (
      <>
          {/* Titulo */}
          <h1>Gif Expert App</h1>

        {/* Input */}
        <AddCategory

         onAddCategory={ onAddCategory } 
        />

        {/* Listado de gif */}
        
        { 
            categories.map(categorie => 
                <GifGrid 
                    category={categorie}
                    key={ categorie }
                />
                /*{ <li key={ categorie }> {categorie} </li> }*/ // cada vez que hagamos una carga dinamica debemos asignarle un key unico
            ) 
        }
        

      </>
    )
}
