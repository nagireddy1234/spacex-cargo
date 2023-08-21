import styles from './index.module.scss'
import Sidebar from "../../components/sidebar"
import Content from "../../components/content"
import useHelper from "./useHelper"
import { useSelector } from "react-redux"
import { selectShipmentData } from "../../redux/shipments/selector"
import { SpinnerIcon } from "../../assets/icons"
import { Spinner } from "../../assets/iconsStyles"

const Home = () => {

  const { isMobile, showShipments, setShowShipments } = useHelper();
  const { isLoading } = useSelector(selectShipmentData);

  if (isLoading) {
    {
      <div style={Spinner} color='#fff'><SpinnerIcon /></div>
    }
  }

  return (
    <div className={styles.container}>
      <Sidebar {...{ isMobile, showShipments, setShowShipments }} />
      <Content {...{ isMobile, showShipments, setShowShipments }} />
    </div>
  )
}

export default Home