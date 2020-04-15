import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

// Components
import Formulario from './components/Formulario'
import Lyrics from './components/Lyrics'
import Biografia from './components/Biografia'
import Spinner from './components/Spinner'

function App() {

  // Definir state
  const [busquedaLetra, setBusquedaLetra] = useState({})
  const [letra, setLetra] = useState('')
  const [biografia, setBiografia] = useState({})
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return

    const consultarAPI_Lyrics = async () => {
      const { artista, cancion } = busquedaLetra
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      // Usar Promise para varios consultas asíncronas
      const [ letra, biografia ] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ])

      setLetra(letra.data.lyrics)
      setBiografia(biografia.data.artists[0])
      setSpinner(false)
    }

    consultarAPI_Lyrics()
    
  }, [busquedaLetra, biografia])

  // Carga condicional de componentes
  let component1, component2
  if(spinner){
    component1 = <Spinner />
    component2 = <Spinner />
  } else {
    component1 = <Biografia 
                    biografia={biografia}
                  />
    component2 = <Lyrics 
                  letra={letra}
                />
  }

  return (
    <Fragment>
      <Formulario 
        setBusquedaLetra={setBusquedaLetra}
        setSpinner={setSpinner}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            { component1 }           
          </div>
          <div className="col-md-6">
            { component2 }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
