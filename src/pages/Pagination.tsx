import { useEffect, useState } from 'react';
import { API_URL } from '../globals';
import './Page.css';
import axios from 'axios';
import { IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import ButtonPictogram from '../components/ButtonPictogram';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

interface PaginationProps {
  itemsPerPage: number;
  name: string;
  pictogram: string;
  url: string;
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
    
  const [ items, setItems ] = useState([])
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ itemsPerPage ] = useState(props.itemsPerPage);
  const [ totalPages, setTotalPages ] = useState(0);

  const sendGetRequest = () => {

    return axios({
      url: API_URL + props.url,
      method: 'get'
    }).then(response => {
  
      console.log(response.data);
      return response.data;
    })
  };

  useEffect(() =>{
    sendGetRequest().then(data => {
      setTotalPages(Math.ceil(data.length / itemsPerPage))
      setItems(data.slice(currentPage*itemsPerPage, currentPage*itemsPerPage + itemsPerPage))
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


  var href = "#"
  if (props.url == "classroom")
    href = "/comanda/"

  

  return (
    
    <IonPage>
      <Header name={props.name} pictogram={props.pictogram}/>
      <IonContent fullscreen>
        {/* <IonTitle>Elige una clase en la que vas a realizar la comanda realizar la comanda.</IonTitle> */}
        
        <IonGrid class='button-grid grid-with-bottom-nav'>
          {items.map(element => {
              return (
                  <IonRow class='ion-justify-content-center'>
                      <ButtonPictogram id={element['_id']} label={element['_accessible_element']['_text']} pictogram={element['_accessible_element']['_pictogram']} square={false} href={href + element["_id"]}  />
                  </IonRow>
              );
          })}
          
        </IonGrid>
      </IonContent>
      <BottomNav prev={handlePrevClick} next={handleNextClick}/>
      
    </IonPage>
      
  );
};

export default Pagination;