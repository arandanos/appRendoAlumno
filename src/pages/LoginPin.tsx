import './Page.css';
import { IonButton, IonGrid, IonImg, IonPage, IonRow, IonTitle } from '@ionic/react';
import Header from '../components/Header';
import StyledInput from '../components/StyledInput';
import { lockClosedOutline } from 'ionicons/icons';

const LoginPassword: React.FC = () => {
    return (
        <IonPage>
            <Header name="AppRendo"/>

            <IonGrid>
                <IonRow>
                    <IonImg slot='start' class="pictogram-header" src="https://i.imgur.com/iyKqBdt.jpeg"/>
                </IonRow>

                <IonRow>
                    <IonTitle size="small">Nombre de alumno</IonTitle>     
                </IonRow>

                <IonRow>
                    <StyledInput label="PIN" placeholder='PIN' iconStart={lockClosedOutline}></StyledInput>
                </IonRow>

                <IonRow>
                    <IonButton></IonButton>
                </IonRow>
                
            </IonGrid>
        </IonPage>
    )
}

export default LoginPassword;