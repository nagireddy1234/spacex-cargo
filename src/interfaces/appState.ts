import { IInitialState } from './shipments'

export interface IAppState {
    shipmentsReducer: IInitialState
}

export interface Icomponent{
    isMobile: boolean
    showShipments: boolean
    setShowShipments: (val: boolean) => void
}