import { IonPage, IonContent, IonText, IonImg, IonCard, IonCardTitle, IonCardContent, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonItem } from '@ionic/react';
import Header from '../components/Header';
import './Page.css';
import './KitchenOrder.css';
import Pagination from './Pagination';
import { addOutline, removeOutline } from 'ionicons/icons';
import BottomNav from '../components/BottomNav';
import { useState } from 'react';
import { MAX_STUDENTS } from "../globals";

const KitchenOrder: React.FC = () => {

  const [counter, setCounter] = useState(0);

  const handlePlusClick = () => {
    if(counter < MAX_STUDENTS)
      setCounter(counter+1);
  };
  const handleMinusClick = () => {
    if(counter > 0){
      setCounter(counter-1);
    }
  };

  return (
    <IonPage>
      <Header name="La Comida" pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' />
      <IonContent fullscreen>
        <IonCard color="secondary">
          <IonImg src='https://api.arasaac.org/api/pictograms/6961?resolution=500&download=false' />
          <IonCardTitle>Carne</IonCardTitle>
        </IonCard>
        <IonCardContent>
          <IonGrid class='card-grid'>
            <IonRow>
              <IonCol>
                <IonFabButton color="danger" onClick={handleMinusClick}>
                  <IonIcon icon={removeOutline}></IonIcon>
                </IonFabButton>
              </IonCol>
              <IonCol>
                <IonItem fill='outline' lines="none">
                  <IonText>{counter}</IonText>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonFabButton color="success" onClick={handlePlusClick}>
                  <IonIcon icon={addOutline}></IonIcon>
                </IonFabButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>

        <hr />

        <IonCard color="secondary">
          <IonImg src='https://api.arasaac.org/api/pictograms/6961?resolution=500&download=false' />
          <IonCardTitle>Carne</IonCardTitle>
        </IonCard>
        <IonCardContent>
          <IonGrid class='card-grid'>
            <IonRow>
              <IonCol>
                <IonFabButton color="danger">
                  <IonIcon icon={removeOutline}></IonIcon>
                </IonFabButton>
              </IonCol>
              <IonCol>
                <IonItem fill='outline' lines="none">
                  <IonText>0</IonText>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonFabButton color="success">
                  <IonIcon icon={addOutline}></IonIcon>
                </IonFabButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
        <hr/>

        <BottomNav/>

      </IonContent>


    </IonPage>
    // <Pagination itemsPerPage={4} name="La Comanda de la Clase" pictogram="https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false" url=''/>
  );
};

export default KitchenOrder;
