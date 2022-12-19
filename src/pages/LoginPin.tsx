import './LoginPin.css';
import {IonContent, IonPage} from '@ionic/react';
import Header from '../components/Header';
import Login from '../components/Login';

const LoginPassword: React.FC = () => {

    var pictogram = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"

    return (
        <IonPage>
            <Header noHome={false} name="AppRendo"/>
            <IonContent fullscreen>
                <Login name="Nombre de usuario" pictogram={pictogram} placeholder="PIN"></Login>                
            </IonContent>            
        </IonPage>
    )
}

export default LoginPassword;