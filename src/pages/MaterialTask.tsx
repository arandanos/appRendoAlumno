import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { sendGetByIDRequest, sendPutRequest } from "../ApiMethods";
import CounterComponent from "../components/CounterComponent";
import Pagination from "./PaginationArray";
import { TaskTypes } from "../globals";
import { IonCard, IonImg, IonCardTitle } from "@ionic/react";
import LoadingPage from "./LoadingPage";
import Header from "../components/Header";

interface MaterialTaskProps extends RouteComponentProps<{
    id_task: string;
}>{}
  
const MaterialTask: React.FC<MaterialTaskProps> = ({match}) => {

    const [task, setTask] = useState();
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    var array : Array<JSX.Element> = [];

    useEffect(()=>{
        sendGetByIDRequest('material_task/task', match.params.id_task).then(materialTask => {            
            setTask(materialTask);
            
            sendGetByIDRequest('material_task_detail/task', materialTask['_id']).then(details => {            
                setDetails(details);  
                setIsLoading(false)
            })
            
        })
    }, [])

    if(isLoading) {
        // * AQUI IRA EL SPLASH DE CARGA
        return(
           <LoadingPage/>
        );
    }

    const HandleDoneClick = () => {
        details.map(detail =>{
            var counter = sessionStorage.getItem('counter_' + detail['_id'])

            sendGetByIDRequest('material', detail['_material']['_id']).then(material =>{
               
                var newQuantity = Number(material['_quantity']) - Number(counter);

                var data = {
                    '_quantity': newQuantity.toString()
                };

                sendPutRequest('material', material['_id'], data).then(() => {
                    sessionStorage.removeItem('counter_' + detail['_id']);
                })

            })

        })
    }

    const nombreClase = <IonCard color="secondary">
                            <IonImg src={task!['_classroom']['_name']['_pictogram']}/> 
                            <IonCardTitle>{task!['_classroom']['_name']['_text']}</IonCardTitle>
                        </IonCard>
    
    array = details!.map( detail => {
        var pictograms : Array<string> = [];
        pictograms.push(detail!['_material']['_type']['_name']['_pictogram']);
        pictograms.push(detail!['_material']['_color']['_pictogram']);

        var label : string = detail['_quantity'] + " " + detail!['_material']['_type']['_name']['_text'] + " " + detail!['_material']['_color']['_text'];

 
        return(<div>                
                 <CounterComponent type={TaskTypes.Material} id={detail['_id']} label={label} pictograms={pictograms}></CounterComponent>
              </div>)        
    })


    // * Definimos el header de la página para poder usarlo en el componente de la Paginación
    const header = <Header name={task!['_task']['_name']['_text']} pictogram={task!['_task']['_name']['_pictogram']}></Header>

    
    return <Pagination header={header} itemsPerPage={1} items={array} doneUrl="/tareas" title={nombreClase} doneAction={HandleDoneClick}></Pagination>
}
export default MaterialTask;