import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectShipmentData } from "../../redux/shipments/selector";
import { AppDispatch } from "../../redux/store";
import { fetchShipments, selectShipment } from "../../redux/shipments/actions";

const useHelper = () => {

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()
    const { id } = useParams()
   
    const [isMobile, setIsMobile] = useState(false);
    const [showShipments, setShowShipments] = useState(false);
  
    const { selectedShipment, data } = useSelector(selectShipmentData);  
    const shipmentId = useMemo(() => data.find(item => item?.name.replaceAll(' ', '-') === id), [data, id]);
  
    useEffect(() => {
      dispatch(fetchShipments())
    }, [dispatch])
  
  
    useEffect(() => {
      if (id && shipmentId) {
        dispatch(selectShipment(shipmentId.id));
      } else if (selectedShipment) {
        const paramId = selectedShipment.name.replaceAll(' ', '-');
        navigate(`/${paramId}`);
      }
  
    }, [id, shipmentId, selectedShipment, navigate,dispatch]);
  

    useEffect(() => {
        const checkIsMobile = () => {
            const screenWidth = window.innerWidth;
            setIsMobile(screenWidth <= 950); 
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

  return {isMobile, showShipments, setShowShipments}
}

export default useHelper