  import { IonButtons, IonHeader, IonTitle, IonToolbar, IonIcon, IonImg, IonRow, IonFabButton, IonButton } from '@ionic/react';
  import { homeOutline } from 'ionicons/icons';
  import './Header.css';

  interface HeaderProps {
    name: string; 
    pictogram?: string
    login: boolean
  }


const Header: React.FC<HeaderProps> = ( args: HeaderProps ) => {

  var ButtonHome = () => {
    if(args.login) {
      return (
        <>
        <IonButtons slot="start">
          <IonFabButton color="primary" href='/'>
            <IonIcon icon={homeOutline}></IonIcon>              
          </IonFabButton>
        </IonButtons>
        </>
      )
    }
  }

    return (
      <>
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
      </>
    );
}

export default Header;