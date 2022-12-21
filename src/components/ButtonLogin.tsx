import { IonGrid, IonButton, IonImg, IonText, IonIcon } from '@ionic/react';
import { MouseEventHandler } from 'react';
import './ButtonLogin.css';
import { checkmarkOutline } from 'ionicons/icons';

interface ButtonProps { 
  onClick?: MouseEventHandler;
  id?: string;
  LoginPictogram?: boolean
  href?: string
  
}

const ButtonLogin: React.FC<ButtonProps> = (props: ButtonProps) => {


  var ButtonElementsPictogram = () => {
    return (
      <>
        <IonButton color="success" class="buttonLoginPicto" href={props.href} onClick={props.onClick} id={props.id} >
          <IonIcon icon={checkmarkOutline}></IonIcon>
        </IonButton>
      </>
    );
  }

  var ButtonElementsPIN = () => {
    return (
      <>
        <IonButton color="secondary" class="buttonLogin"  href={props.href} onClick={props.onClick} id={props.id} >
          <IonText class='large-text ion-text-wrap'>Iniciar Sesión</IonText>
        </IonButton>
      </>
    );
  }

  var ButtonContent = () =>{
    if (props.LoginPictogram) {
      return (        
          <ButtonElementsPictogram/>        
      );
    } else {
      return (
          <ButtonElementsPIN/>
      );
    }
  }


  return (
    <ButtonContent></ButtonContent>
  );
}

export default ButtonLogin;