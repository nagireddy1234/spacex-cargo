import { ChangeEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import {
  changeCargoInput,
  searchShipments,
  selectShipment,
} from '../../redux/shipments/actions';
import { useNavigate } from 'react-router-dom';

const useHelper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBoxesChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (
      /^[0-9,.]*$/.test(value) &&
      !/[,.]{2,}/.test(value) &&
      !/\.\d\./.test(value)
    ) {
      dispatch(changeCargoInput(value));
    }
  };

  const handleSearchShipments: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    dispatch(searchShipments(value));
  };

  const handleSelectShipmentMobile = (e) => {
    const index = e.nativeEvent.target.selectedIndex;
    const label = e.nativeEvent.target[index].text;
    dispatch(selectShipment(e.target.value));
    const paramId = label.replaceAll(' ', '-');
    navigate(`/${paramId}`);
  };

  return {
    handleBoxesChange,
    handleSearchShipments,
    handleSelectShipmentMobile,
  };
};

export default useHelper;
