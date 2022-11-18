import { useEffect, useState } from 'react';

import './Page.css';

import { IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import ButtonPictogram from '../components/ButtonPictogram';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import CounterComponent from '../components/CounterComponent';

interface PaginationProps {
  itemsPerPage: number;
  name: string;
  pictogram: string;
  doneUrl?: string;
  doneAction?: any;
  items: Array<JSX.Element>
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
    
  // const [ items, setItems ] = useState<Array<JSX.Element>>([<></>])
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ itemsPerPage ] = useState(props.itemsPerPage);
  const [ totalPages, setTotalPages ] = useState(0);
  

  useEffect(() =>{
    setTotalPages(Math.ceil(props.items.length / itemsPerPage))
    // setItems(props.items.slice(currentPage*itemsPerPage, currentPage*itemsPerPage + itemsPerPage))
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
      <Header name={props.name} pictogram={props.pictogram}/>
      <IonContent fullscreen>
        <IonGrid class='button-grid grid-with-bottom-nav'>
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

export default Pagination;