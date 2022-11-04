import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRippleEffect, IonImg, IonRow, IonCol, IonFabList, IonFabButton, IonFab, IonGrid } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { homeOutline, checkmark, arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
// import './Page.css';
import './Page.css';
import Header from '../components/Header';
import ButtonPictogram from '../components/ButtonPictogram';
import BottomNav from '../components/BottomNav';
import { API_URL } from '../variables';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SelectClass: React.FC = () => {

  const [ clases, setClases ] = useState([])

  const sendGetRequest = () => {

    return axios({
      url: API_URL + "accesible_element",
      method: 'get'
    }).then(response => {
  
      console.log(response.data);
      return response.data;
    })
  };

  useEffect(() => {
    sendGetRequest().then(data => setClases(data.clases));
  }, []);

  return (
    <IonPage>
      <Header name="Elige Clase" pictogram='https://api.arasaac.org/api/pictograms/9815?resolution=500&download=false'/>
      <IonContent fullscreen>
        {/* <IonTitle>Elige una clase en la que vas a realizar la comanda realizar la comanda.</IonTitle> */}
        
        <IonGrid class='button-grid grid-with-bottom-nav'>
          {
              clases.map(clase => {
                return (
                  <IonRow class='ion-justify-content-center'>
                    <ButtonPictogram label={clase['_text']} pictogram={clase['_pictogram']} square={false} href="#" />
                  </IonRow>
                );
              })
            }
          
          {/* <IonRow class='ion-justify-content-center'>
            <ButtonPictogram label='Clase B' pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={false} href="#" />
          </IonRow>
          <IonRow class='ion-justify-content-center'>
            <ButtonPictogram label='Clase C' pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={false} href="#" />
          </IonRow>
          <IonRow class='ion-justify-content-center'>
            <ButtonPictogram label='Clase D' pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={false} href="#" />
          </IonRow> */}
        </IonGrid>
      </IonContent>

      <BottomNav/>
      
    </IonPage>
  );
};

export default SelectClass;
