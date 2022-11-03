import { IonGrid, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonRippleEffect, IonImg, IonRow, IonCol, IonFabList, IonFabButton, IonFab, IonText } from '@ionic/react';
import { useParams } from 'react-router';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, homeOutline, homeSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './ButtonPictogram.css';

const ButtonPictogram: React.FC<{ label: string; pictogram: string, square: boolean, href: string }> = (props: { label: string, pictogram: string, square: boolean, href: string }) => {
  // const { name } = useParams<>();

  var ButtonElements = () => {
    return (
      <>
        <IonImg class="pictogram-on-button" src={props.pictogram} />
        <IonText class='large-text'>{props.label}</IonText>
      </>
    );
  }


  var ButtonContent = () => {
    if (props.square) {
      return (
        <IonGrid>
          <ButtonElements/>
        </IonGrid>
      );
    } else {
      return (
        <ButtonElements/>
      );
    }
  }


  return (
    <IonButton color="secondary" class={props.square ? "button-pictogram-square" : "button-pictogram"} href={props.href}>
      <ButtonContent/>
    </IonButton>
  );
}

export default ButtonPictogram;