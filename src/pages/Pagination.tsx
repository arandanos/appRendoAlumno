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

  const sendGetRequest = (url : string) => {

    return axios({
      url: API_URL + url,
      method: 'get'
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  };

  useEffect(() =>{
    sendGetRequest(props.url).then(data => {
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


  const renderItems = () => {
    return items.map(element => {

        if (props.url == "dish"){
          var hr = <></>
          if (element != items.at(items.length - 1)) {
            hr = <hr/>
          }
          return(
            <>
              <div>
                {/* <CounterComponent id={element['_id']} label={element['_accessible_element']['_text']} pictogram={element['_accessible_element']['_pictogram']}/> */}
              </div>
              {hr}
            </>
          );
        } else {
            return (
              <IonRow class='ion-justify-content-center'>
                  <ButtonPictogram id={element['_id']} label={element['_name']['_text']} pictogram={element['_name']['_pictogram']} square={false} href={href + element["_id"]}  />
              </IonRow>
          );
        }
        
    })
  }

  const bottomNav = () => {
    if(props.url == "dish")
      return <BottomNav prev={handlePrevClick} done="/elige_clase" next={handleNextClick}/>
    return <BottomNav prev={handlePrevClick} next={handleNextClick}/>
  }

  return (
    <IonPage>
      <Header name={props.name} pictogram={props.pictogram}/>
      <IonContent fullscreen>
        {/* <IonTitle>Elige una clase en la que vas a realizar la comanda realizar la comanda.</IonTitle> */}
        <IonGrid class='button-grid grid-with-bottom-nav'>
        {renderItems()}
          
        </IonGrid>
        {bottomNav()}
      </IonContent>
    
    </IonPage>
      
  );
};

export default Pagination;