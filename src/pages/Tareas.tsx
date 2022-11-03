import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRippleEffect, IonImg, IonRow, IonCol, IonFabList, IonFabButton, IonFab, IonInput } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { homeOutline, checkmark, arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import './Page.css';
import Header from '../components/Header';
import ButtonPictogram from '../components/ButtonPictogram';
import BottomNav from '../components/BottomNav';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../variables';

const Tareas: React.FC = () => {

  const [ clase, setClase ] = useState(null)

  const sendGetRequest = () => {

    return axios({
      url: API_URL + "accesible_element/1",
      method: 'get'
    }).then(response => {
  
      console.log(response.data);
      return response.data;
    })
  };

  useEffect(() => {
    sendGetRequest().then(data => setClase(data._text))
  })

  return (
    <IonPage>
      <Header name="Tareas" pictogram='https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false'/>
      <IonContent fullscreen>
        <h1>
          La primera Clase es {clase}
        </h1>
      
        {/*  NO IMPLEMENTAR AUN - CREAR NUEVA PAGINA PARA COMANDA DE COCINA */}
        {/* <ButtonPictogram label='Comanda' pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={false} href="#"/> */}
      </IonContent>

      <BottomNav/>
      
    </IonPage>
  );
};

export default Tareas;
