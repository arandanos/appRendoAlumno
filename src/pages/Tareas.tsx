import {  IonContent, IonPage } from '@ionic/react';
import './Page.css';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
      
const Tareas: React.FC = () => {

  // const [ clase, setClase ] = useState(null)
  return (
    <IonPage>
      <Header name="Tareas" pictogram='https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false'/>
      <IonContent fullscreen>
      
        {/*  NO IMPLEMENTAR AUN - CREAR NUEVA PAGINA PARA COMANDA DE COCINA */}
        {/* <ButtonPictogram label='Comanda' pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' square={false} href="#"/> */}
      </IonContent>

      <BottomNav/>
      
    </IonPage>
  );
};

export default Tareas;