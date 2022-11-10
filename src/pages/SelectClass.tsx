import React, { useEffect, useState } from 'react';
import './Page.css';
import Pagination from './PaginationArray';

import { API_URL } from '../globals';
import axios from 'axios';
import { IonRow } from '@ionic/react';
import ButtonPictogram from '../components/ButtonPictogram';

const SelectClass: React.FC = () => {
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

  var array : Array<JSX.Element> = [];

  useEffect(() => {
    sendGetRequest("classroom").then(data => {
      setItems(data);
      setIsLoading(false);
    })
  }, [])

  if(isLoading) {
    // * AQUI IRA EL SPLASH DE CARGA
    return(
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
 
  array = items.map(element => {
    return(
      <IonRow class='ion-justify-content-center'>
        <ButtonPictogram id={element['_id']} label={element['_accessible_element']['_text']} pictogram={element['_accessible_element']['_pictogram']} square={false} href={"/comanda/" + element['_id']} />
      </IonRow>
    )
  })

  return (
    <Pagination items={array} itemsPerPage={4} name="Elige Clase" pictogram='https://api.arasaac.org/api/pictograms/9815?resolution=500&download=false'/>
  );
};

export default SelectClass;
