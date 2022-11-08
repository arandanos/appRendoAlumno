import {  IonContent, IonPage } from '@ionic/react';
import './Page.css';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Pagination from './Pagination';
      
const Tareas: React.FC = () => {

  return (
    <Pagination itemsPerPage={4} name="Mis Tareas" pictogram="https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false" url='task'/>
  );
};

export default Tareas;