import { IonGrid, IonButton, IonImg, IonText, IonCard, IonCardContent, IonCardTitle, IonCol, IonFabButton, IonIcon, IonItem, IonRow } from '@ionic/react';
import { removeOutline, addOutline } from 'ionicons/icons';
import './CounterComponent.css';

import { useEffect, useState } from 'react';
import { MAX_STUDENTS } from "../globals";

interface CounterComponentProps { 
  id: string;
  label: string;
  pictogram: string;
}

const CounterComponent: React.FC<CounterComponentProps> = (props: CounterComponentProps) => {
  // const { name } = useParams<>();

  var counterSession = sessionStorage.getItem("counter_" + props.id);
  var initCounter = 0;
  if(counterSession != null)
    initCounter = Number(counterSession)

  const [counter, setCounter] = useState(initCounter);

  const handlePlusClick = () => {
    if(counter < MAX_STUDENTS){
      setCounter(counter+1);
      sessionStorage.setItem("counter_" + props.id, JSON.stringify(counter+1))
    }
  };
  const handleMinusClick = () => {
    if(counter > 0){
      setCounter(counter-1);
      sessionStorage.setItem("counter_" + props.id, JSON.stringify(counter-1))
    }
  };

  return (
    <>
    <IonCard color="secondary">
          <IonImg src={props.pictogram} />
          <IonCardTitle>{props.label}</IonCardTitle>
        </IonCard>
        <IonCardContent>
          <IonGrid class='card-grid'>
            <IonRow>
              <IonCol>
                <IonFabButton color="danger" onClick={handleMinusClick} id={"minus_" + props.id}>
                  <IonIcon icon={removeOutline}></IonIcon>
                </IonFabButton>
              </IonCol>
              <IonCol>
                <IonItem fill='outline' lines="none">
                  <IonText id={"counter_" + props.id}>{counter}</IonText>
                </IonItem>
              </IonCol>
              <IonCol>
                <IonFabButton color="success" onClick={handlePlusClick} id={"plus_" + props.id}>
                  <IonIcon icon={addOutline}></IonIcon>
                </IonFabButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
    </>
  );
}

export default CounterComponent;