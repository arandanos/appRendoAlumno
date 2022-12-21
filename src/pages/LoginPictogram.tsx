import './LoginPictogram.css';
import {IonCol, IonContent, IonGrid, IonImg, IonPage, IonRadio, IonRow, IonTitle} from '@ionic/react';
import Header from '../components/Header';
import ButtonLogin from '../components/ButtonLogin';
import { useState } from 'react';
import { stringify } from 'querystring';

const LoginPictogram: React.FC = () => {
  

    const pictograms  = [

        {
            id: 1,
            pictogram: "https://api.arasaac.org/api/pictograms/7202?resolution=500&download=false", 
        },

        {
            id: 2,
            pictogram: "https://api.arasaac.org/api/pictograms/7114?resolution=500&download=false",
        },

        {
            id: 3,
            pictogram: "https://api.arasaac.org/api/pictograms/2490?resolution=500&download=false",
        },

        {
            id: 4,
            pictogram: "https://api.arasaac.org/api/pictograms/2343?resolution=500&download=false",
        }
    ]   

    


    const [images, setImages] = useState(pictograms);



    

    return (
        <IonPage>
            <Header pictogram="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" name="Nombre de alumno"/>
            

                <IonGrid>             
                        

                    <IonRow class="row-students">
                    <IonGrid class='button-grid'>
                            <IonRow class="ion-justify-content-evenly row">
                                    <IonCol size='auto'>
                                        <IonImg src={images[0]['pictogram']}  ></IonImg>
                                    </IonCol>
                                    <IonCol size='auto'>
                                        <IonImg src={images[1]['pictogram']} ></IonImg>
                                    </IonCol>
                            </IonRow>
                            <IonRow class="ion-justify-content-evenly row"> 
                                    <IonCol size='auto'>
                                        <IonImg src={images[2]['pictogram']} ></IonImg>
                                    </IonCol>
                                    <IonCol size="auto">
                                        <IonImg src={images[3]['pictogram']} ></IonImg>
                                    </IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonRow>


                    <IonRow class="row">
                        <IonGrid class="blue-grid">
                            <IonRow class="ion-justify-content-around"> 
                                    <IonCol size='3'>
                                        <IonImg src={images[0]['pictogram']}></IonImg>
                                    </IonCol>
                                    <IonCol size="3">
                                        <IonImg src={images[1]['pictogram']}></IonImg>
                                    </IonCol>
                                    <IonCol size='3'>
                                        <IonImg src={images[2]['pictogram']}></IonImg>
                                    </IonCol>
                                    <IonCol size="3">
                                        <IonImg src={images[3]['pictogram']}></IonImg>
                                    </IonCol>                                 
                                                                    

                            </IonRow>
                        </IonGrid>                        
                    </IonRow>


                    <IonRow class="row">
                        <IonCol>
                            <ButtonLogin LoginPictogram href="/home" ></ButtonLogin>
                        </IonCol>                    
                    </IonRow>   
                </IonGrid>
                             
                      
        </IonPage>
    )
}

export default LoginPictogram;


