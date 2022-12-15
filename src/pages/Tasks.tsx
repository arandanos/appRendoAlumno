import React, { useEffect, useState } from 'react';
import './Page.css';
import Pagination from './PaginationArray';

import { sendGetAllRequest } from '../ApiMethods';
import { IonRow } from '@ionic/react';
import ButtonPictogram from '../components/ButtonPictogram';
import LoadingPage from './LoadingPage';
import Header from '../components/Header';

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
   return <LoadingPage></LoadingPage>
  }



  var generateHref = (task : any) => {
    let href= "#"

    if(task["_type"] == "COMANDA"){
      href = "/elige_clase/" + task["_id"]
    }
    else if (task["_type"] == "MATERIAL") {
      href = '/material/' + task["_id"]
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

  // * Definimos el header de la página para poder usarlo tanto en la página de carga como en el componente de la Paginación
  const header = <Header name="Mis tareas" pictogram="https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false" />;

  return (
    <Pagination items={array} itemsPerPage={4} header={header} />
  );
};

export default Tasks;
