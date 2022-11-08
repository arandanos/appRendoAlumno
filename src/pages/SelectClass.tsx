import './Page.css';
import Pagination from './Pagination';

const SelectClass: React.FC = () => {

  return (
    <Pagination itemsPerPage={4} name="Elige Clase" pictogram='https://api.arasaac.org/api/pictograms/9815?resolution=500&download=false' url="classroom" />
  );
};

export default SelectClass;
