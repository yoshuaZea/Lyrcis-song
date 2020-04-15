import React, { Fragment } from 'react'

const Lyrics = ({letra}) => {

    if(!letra) return null

    return ( 
        <Fragment>
            <h2>Letra de la canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
    )
}
 
export default Lyrics;