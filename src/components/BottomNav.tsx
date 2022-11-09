import { IonFabButton, IonFab, IonIcon } from '@ionic/react';
import { checkmark, arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import './BottomNav.css'

const BottomNav: React.FC<{prev?: any; next?: any ; done?: any }> = (props: {prev?: any, next?: any, done?: any } ) => {
    var PrevButton;
    if(props.prev){
        PrevButton = (
            <IonFab vertical="bottom" horizontal='start' slot="fixed">
                <IonFabButton onClick={props.prev}>
                    <IonIcon icon={arrowBackOutline}></IonIcon>
                </IonFabButton>         
            </IonFab>
        );
    } else {
        PrevButton = <></>
    }

    var DoneButton;
    if(props.done){
        DoneButton = (
            <IonFab vertical="bottom" horizontal='center' slot="fixed">
                <IonFabButton color="success" href={props.done}>
                    <IonIcon icon={checkmark}></IonIcon>
                </IonFabButton>
            </IonFab>
        );
    } else {
        DoneButton = <></>
    }

    var NextButton;
    if(props.next){
        NextButton = (
            <IonFab vertical="bottom" horizontal='end' slot="fixed">
                <IonFabButton onClick={props.next}>
                    <IonIcon icon={arrowForwardOutline}></IonIcon>
                </IonFabButton>
            </IonFab>
        );
    } else {
        NextButton = <></>
    }

    return (
        // Hace falta englobarlo en una unica etiqueta vacía para que retorne un unico elemento.
        // Puede ser interesante hacer un componete para cada uno de los botones para mostrar cada uno cuando haga falta
        <>
            {PrevButton}
            {DoneButton}
            {NextButton} 
        </>
   
    );
}

export default BottomNav;