import React, { useEffect, useState } from 'react';
import './Page.css';
import Pagination from './PaginationArray';

import { sendGetAllRequest, sendGetByIDRequest } from '../ApiMethods';
import { IonRow } from '@ionic/react';
import ButtonPictogram from '../components/ButtonPictogram';
import { RouteComponentProps } from 'react-router';
import KitchenOrder from './KitchenOrder';

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
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
 
  array = items.map(element => {
    return(
      <IonRow class='ion-justify-content-center'>
        <ButtonPictogram id={element['_id']} label={element['_name']['_text']} pictogram={element['_name']['_pictogram']} square={false} href={"/comanda/" + match.params.id_task + "/" + element['_id']} />
      </IonRow>
    )
  })

  return (
    <Pagination items={array} itemsPerPage={4} name={task['_due_date'] + " Elige Clase" } pictogram='https://api.arasaac.org/api/pictograms/9815?resolution=500&download=false'/>
  );
};

export default SelectClass;