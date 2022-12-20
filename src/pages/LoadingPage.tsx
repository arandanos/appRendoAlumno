import { IonBackdrop, IonCard, IonCardTitle, IonContent, IonFab, IonFabButton, IonGrid, IonIcon, IonPage, IonSpinner } from "@ionic/react";
import "./Page.css"
import "./LoadingPage.css"
import { homeOutline } from "ionicons/icons";
import Header from "../components/Header";

const LoadingPage : React.FC = () => {

    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <IonGrid class="button-grid grid-with-bottom-nav center-content">
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