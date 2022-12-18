import './LoginPin.css';
import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonItem, IonLabel, IonPage, IonRow, IonTitle } from '@ionic/react';
import Header from '../components/Header';
import StyledInput from '../components/StyledInput';
import { lockClosedOutline } from 'ionicons/icons';
import ButtonLogin from '../components/ButtonLogin';

const LoginPassword: React.FC = () => {
    return (
        <IonPage>
            <Header name="AppRendo"/>
            <IonContent fullscreen>
                
                <IonGrid class="grid-with-button width-90">
                    <IonRow class="row imgRow">
                        <IonCol>
                            <IonImg src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"></IonImg>
                        </IonCol>                    
                    </IonRow>

                    <IonRow class="row ion-text-center">
                        <IonCol>
                            <IonTitle size="small">Nombre de alumno</IonTitle>
                        </IonCol>                         
                    </IonRow>

                    <IonRow class="row">
                        <IonCol>
                            <IonItem>
                                <IonLabel>PIN</IonLabel>
                                <StyledInput placeholder='PIN' iconStart={lockClosedOutline}></StyledInput>                                
                            </IonItem>
                            
                        </IonCol>                    
                    </IonRow>

                    <IonRow class="row">
                        <IonCol>
                            <ButtonLogin></ButtonLogin>
                        </IonCol>                    
                    </IonRow>
                    
                </IonGrid>
            </IonContent>
            
        </IonPage>
    )
}

export default LoginPassword;