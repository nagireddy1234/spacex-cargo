import { createSelector } from '@reduxjs/toolkit'
import { Selector } from 'react-redux'
import { IInitialState } from '../../interfaces/shipments'
import { IAppState } from "../../interfaces/appState"


export const selectShipmentReducer: Selector<IAppState, IInitialState> = store =>
    store.shipmentsReducer

export const selectShipmentData = createSelector(selectShipmentReducer, data => ({
    ...data,
}))
