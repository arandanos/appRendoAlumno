import { IonGrid, IonButton, IonImg, IonText } from '@ionic/react';
import './ButtonPictogram.css';

interface ButtonProps { 
  label: string;
  pictogram?: string;
  square: boolean;
  href: string;
  id?: string;
}

const ButtonPictogram: React.FC<ButtonProps> = (props: ButtonProps) => {
  // const { name } = useParams<>();

  var ButtonElements = () => {
    return (
      <>
        <IonImg class="pictogram-on-button" src={props.pictogram} />
        <IonText class='large-text ion-text-wrap'>{props.label}</IonText>
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
    <IonButton color="secondary" class={props.square ? "button-pictogram-square" : "button-pictogram"} href={props.href} id={props.id}>
      <ButtonContent/>
    </IonButton>
  );
}

export default ButtonPictogram;