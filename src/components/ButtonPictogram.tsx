import { IonGrid, IonButton, IonImg, IonText } from '@ionic/react';
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
        <IonGrid class='button-grid'>
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