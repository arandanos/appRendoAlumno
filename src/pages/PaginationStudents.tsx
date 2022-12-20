import { useEffect, useState } from 'react';
import { IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import './Page.css';
import './PaginationStudents.css'
import ButtonPictogram from '../components/ButtonPictogram';
import { sendGetByIDRequest } from '../ApiMethods';

interface PaginationStProps {
  name: string;
  doneUrl?: string;
  doneAction?: any;
  items: Array<JSX.Element>;
  classroom: string;
}

const PaginationSt: React.FC<PaginationStProps> = (props: PaginationStProps) => {
  
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ totalPages, setTotalPages ] = useState(0);

  const itemsPerPage = 4;

  useEffect(() => {
    setTotalPages(Math.ceil(16 / itemsPerPage))
  }, [])

  

  const handleNextClick = () => {
    if((currentPage+1) > totalPages-1){
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage+1);
    }

  };
  
  const handlePrevClick = () => {
    if((currentPage-1) < 0){
      setCurrentPage(totalPages-1);
    } else {
      setCurrentPage(currentPage-1);
    }
  };

 
  const bottomNav = () => {
    if(props.doneUrl)
      return <BottomNav prev={handlePrevClick} done={props.doneUrl} doneAction={props.doneAction} next={handleNextClick}/>
    return <BottomNav prev={handlePrevClick} next={handleNextClick}/>
  }


  return (
    <IonPage>
      <Header name={props.name} pictogram={''}/>
      <IonContent fullscreen>
        <IonGrid class="four-students-grid">
          <IonRow class='ion-justify-content-center'>
            <ButtonPictogram id={''} label={props.classroom} pictogram={"https://api.arasaac.org/api/pictograms/9814?download=false"} square={true} href={"#"} />
          </IonRow>
          {props.items.map( item => {
            if ((props.items.indexOf(item) >= currentPage * itemsPerPage) && props.items.indexOf(item) < currentPage * itemsPerPage + itemsPerPage) {
              return (item)
            }
          })}  
        </IonGrid>
        {bottomNav()}
      </IonContent>
      

    </IonPage>
      
  );
};
export default PaginationSt;