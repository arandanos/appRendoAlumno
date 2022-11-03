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

const SelectClass: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <Header name="Elige Clase" pictogram='https://api.arasaac.org/api/pictograms/9815?resolution=500&download=false'/>
      <IonContent fullscreen>
        {/* <IonTitle>Elige una clase en la que vas a realizar la comanda realizar la comanda.</IonTitle> */}
        <IonGrid class='button-grid grid-with-bottom-nav'>
          <IonRow class='ion-justify-content-center'>
            <ButtonPictogram label='Clase A' pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={false} href="#" />
          </IonRow>
          <IonRow class='ion-justify-content-center'>
            <ButtonPictogram label='Clase B' pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={false} href="#" />
          </IonRow>
          <IonRow class='ion-justify-content-center'>
            <ButtonPictogram label='Clase C' pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={false} href="#" />
          </IonRow>
          <IonRow class='ion-justify-content-center'>
            <ButtonPictogram label='Clase D' pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={false} href="#" />
          </IonRow>
        </IonGrid>
      </IonContent>

      <BottomNav/>
      
    </IonPage>
  );
};

export default SelectClass;
