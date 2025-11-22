import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setinputValue] = useState("");

    const onInputChanged = (event) => { // Podemos destructurar el evento y tomar el target
        setinputValue(event.target.value);
    }

    const onEnviar = ( e ) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;


        onAddCategory(inputValue);

        setinputValue("");
    }

    return (
        <form onSubmit={ (e) => onEnviar(e) }>{/* Esto cuenta como fragmento, no se puede tener 2 elementos padre, solo un elemento padre y los demas hijos*/}

            <input
                type="text"
                placeholder="Buscar Gif"
                value={ inputValue }
                onChange={ onInputChanged } 
            />
        </form>
    )
}
