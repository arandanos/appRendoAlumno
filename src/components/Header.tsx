  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRippleEffect, IonImg, IonRow, IonCol, IonFabList, IonFabButton, IonFab } from '@ionic/react';
import { useParams } from 'react-router';
  
  import { useLocation } from 'react-router-dom';
  import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, homeOutline, homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
  import './Header.css';
  
const Header: React.FC<{ name: string; pictogram:string }> = ( props: {name: string, pictogram: string} ) => {
    // const { name } = useParams<>();
  
    return (
        <IonHeader>
        <IonToolbar color="secondary" class='center-content'>
          
          <IonButtons slot="start">
            {/* <IonMenuButton /> */}
            <IonFabButton color="primary" href='/page/Home'>
              <IonIcon  icon={homeOutline}></IonIcon>              
            </IonFabButton>
          </IonButtons>
          
          <IonImg slot='start' class="pictogram-header" src={props.pictogram} ></IonImg>
         
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