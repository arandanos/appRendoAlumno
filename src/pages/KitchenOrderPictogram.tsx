import './Page.css';
import { RouteComponentProps } from 'react-router';
import { sendGetAllRequest, sendGetByIDRequest, sendPutRequest } from '../ApiMethods';
import { useEffect, useState } from 'react';
import Pagination from './PaginationArray';
import { useHistory } from "react-router-dom";
import React from 'react';
import { IonCol, IonGrid, IonImg, IonLabel, IonRow, IonSegment, IonSegmentButton } from '@ionic/react';
import ButtonPictogram from '../components/ButtonPictogram';
import Header from '../components/Header';

interface KitchenOrderPageProps
  extends RouteComponentProps<{
    id_task: string;
    id_class: string;
  }> {}

const KitchenOrderPictogram: React.FC<KitchenOrderPageProps> = ({match}) => {

  const [kitchenOrder, setkitchenOrder] = useState(null);
  const [classroom, setClassroom] = useState(null);
  const [details, setDetail] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  let [rechargedCoins, setRechargedCoins] = React.useState(0);
  let number = 0;
  let a: number;
  const ITEMS_PER_PAGE = 1;
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

  function sum(sum: number) {
    number = sum;
    console.log(number);
  };

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
    hr = <hr />

    var pictogram : Array<string> = [];
    pictogram.push(detail['_dish']['_name']['_pictogram']);
    return (
      <>
        <div>
          {/* <CounterComponent type={TaskTypes.Comanda} id={detail['_id']} label={detail['_dish']['_name']['_text']} pictograms={pictogram} /> */}
          <IonRow class='ion-justify-content-evenly'>
            {pictogram.map(pictogram => {
              return  <IonCol class='fit-width'>
                        <IonImg src={pictogram} class="big-pictogram" />
                      </IonCol>
            })}
          </IonRow>
        </div>
        {hr}
        <IonSegment value="buttons">
          <IonGrid class='button-grid'>

            <IonRow class='ion-justify-content-evenly'>
              <IonCol class='fit-width'>
                <IonSegmentButton value="1" class="segment-button">
                  {/* <IonImg class='fit-width' src="https://api.arasaac.org/api/pictograms/7291?resolution=500&download=false"></IonImg> */}
                  <IonLabel><ButtonPictogram pictogram='https://api.arasaac.org/api/pictograms/7291?resolution=500&download=false' square={false} number={true} /></IonLabel>
                </IonSegmentButton>
              </IonCol>

              <IonCol class='fit-width'>
                <IonSegmentButton value="2" class="segment-button">
                  <IonLabel><ButtonPictogram pictogram='https://api.arasaac.org/api/pictograms/7027?resolution=500&download=false' square={false} number={true} /></IonLabel>
                </IonSegmentButton>
              </IonCol>
              
              <IonCol class='fit-width'>
                <IonSegmentButton value="3" class="segment-button">
                  <IonLabel><ButtonPictogram pictogram='https://api.arasaac.org/api/pictograms/7283?resolution=500&download=false' square={false} number={true} /></IonLabel>
                </IonSegmentButton>
              </IonCol>
            </IonRow>

            <IonRow class='ion-justify-content-evenly'>
              <IonCol class='fit-width'>
                <IonSegmentButton value="4" class="segment-button">
                  <IonLabel>
                    <ButtonPictogram pictogram='https://api.arasaac.org/api/pictograms/7005?resolution=500&download=false' square={true} number={true} />
                  </IonLabel>
                </IonSegmentButton>
              </IonCol>

              <IonCol class='fit-width'>
                <IonSegmentButton value="5" class="segment-button">
                  <IonLabel><ButtonPictogram pictogram='https://api.arasaac.org/api/pictograms/6979?resolution=500&download=false' square={true} number={true} /></IonLabel>
                </IonSegmentButton>
              </IonCol>

              <IonCol class='fit-width'>
                <IonSegmentButton value="6" class="segment-button">
                  <IonLabel><ButtonPictogram pictogram='https://api.arasaac.org/api/pictograms/7241?resolution=500&download=false' square={true} number={true} /></IonLabel>
                </IonSegmentButton>
              </IonCol>
            </IonRow>
            
          </IonGrid>
        </IonSegment>
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
    <Pagination items={array} itemsPerPage={ITEMS_PER_PAGE} classPictogram={classroom!['_name']['_pictogram']} pictogram='https://api.arasaac.org/api/pictograms/4610?resolution=500&download=false' doneUrl={'/elige_clase/' + match.params.id_task} doneAction={doneAction} />
  );

  
};

export default KitchenOrderPictogram;





