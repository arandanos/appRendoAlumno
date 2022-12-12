import { IonContent, IonPage, IonRow, IonGrid, IonCol } from '@ionic/react';
import './Page.css';
import '../components/ButtonPictogram'
import Header from '../components/Header';
import ButtonPictogram from '../components/ButtonPictogram';

const Home: React.FC = () => {

  // const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <Header name="Inicio" pictogram='https://api.arasaac.org/api/pictograms/2317?resolution=500&download=false'/>
      <IonContent fullscreen>
        <IonGrid class='button-grid'>
          <IonRow class='ion-justify-content-between'>
            <IonCol size='auto'>
              <ButtonPictogram label="Comanda" pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={true} href="/elige_clase/3"/>
            </IonCol>
            <IonCol size='auto'>
              <ButtonPictogram label="Tareas" pictogram='https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false' square={true} href="/tareas"/>
            </IonCol>
          </IonRow>
          <IonRow class='ion-justify-content-between'>
            <IonCol size='auto'>
              <ButtonPictogram label="Urgente" pictogram='https://api.arasaac.org/api/pictograms/36675?resolution=500&download=false' square={true} href="#"/>
            </IonCol>
            <IonCol size="auto">
              <ButtonPictogram label="Histórico" pictogram='https://api.arasaac.org/api/pictograms/9174?resolution=500&download=false' square={true} href="#"/> 
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
