import { IonButtons, IonContent, IonPage, IonTitle } from '@ionic/react';
import { useParams } from 'react-router';
import { homeOutline, checkmark, arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import './Page.css';
import Header from '../components/Header';

const Home: React.FC = () => {

  // const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <Header name="AAA" pictogram='https://api.arasaac.org/api/pictograms/38222?resolution=500&download=false'/>
      <IonContent fullscreen>
        <IonTitle>
          ANTONIO CREEME
        </IonTitle>
      </IonContent>
    </IonPage>
  );
};

export default Home;
