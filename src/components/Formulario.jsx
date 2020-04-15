import React, { useState } from 'react';
import Error from './Error'

const Formulario = ({setBusquedaLetra, setSpinner}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    const [error, setError] = useState(false)

    const { artista, cancion } = busqueda

    // Función para actualizar el input
    const handleChange = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(artista.trim() === '' || cancion.trim() === ''){
            setError(true)
            return
        }

        setError(false)

        // Todo bien pasar al componente principal
        setBusquedaLetra(busqueda)
        setSpinner(true)
    }

    return ( 
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className="text-center">Letras de canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artista">Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="¿Qué artista?"
                                            onChange={handleChange}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="artista">Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="¿Cuál canción buscas?"
                                            onChange={handleChange}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Buscar
                            </button>

                        </fieldset>
                    </form>
                </div>
            </div>
            {
                (error) ? <Error mensaje="Todos los campos son obligatorios" /> : null
            }
        </div>
     );
}
 
export default Formulario;