import './Page.css';
import CounterComponent from '../components/CounterComponent';
import { Redirect, RouteComponentProps } from 'react-router';
import { sendGetAllRequest, sendGetByIDRequest, sendPutRequest } from '../ApiMethods';
import { useEffect, useState } from 'react';
import Pagination from './PaginationArray';
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  
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
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  array = details.map((detail) => {
    sessionStorage.setItem("counter_" + detail['_id'], detail["_quantity"])
    var hr = <></>
    if (details.indexOf(detail) % 2 == 0 && details.indexOf(detail) != details.length - 1) {
      hr = <hr />
    }
    return (
      <>
        <div>
          <CounterComponent id={detail['_id']} label={detail['_dish']['_name']['_text']} pictogram={detail['_dish']['_name']['_pictogram']} />
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

  return (
    <Pagination items={array} itemsPerPage={ITEMS_PER_PAGE} name={"La Comida " + classroom!['_name']['_text']} pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' doneUrl={'/elige_clase/' + match.params.id_task} doneAction={doneAction} />
  );

  
};

export default KitchenOrder;
