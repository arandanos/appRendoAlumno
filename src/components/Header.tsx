import { IonButtons, IonHeader, IonTitle, IonToolbar, IonIcon, IonImg, IonRow, IonFabButton } from '@ionic/react';
  import { homeOutline } from 'ionicons/icons';
  import './Header.css';

  interface HeaderProps {
    name?: string; 
    pictogram?: string;
    classPictogram?: string;
    noHome?: boolean
  }
  
const Header: React.FC<HeaderProps> = ( props: HeaderProps ) => {

    return (
        <IonHeader>
        <IonToolbar color="secondary" class='center-content'>          

          {props.noHome? 
            null
          : <IonButtons slot="start">
              <IonFabButton color="primary" href='/'>
                <IonIcon icon={homeOutline}></IonIcon>                            
              </IonFabButton>
            </IonButtons> }
          
          {props.pictogram? <IonImg slot='start' class="pictogram-header" src={props.pictogram} ></IonImg> : null }          
          {props.classPictogram? <IonImg slot='start' class="pictogram-header" src={props.classPictogram}/> : null}
         
          

          {props.noHome? <IonTitle class="ion-text-center">            
            <IonRow class="ion-text-wrap title">
              {props.name}
            </IonRow>            
          </IonTitle>
          : <IonTitle size="large" class="ion-text-center">            
              <IonRow class="ion-text-wrap">
                {props.name}
              </IonRow>            
            </IonTitle>}

        </IonToolbar>
      </IonHeader>
    );
}

export default Header;