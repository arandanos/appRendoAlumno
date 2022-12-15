import { useEffect, useState } from 'react';
import { IonCard, IonCardTitle, IonContent, IonGrid, IonPage } from '@ionic/react';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import './Page.css';

interface PaginationProps {
  itemsPerPage: number;
  header: JSX.Element;
  doneUrl?: string;
  doneAction?: any;
  items: Array<JSX.Element>
  title?: any;
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ itemsPerPage ] = useState(props.itemsPerPage);
  const [ totalPages, setTotalPages ] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(props.items.length / itemsPerPage))
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
      {props.header}
      <IonContent fullscreen>
        
        <IonGrid class='button-grid grid-with-bottom-nav'>
            {props.title? props.title: null}
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