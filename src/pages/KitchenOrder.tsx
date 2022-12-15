import './Page.css';
import CounterComponent from '../components/CounterComponent';
import { RouteComponentProps } from 'react-router';
import { sendGetAllRequest, sendGetByIDRequest, sendPutRequest } from '../ApiMethods';
import { useEffect, useState } from 'react';
import Pagination from './PaginationArray';
import { useHistory } from "react-router-dom";
import { TaskTypes } from '../globals';
import LoadingPage from './LoadingPage';
import Header from '../components/Header';

interface KitchenOrderPageProps
  extends RouteComponentProps<{
    id_task: string;
    id_class: string;
  }> {}

const KitchenOrder: React.FC<KitchenOrderPageProps> = ({match}) => {

  const [kitchenOrder, setkitchenOrder] = useState(null);
  const [classroom, setClassroom] = useState(null);
  const [details, setDetail] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)
  const ITEMS_PER_PAGE = 2;

  useEffect(() => {
      // * Obtengo la comanda correspondiente
    sendGetByIDRequest("kitchen_order/task", match.params.id_task).then(order => {
      setkitchenOrder(order);

      // * Obtengo la clase correspondiente
      sendGetByIDRequest("classroom", match.params.id_class).then(classroom => {
        setClassroom(classroom);  

        // * A partir de la Clase y la Comanda, obtengo sus details 
        // * (llevan los platos concatenados por lo que no hace falta hacer gets de los platos)
        let urlGetKitchenOrderDetail = "kitchen_order_detail/" + match.params.id_class + "/" + order['_id'];
        sendGetAllRequest(urlGetKitchenOrderDetail).then( detail => {
          setDetail(detail);
          setIsLoading(false);
        })

      })

    })

  }, [])

 

  var array : Array<JSX.Element> = [];
  if(isLoading) {
    // * AQUI IRA EL SPLASH DE CARGA
    return(
      <LoadingPage/>
    );
  }

  array = details.map((detail) => {
    sessionStorage.setItem("counter_" + detail['_id'], detail["_quantity"])
    var hr = <></>
    if (details.indexOf(detail) % 2 == 0 && details.indexOf(detail) != details.length - 1) {
      hr = <hr />
    }
    var pictogram : Array<string> = [];
    pictogram.push(detail['_dish']['_name']['_pictogram']);
    return (
      <>
        <div>
          <CounterComponent type={TaskTypes.Comanda} id={detail['_id']} label={detail['_dish']['_name']['_text']} pictograms={pictogram} />
        </div>
        {hr}
      </>
    );
  })


    // ***** SESSION

    const doneAction = () => {
      details.map((detail : any) => {
        var data = {
          "_quantity": sessionStorage.getItem("counter_" + detail['_id'])
        }
      
        sendPutRequest("kitchen_order_detail", detail['_id'], data ).then(() => {
          // * Resetear las sessiones de los contadores
          sessionStorage.removeItem("counter_" + detail['_id'])
        })
        
      })
    }
 
    // *****

  
  // * Definimos el header de la página para poder usarlo en el componente de la Paginación
  const header = <Header name={"La Comida " + classroom!['_name']['_text']} pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' />

  return (
    <Pagination items={array} itemsPerPage={ITEMS_PER_PAGE}  doneUrl={'/elige_clase/' + match.params.id_task} doneAction={doneAction} header={header}/>
  );

  
};

export default KitchenOrder;
