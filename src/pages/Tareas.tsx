import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRippleEffect, IonImg, IonRow, IonCol, IonFabList, IonFabButton, IonFab, IonInput, IonItem } from '@ionic/react';
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

  // const [ clase, setClase ] = useState(null)
  

  return (
    <IonPage>
      <Header name="Tareas" pictogram='https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false'/>
      <IonContent fullscreen>
      
        {/*  NO IMPLEMENTAR AUN - CREAR NUEVA PAGINA PARA COMANDA DE COCINA */}
        {/* <ButtonPictogram label='Comanda' pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={false} href="#"/> */}
      </IonContent>

      <BottomNav/>
      
    </IonPage>
  );
};

export default Tareas;
