import './Page.css';
import { IonPage } from '@ionic/react';
import Header from '../components/Header';

const LoginPassword: React.FC = () => {
    return (
        <IonPage>
            <Header name="AppRendo" login={true}/>
    </IonPage>
    )
}

export default LoginPassword;