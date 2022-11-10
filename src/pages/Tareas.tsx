import React, { useEffect, useState } from 'react';
import './Page.css';
import Pagination from './PaginationArray';

import { API_URL } from '../globals';
import axios from 'axios';
import { IonRow } from '@ionic/react';
import ButtonPictogram from '../components/ButtonPictogram';

const Tareas: React.FC = () => {

  const [ items, setItems ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  

  const sendGetRequest = (url : string) => {

    return axios({
      url: API_URL + url,
      method: 'get'
    }).then(response => {
  
      console.log(response.data);
      return response.data;
    })
  };

  useEffect(() => {
    sendGetRequest("task").then(data => {
      setItems(data)
      setIsLoading(false)
    })
  }, [])

  var array : Array<JSX.Element> = [];
  if(isLoading) {
    // * AQUI IRA EL SPLASH DE CARGA
    return(
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  var array : Array<JSX.Element> = items.map(element => {
    return(
      <IonRow class='ion-justify-content-center'>
        <ButtonPictogram id={element['_id']} label={element['_accessible_element']['_text']} pictogram={element['_accessible_element']['_pictogram']} square={false} href={"#"} />
      </IonRow>
    )
  })

  return (
    <Pagination items={array} itemsPerPage={4} name="Mis Tareas" pictogram='https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false' />
  );
};

export default Tareas;
