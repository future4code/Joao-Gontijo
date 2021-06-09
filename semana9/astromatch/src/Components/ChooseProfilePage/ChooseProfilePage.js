import React, { useEffect, useState } from 'react'
import ChooseButtons from './ChooseButtons'
import ProfileCard from './ProfileCard'
import axios from "axios"

function ChooseProfilePage() {
    const [profileToChoose, setProfileTochoose] = useState (undefined)
    
    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-gontijo/person')
        .then(response => {
        setProfileTochoose(response.data.profile)
    })
    }
    
    const chooseProfile = (choice) => {  
        const body = {
        choice: choice,
        id: profileToChoose.id
    }
    setProfileTochoose(undefined)

    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao-gontijo/choose-person', body)
    .then (response => {
        console.log(response)
        getProfileToChoose()
    })}

     useEffect(() =>{
      getProfileToChoose()
     }, []);
     
     const onClickNo = () => {
     chooseProfile(false)
    }

    const onClickYes = () => {
        chooseProfile(true)
    }
    
      return(
        <div>
            { profileToChoose ?
          (  <>
            <ProfileCard  profile={profileToChoose}/>
            <ChooseButtons onClickNo={onClickNo} onClickYes={onClickYes} />
            </>) : <p>Carregando...</p>
            }
        </div>
    )
}


export default ChooseProfilePage