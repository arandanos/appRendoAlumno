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

  const [classroom, setClassroom] = useState({});
  const [dishes, setDishes] = useState([]);
  const [name, setName] = useState("");
  const [ isLoading, setIsLoading ] = useState(true)

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

  
  useEffect(() => {
      sendGetClassRequest().then(data => {
      setClassroom(data);  
      setName("La Comida " + data['_accessible_element']['_text']) 
      sendGetDishRequest().then(data => {
        setDishes(data)
        setIsLoading(false)
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

  array =  dishes.map(element => {
    var hr = <></>
    if (element != dishes.at(dishes.length - 1)) {
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


  return (

    <Pagination items={array} itemsPerPage={2} name={name} pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' done_url='/elige_clase' />

    // <Pagination itemsPerPage={4} name="La Comanda de la Clase" pictogram="https://api.arasaac.org/api/pictograms/2398?resolution=500&download=false" url=''/>
  );

  
};

export default KitchenOrder;
