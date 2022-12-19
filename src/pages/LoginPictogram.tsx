import './LoginPictogram.css';
import {IonCol, IonContent, IonGrid, IonImg, IonPage, IonRadio, IonRow, IonTitle} from '@ionic/react';
import Header from '../components/Header';
import ButtonLogin from '../components/ButtonLogin';


const LoginPictogram: React.FC = () => {

    var pictogram = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"

    return (
        <IonPage>
            <Header noHome={true} name="AppRendo"/>
            

                <IonGrid>
                    <IonRow class="row">
                        <IonCol>
                            <IonImg src={pictogram}></IonImg>
                        </IonCol>
                        <IonCol>
                            <IonTitle>Nombre de alumno</IonTitle>
                        </IonCol>
                    </IonRow>
                        

                    <IonRow class="row">
                    <IonGrid class='button-grid'>
                            <IonRow class="ion-justify-content-center">
                                    <IonCol size='auto'>
                                        <IonImg src={pictogram}></IonImg>
                                    </IonCol>
                                    <IonCol size='auto'>
                                        <IonImg src={pictogram}></IonImg>
                                    </IonCol>
                            </IonRow>
                            <IonRow class="ion-justify-content-center"> 
                                    <IonCol size='auto'>
                                        <IonImg src={pictogram}></IonImg>
                                    </IonCol>
                                    <IonCol size="auto">
                                        <IonImg src={pictogram}></IonImg>
                                    </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonRow>


                    <IonRow class="row">
                        <IonGrid class="blue-grid">
                            <IonRow class="ion-justify-content-around"> 
                                    <IonCol size='3'>
                                        <IonImg src={pictogram}></IonImg>
                                    </IonCol>
                                    <IonCol size="3">
                                        <IonImg src={pictogram}></IonImg>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <IonImg src={pictogram}></IonImg>
                                    </IonCol>
                                    <IonCol size="3">
                                        <IonImg src={pictogram}></IonImg>
                                    </IonCol>
                            </IonRow>
                        </IonGrid>                        
                    </IonRow>


                    <IonRow class="row">
                        <IonCol>
                            <ButtonLogin LoginPictogram></ButtonLogin>
                        </IonCol>                    
                    </IonRow>   
                </IonGrid>
                             
                      
        </IonPage>
    )
}

export default LoginPictogram;