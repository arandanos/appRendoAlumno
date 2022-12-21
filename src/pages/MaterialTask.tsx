import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getPictogram, sendGetByIDRequest, sendPutRequest } from "../ApiMethods";
import CounterComponent from "../components/CounterComponent";
import Pagination from "./PaginationArray";
import { TaskTypes } from "../globals";
import { IonCard, IonImg, IonCardTitle } from "@ionic/react";
import LoadingPage from "./LoadingPage";
import Header from "../components/Header";
import { SrvRecord } from "dns";

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

    const handleDoneClick = () => {
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
    
    array = details!.map( detail => {
        var pictograms : Array<string> = [];
        pictograms.push(getPictogram(detail!['_material']['_type']['_name']['_pictogram']));
        pictograms.push(getPictogram(detail!['_material']['_color']['_name']['_pictogram']));

        var label : string = detail['_quantity'] + " " + detail!['_material']['_type']['_name']['_text'] + " " + detail!['_material']['_color']['_name']['_text'];
        const quantity = Number(detail['_quantity']);
        return (<>
                    <div>
                        <CounterComponent type={TaskTypes.Material} id={detail['_id']} label={label} pictograms={pictograms} maxCounter={quantity}></CounterComponent>
                    </div>
                </>)    
    })

    const taskName = task!['_task']['_name']['_text'];
    const classPictogram = getPictogram(task!['_classroom']['_name']['_pictogram']);
    const taskPictogram = getPictogram(task!['_task']['_name']['_pictogram']);

    // * Definimos el header de la página para poder usarlo en el componente de la Paginación
    const header = <Header name={ taskName } pictogram={taskPictogram} classPictogram={classPictogram}></Header>

    return <Pagination header={header} itemsPerPage={1} items={array} doneUrl="/tareas" doneAction={handleDoneClick}></Pagination>
}
export default MaterialTask;