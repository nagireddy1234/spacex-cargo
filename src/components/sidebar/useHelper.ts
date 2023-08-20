import { useDispatch } from 'react-redux';
import { selectShipment } from '../../redux/shipments/actions';

const useHelper = (setShowShipments) => {
  const dispatch = useDispatch();

  const handleSelectShipment = (id) => {
    dispatch(selectShipment(id));
    setShowShipments(false);
  };
  return {
    handleSelectShipment,
  };
};

export default useHelper;
