import React, { useEffect, useState } from 'react';
import './Page.css';
import Pagination from './PaginationArray';

import { sendGetAllRequest, sendGetByIDRequest } from '../ApiMethods';
import { IonRow } from '@ionic/react';
import ButtonPictogram from '../components/ButtonPictogram';
import { RouteComponentProps } from 'react-router';
import KitchenOrder from './KitchenOrder';
import LoadingPage from './LoadingPage';
import Header from '../components/Header';

interface SelectClassProps extends RouteComponentProps<{
  id_task: string;
}>{}

const SelectClass: React.FC<SelectClassProps> = ({match}) => {
  const [ items, setItems ] = useState([])
  const [ task, setTask ] = useState<any>([])
  const [ isLoading, setIsLoading ] = useState(true)

  var array : Array<JSX.Element> = [];

  useEffect(() => {
    sendGetByIDRequest("task", match.params.id_task).then(data => {
      setTask(data)
    })
    sendGetAllRequest("classroom").then(data => {
      setItems(data);
      setIsLoading(false);
    })
  }, [])

  if(isLoading) {
    // * AQUI IRA EL SPLASH DE CARGA
    return(
      <LoadingPage/>
    );
  }

  array = items.map(element => {
    return(
      <IonRow class='ion-justify-content-center'>
        <ButtonPictogram id={element['_id']} label={element['_name']['_text']} pictogram={element['_name']['_pictogram']} square={false} href={"/comanda/" + match.params.id_task + "/" + element['_id']} />
      </IonRow>
    )
  })


  // * Definimos el header de la página para poder usarlo en el componente de la Paginación
  const header = <Header name={task['_due_date'] + " Elige Clase"} pictogram='https://api.arasaac.org/api/pictograms/9815?resolution=500&download=false'></Header>

  return (
    <Pagination items={array} itemsPerPage={4} header={header}/>
  );
};

export default SelectClass;