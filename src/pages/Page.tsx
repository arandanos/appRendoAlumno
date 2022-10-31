import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRippleEffect, IonImg, IonRow, IonCol, IonFabList, IonFabButton, IonFab } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { homeOutline, checkmark, arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import './Page.css';
import Header from '../components/Header';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <Header name="Antonio" pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false'/>
      <IonContent fullscreen>
        <IonHeader collapse="condense" >
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>


      <IonFab vertical="bottom" horizontal='end' slot="fixed">
        <IonFabButton>
          <IonIcon icon={arrowForwardOutline}></IonIcon>
        </IonFabButton>
      </IonFab>

      <IonFab vertical="bottom" horizontal='center' slot="fixed">
        <IonFabButton  color="success" href='/antonio'>
          <IonIcon icon={checkmark}></IonIcon>
        </IonFabButton>
      </IonFab>

      <IonFab vertical="bottom" horizontal='start' slot="fixed">
        <IonFabButton>
          <IonIcon icon={arrowBackOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default Page;
