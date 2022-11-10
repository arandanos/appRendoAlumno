import { IonPage, IonContent, IonRow} from '@ionic/react';
import Header from '../components/Header';
import './Page.css';
import './KitchenOrder.css';
import BottomNav from '../components/BottomNav';
import CounterComponent from '../components/CounterComponent';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';
import { API_URL } from '../globals';
import { useEffect, useState } from 'react';
import Pagination from './PaginationArray';
import ButtonPictogram from '../components/ButtonPictogram';
interface KitchenOrderPageProps
  extends RouteComponentProps<{
    id_clase: string;
  }> {}

const KitchenOrder: React.FC<KitchenOrderPageProps> = ({match}) => {

  const [classroom, setClassroom] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [detail, setDetail] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true)
  const ITEMS_PER_PAGE = 2;


  const sendGetClassRequest = () => {

    return axios({
      url: API_URL + "classroom/" + match.params.id_clase,
      method: 'get'
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  };
  
  const sendGetDishRequest = () => {

    return axios({
      url: API_URL + "dish",
      method: 'get'
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  };
  const sendGetDetailhRequest = () => {

    return axios({
      url: API_URL + "kitchen_order_detail",
      method: 'get'
    }).then(response => {
      console.log(response.data);
      return response.data;
    })
  };
  
  useEffect(() => {
      sendGetClassRequest().then(data => {
      setClassroom(data);  
      sendGetDishRequest().then(data => {
        setDishes(data)
        sendGetDetailhRequest().then(data => {
          setDetail(data)
          setIsLoading(false)
        })
      }) 
    })
  }, [])

  var array : Array<JSX.Element> = [];
  var counters : Array<number> = [];
  if(isLoading) {
    // * AQUI IRA EL SPLASH DE CARGA
    return(
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  detail.map(detail => {
    sessionStorage.setItem("counter_" + detail["_dish"], detail["_quantity"])
  })

  array =  dishes.map(element => {
    var hr = <></>
    if (dishes.indexOf(element) % 2 == 0 && dishes.indexOf(element) != dishes.length - 1) {
      hr = <hr />
    }
    return (
      <>
        <div>
          <CounterComponent id={element['_id']} label={element['_accessible_element']['_text']} pictogram={element['_accessible_element']['_pictogram']} />
        </div>
        {hr}
      </>
    );
  })

    // ***** SESSION

    const sendPutDish = (id : string, data : {}) => {
      return axios({
        url: API_URL + "kitchen_order_detail/" + id,
        method: 'put',
        data: data
      }).then(response => {
        console.log(response.data);
        return response.data;
      })
    }

    const doneAction = () => {
      dishes.map(dish => {
        var data = {
          "_quantity": sessionStorage.getItem("counter_" + dish["_id"])
        }
        sendPutDish(dish["_id"], data )
      })
    }
 
    // *****

  return (
    <Pagination items={array} itemsPerPage={ITEMS_PER_PAGE} name={"La Comida " + classroom!['_accessible_element']['_text']} pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' doneUrl='/elige_clase' doneAction={doneAction} />
  );

  
};

export default KitchenOrder;
