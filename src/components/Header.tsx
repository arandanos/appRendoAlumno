  import { IonButtons, IonHeader, IonTitle, IonToolbar, IonIcon, IonImg, IonRow, IonFabButton } from '@ionic/react';
  import { homeOutline } from 'ionicons/icons';
  import './Header.css';

  interface HeaderProps {
    name?: string; 
    pictogram?: string;
    classPictogram?: string;
  }
  
const Header: React.FC<HeaderProps> = ( props: HeaderProps ) => {

    return (
        <IonHeader>
        <IonToolbar color="secondary" class='center-content'>
          
          <IonButtons slot="start">
            <IonFabButton color="primary" href='/'>
              <IonIcon icon={homeOutline}></IonIcon>              
            </IonFabButton>
          </IonButtons>
          
          <IonImg slot='start' class="pictogram-header" src={props.pictogram} ></IonImg>
          {props.classPictogram? <IonImg slot='start' class="pictogram-header" src={props.classPictogram}/> : null}
         
          <IonTitle>
            <IonRow class="ion-text-wrap">
              {props.name}
            </IonRow>            
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    );
}

export default Header;