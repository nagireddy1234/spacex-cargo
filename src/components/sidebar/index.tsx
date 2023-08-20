import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectShipmentData } from '../../redux/shipments/selector';
import useHelper from './useHelper';
import Logo from '../../assets/images/logo.png';
import { CloseIcon } from '../../assets/icons';
import styles from './index.module.scss';
import { Icomponent } from '../../interfaces/appState';

const Sidebar = ({ isMobile, showShipments, setShowShipments }: Icomponent) => {
    const { shipmentId, filteredData } = useSelector(selectShipmentData);
    const { handleSelectShipment } = useHelper(setShowShipments);

    return (
        <div className={`${styles.container} ${showShipments ? styles.mobileContainer : ''}`}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="logo" className={styles.logo} />
                {isMobile && (
                    <CloseIcon style={{ cursor: 'pointer' }} onClick={() => setShowShipments(false)} />
                )}
            </div>
            <div className={styles.listContainer}>
                <h3 className={styles.title}>Shipment list</h3>
                <ul className={styles.list}>
                    {filteredData.length > 0 ? (
                        filteredData.map(({ name, id }) => {
                            const paramId = name?.replaceAll(' ', '-');
                            const listItemClasses = `${styles.listItem} ${id === shipmentId ? styles.active : ''}`;

                            return (
                                <Link
                                    key={id}
                                    to={`/${paramId}`}
                                    className={listItemClasses}
                                    onClick={() => handleSelectShipment(id)}
                                >
                                    {name}
                                </Link>
                            );
                        })
                    ) : (
                        <h1 className={styles.notFound}>Sorry, Nothing found!</h1>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
