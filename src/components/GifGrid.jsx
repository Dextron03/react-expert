import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid =  ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    // No debemos llamar funciones en nuestro funcional component, porque cada vez que una funcion se renderiza va volver a ejecutar esa funcion, por consecuencia
    // va a volver a ejecutar la peticion http

    //useEffect es un hook que sirve para disparar efectos secundarios, osea algun proceso que queramos ejecutar cuando algo suceda 


    return (
        <>
            <h3> { category } </h3>
{/*             { 
                isLoading 
                ? ( <h2> Cargando... </h2>) 
                : null
            } */}

            { isLoading && <h2> Cargando... </h2> }
            

            <div className="card-grid"> {/* No debemos asignar la palabra class a la hora de crear componentes */}
                { 
                    images.map( (image) => 
                        <GifGridItem
                            key={image.id}
                            title={ image.title }
                            url={ image.url } />
                    )
                }
            </div>
        </>
    )
}   
