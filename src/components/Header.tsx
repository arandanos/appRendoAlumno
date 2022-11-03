  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRippleEffect, IonImg, IonRow, IonCol, IonFabList, IonFabButton, IonFab } from '@ionic/react';
import { useParams } from 'react-router';
  
  import { useLocation } from 'react-router-dom';
  import { homeOutline } from 'ionicons/icons';
  import './Header.css';
  
const Header: React.FC<{ name: string; pictogram: string }> = ( args: {name: string, pictogram: string} ) => {
    // const { name } = useParams<>();

    return (
        <IonHeader>
        <IonToolbar color="secondary" class='center-content'>
          
          <IonButtons slot="start">
            {/* <IonMenuButton /> */}
            <IonFabButton color="primary" href='/'>
              <IonIcon icon={homeOutline}></IonIcon>              
            </IonFabButton>
          </IonButtons>
          
          <IonImg slot='start' class="pictogram-header" src={args.pictogram} ></IonImg>
         
          <IonTitle>
            <IonRow class="ion-text-wrap">
              {args.name}
            </IonRow>            
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    );
}

export default Header;