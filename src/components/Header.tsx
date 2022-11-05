  import { IonButtons, IonHeader, IonTitle, IonToolbar, IonIcon, IonImg, IonRow, IonFabButton } from '@ionic/react';
  import { homeOutline } from 'ionicons/icons';
  import './Header.css';
  
const Header: React.FC<{ name: string; pictogram: string }> = ( args: {name: string, pictogram: string} ) => {

    return (
        <IonHeader>
        <IonToolbar color="secondary" class='center-content'>
          
          <IonButtons slot="start">
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