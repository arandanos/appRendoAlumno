import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRippleEffect, IonImg, IonRow, IonCol, IonFabList, IonFabButton, IonFab } from '@ionic/react';
import { useParams } from 'react-router';
  
import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, homeOutline, checkmark, arrowBackOutline, arrowForwardOutline, homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './BottomNav.css'

const BottomNav: React.FC = ( ) => {
    // const { name } = useParams<>();

    return (
        // Hace falta englobarlo en una unica etiqueta vacía para que retorne un unico elemento.
        // Puede ser interesante hacer un componete para cada uno de los botones para mostrar cada uno cuando haga falta
        <>
        <IonFab vertical="bottom" horizontal='end' slot="fixed">
            <IonFabButton>
                <IonIcon icon={arrowForwardOutline}></IonIcon>
            </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal='center' slot="fixed">
            <IonFabButton color="success" href='#'>
                <IonIcon icon={checkmark}></IonIcon>
            </IonFabButton>
        </IonFab>
        <IonFab vertical="bottom" horizontal='start' slot="fixed">
            <IonFabButton>
                <IonIcon icon={arrowBackOutline}></IonIcon>
            </IonFabButton>
        </IonFab>
        </>
   
    );
}

export default BottomNav;