import React from 'react';
import { useSelector } from 'react-redux';
import { selectShipmentData } from '../../redux/shipments/selector';
import useHelper from './useHelper';
import Logo from '../../assets/images/logo.png';
import { MenuIcon, SearchIcon } from '../../assets/icons';
import styles from './index.module.scss';
import { Icomponent } from '../../interfaces/appState';

const Content = ({ isMobile, showShipments, setShowShipments }: Icomponent) => {
  const { selectedShipment, cargoInput, cargoBaysCount, searchValue, data, shipmentId } =
    useSelector(selectShipmentData);

  const { handleBoxesChange, handleSearchShipments, handleSelectShipmentMobile } = useHelper();

  return (
    <div className={`${styles.container} ${showShipments ? '' : styles.mobileContainer}`}>
      <div className={styles.mobileLogoContainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <MenuIcon
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setShowShipments(true);
          }}
        />
      </div>
      <div className={styles.searchContainer}>
        {isMobile ? <select className={styles.searchInput} onChange={handleSelectShipmentMobile} value={shipmentId} >
          <option disabled >Select your option</option>
          {data && data.map((shipment) => {
            return <option key={shipment.id} value={shipment.id} label={shipment.name} className={styles.option}>{shipment.name}</option>
          })}
        </select> : <input className={styles.searchInput} placeholder="Search" value={searchValue} onChange={handleSearchShipments} />}
        <SearchIcon style={{ position: 'absolute', top: isMobile ? '21px' : '16px', left: '16px', cursor: 'pointer' }} />
      </div>
      <div className={styles.contentContainer}>
        <div>
          <h1 className={styles.title}>{selectedShipment?.name}</h1>
          <p className={styles.email}>{selectedShipment?.email}</p>
        </div>

        <div>
          <h3 className={styles.inputTitle}>Cargo Boxes</h3>
          <input
            type="text"
            className={styles.boxesInput}
            value={cargoInput}
            onChange={handleBoxesChange}
          />
        </div>

        <div className={styles.cargoContainer}>
          <h3 className={styles.requiredText}>Number of required cargo bays</h3>
          <h1 className={styles.title}>{cargoBaysCount}</h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
