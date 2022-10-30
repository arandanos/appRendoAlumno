import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRippleEffect, IonImg, IonRow, IonCol } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { homeOutline, checkmark, arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary" class='center-content'>
          <IonButtons slot="start">
            {/* <IonMenuButton /> */}
            <IonButton shape="round" fill="solid" color="primary">
              <IonIcon slot="icon-only" icon={homeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonRow class="ion-align-items-center" >
                <IonCol size='auto' >
                    <IonImg class="pictogram-header" alt={name} src="https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false" ></IonImg>
                </IonCol>
                <IonCol >
                    <IonTitle size='large'>La comida de la clase A</IonTitle>
                </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense" >
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
