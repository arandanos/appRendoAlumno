import './Page.css';
import { IonButton, IonCol, IonContent, IonGrid, IonImg, IonPage } from '@ionic/react';
import Header from '../components/Header';
import StyledInput from '../components/StyledInput';
import ButtonPictogram from '../components/ButtonPictogram';
import { lockClosedOutline } from 'ionicons/icons';

const LoginPassword: React.FC = () => {
    return (
        <IonPage>
            <Header name="AppRendo" homeButton={"n"}/>

            <IonContent fullscreen>
                <IonGrid class="grid-with-button width-90">  
                    <IonButton color="secondary" class='button-pictogram button-grid pictogram-on-button'>
                        <IonImg src='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false'></IonImg>
                    </IonButton> 
                    <StyledInput label="Contraseña" iconStart={lockClosedOutline}/>
                    
                    <IonButton class="width-100" color="secondary" href="#">Iniciar Sesión</IonButton>
                </IonGrid>

            </IonContent>
        </IonPage>
    )
}

export default LoginPassword;