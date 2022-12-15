import { IonBackdrop, IonCard, IonCardTitle, IonContent, IonGrid, IonPage, IonSpinner } from "@ionic/react";
import "./Page.css"
import "./LoadingPage.css"

const LoadingPage : React.FC = () => {

    return (
        <IonPage>
            <IonContent>
                <IonGrid class="button-grid center-content">
                    <IonCard color="secondary" class="ion-justify-content-around loading">
                        <IonSpinner name="lines-sharp" color="primary"></IonSpinner>
                        <IonCardTitle>Cargando datos...</IonCardTitle>
                    </IonCard>
                </IonGrid>

            </IonContent>
       
        </IonPage>
    );

}

export default LoadingPage;