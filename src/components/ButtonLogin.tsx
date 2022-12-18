import { IonGrid, IonButton, IonImg, IonText } from '@ionic/react';
import { MouseEventHandler } from 'react';
import './ButtonLogin.css';

interface ButtonProps { 
  href: MouseEventHandler;
  id?: string;
}

const ButtonLogin: React.FC<ButtonProps> = (props: ButtonProps) => {
 

  var ButtonElements = () => {
    return (
      <>
        <IonText class='large-text ion-text-wrap'>Iniciar Sesion</IonText>
      </>
    );
  }


  var ButtonContent = () => {    
      return (
        <ButtonElements/>
      );    
  }


  return (
    <IonButton color="secondary" class="" onClick={props.href} id={props.id} >
      <ButtonContent/>
    </IonButton>
  );
}

export default ButtonLogin;