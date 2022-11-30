import React, { useEffect, useState } from 'react';
import './Page.css';
import Pagination from './PaginationArray';

import { sendGetAllRequest } from '../ApiMethods';
import { IonRow } from '@ionic/react';
import ButtonPictogram from '../components/ButtonPictogram';

const Tasks: React.FC = () => {

  const [ items, setItems ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    sendGetAllRequest("task").then(data => {
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

  var generateHref = (task : any) => {
    let href= "#"

    if(task["_type"] == "COMANDA"){
      href = "/elige_clase/" + task["_id"]
    }

    return href
  }

  var array : Array<JSX.Element> = items.map(task => {
    return(
      <IonRow class='ion-justify-content-center'>
        <ButtonPictogram id={task['_id']} label={task['_name']['_text']} pictogram={task['_name']['_pictogram']} square={false} href={generateHref(task)} />
      </IonRow>
    )
  })

  return (
    <Pagination items={array} itemsPerPage={4} name="Mis Tareas" pictogram='https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false' />
  );
};

export default Tasks;
