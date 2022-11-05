import './Page.css';
import Header from '../components/Header';
import ButtonPictogram from '../components/ButtonPictogram';
import BottomNav from '../components/BottomNav';
import { API_URL } from '../variables';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonGrid, IonRow } from '@ionic/react';

const SelectClass: React.FC = () => {

  const [ clases, setClases ] = useState([])
  const [ currentPage, setCurrentPage ] = useState(0);
  const [itemsPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(0);

  const sendGetRequest = () => {

    return axios({
      url: API_URL + "classroom",
      method: 'get'
    }).then(response => {
  
      console.log(response.data);
      return response.data;
    })
  };

  useEffect(() =>{
    sendGetRequest().then(data => {
      setTotalPages(Math.ceil(data.length / itemsPerPage))
      setClases(data.slice(currentPage*itemsPerPage, currentPage*itemsPerPage + itemsPerPage))
    })
    
  }, [currentPage])

  const handleNextClick = () => {
    if((currentPage+1) > totalPages-1){
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage+1);
    }

  };
  const handlePrevClick = () => {
    if((currentPage-1) < 0){
      setCurrentPage(totalPages-1);
    } else {
      setCurrentPage(currentPage-1);
    }

  };

  return (
    <IonPage>
      <Header name="Elige Clase" pictogram='https://api.arasaac.org/api/pictograms/9815?resolution=500&download=false'/>
      <IonContent fullscreen>
        {/* <IonTitle>Elige una clase en la que vas a realizar la comanda realizar la comanda.</IonTitle> */}
        
        <IonGrid class='button-grid grid-with-bottom-nav'>
          {
            clases.map(clase => {
              return (
                <IonRow class='ion-justify-content-center'>
                  <ButtonPictogram label={clase['_accessible_element']['_text']} pictogram={clase['_accessible_element']['_pictogram']} square={false} href="#" />
                </IonRow>
              );
            })
          }
          
        </IonGrid>
      </IonContent>

      <BottomNav prev={handlePrevClick} next={handleNextClick}/>
      
    </IonPage>
  );
};

export default SelectClass;
