import axios from 'axios'
import React from 'react'

function ResetButton() {
    const onClickReset = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-gontijo/clear').then(response => {
            console.log(response)
        })
    }
    return(
        <div>
            <button onClick={onClickReset}>Resetar curtidas e matches</button>
            </div>
    )
}


export default ResetButton
