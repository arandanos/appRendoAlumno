import './Page.css';
import '../components/ButtonPictogram'
import ButtonPictogram from '../components/ButtonPictogram';
import { RouteComponentProps } from 'react-router';
import { useEffect, useState } from 'react';
import { sendGetAllRequest, sendGetByIDRequest } from '../ApiMethods';
import PaginationSt from './PaginationStudents';
import Header from '../components/Header';
import { IonContent } from '@ionic/react';



interface StudentLoginProps extends RouteComponentProps<{
  id_classroom: string;
}>{}

const StudentLogin: React.FC<StudentLoginProps> = ({match}) => {

    const [ items, setItems ] = useState([])
    const [idClase, setIdClase ] = useState({'_id': "1", '_name': "Error"})


    useEffect(() => {
      sendGetByIDRequest("classroom", match.params.id_classroom).then(numclas => {
        setIdClase(numclas)
      })
      sendGetAllRequest("student").then(data => {
        setItems(data);
      })
    }, [])
    

    var array : Array<JSX.Element> = [];

    array = items.map(element => {
        return(
          <ButtonPictogram id={element['_id']} label={element['_name']['_text']} pictogram={element['_name']['_pictogram']} square={true} href={"#"} />
          )
      })
    
    return (
        <>
          <Header name="AppRendo" noHome={true}/>
          <IonContent fullscreen>
            <PaginationSt name={'AppRendo'} items={array} classroom={idClase['_name']}></PaginationSt>
          </IonContent>
        </>
    ) 
};

export default StudentLogin;
