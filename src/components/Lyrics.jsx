import React, { Fragment } from 'react'
import { ucfirst } from '../helpers'

const Lyrics = ({cancion, artista, letra}) => {

    if(!letra) return null

    return ( 
        <Fragment>
            <h2>Letra de la canción</h2>
            <h6>{ucfirst(cancion)} - {ucfirst(artista)}</h6>
            <p className="letra">{letra}</p>
        </Fragment>
    )
}
 
export default Lyrics;