import { IonTitle, IonImg, IonRow, IonCol, IonGrid, IonItem, IonLabel, IonIcon, IonInput, IonList } from '@ionic/react';
import { briefcaseOutline, lockClosedOutline } from 'ionicons/icons';
import ButtonLogin from './ButtonLogin';
import './Login.css';
import StyledInput from './StyledInput';

interface LoginProps {
  name: string; 
  pictogram: string;  
  placeholder: string;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {

  return (
    <IonGrid class="grid-with-button width-90">
    <IonRow class="row imgRow">
        <IonCol>
            <IonImg src={props.pictogram}></IonImg>
        </IonCol>                    
    </IonRow>

    <IonRow class="row ion-text-center">
        <IonCol>
            <IonTitle size="small">{props.name}</IonTitle>
        </IonCol>                         
    </IonRow>                    

    <IonRow class="row">
        <IonRow class="label">
            <IonCol>
                <IonLabel>{props.placeholder}</IonLabel>
            </IonCol>                        
        </IonRow>

        <IonRow>
            <IonCol>
                <IonItem>                                
                    <StyledInput placeholder={props.placeholder} iconStart={lockClosedOutline}></StyledInput>                                
                </IonItem>                            
            </IonCol>
        </IonRow>
                               
    </IonRow>

    <IonRow class="row">
        <IonCol>
            <ButtonLogin></ButtonLogin>
        </IonCol>                    
    </IonRow>
    
    </IonGrid>
  );
}

export default Login;