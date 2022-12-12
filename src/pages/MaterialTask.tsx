import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { sendGetByIDRequest } from "../ApiMethods";
import CounterComponent from "../components/CounterComponent";
import Pagination from "./PaginationArray";
import { TaskTypes } from "../globals";

interface MaterialTaskProps extends RouteComponentProps<{
    id_task: string;
}>{}
  
const MaterialTask: React.FC<MaterialTaskProps> = ({match}) => {

    const [task, setTask] = useState();
    const [isLoading, setIsLoading] = useState(true);

    var array : Array<JSX.Element> = [];

    useEffect(()=>{
        sendGetByIDRequest('material_task/task', match.params.id_task).then(materialTask => {
            setTask(materialTask);
            setIsLoading(false)
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

    var pictograms : Array<string> = [];
    pictograms.push(task!['_task']['_name']['_pictogram']);
    array.push(
        <div>
            <CounterComponent type={TaskTypes.Material} id="1" label="1 Lapiz Rojo" pictograms={pictograms}></CounterComponent>
        </div>
    );
    
    return <Pagination name={task!['_task']['_name']['_text']} pictogram={task!['_task']['_name']['_pictogram']} itemsPerPage={1} items={array} doneUrl="/tareas"></Pagination>
}
export default MaterialTask;