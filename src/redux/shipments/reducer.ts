import { createReducer } from '@reduxjs/toolkit';
import {
  changeCargoInput,
  fetchShipments,
  selectShipment,
  searchShipments,
} from './actions';
import { IInitialState } from '../../interfaces/shipments';
import { getCargoBaysCount } from '../../utils';

const initialState: IInitialState = {
  data: [],
  isLoading: false,
  filteredData: [],
  selectedShipment: null,
  searchValue: '',
  cargoBaysCount: null,
  cargoInput: '',
  shipmentId: null,
};

const shipmentsReducer = createReducer(initialState, (shipments) => {
  shipments.addCase(fetchShipments.pending, (state, ) => {
    state.isLoading = true;
  });

  shipments.addCase(fetchShipments.fulfilled, (state, { payload }) => {
    const { id, boxes } = payload[0];
    const tempCargoBaysCount = getCargoBaysCount(boxes);

    state.data = payload;
    state.filteredData = payload;
    state.shipmentId = id;
    state.selectedShipment = payload[0];
    state.cargoInput = boxes || String(0);
    state.cargoBaysCount = tempCargoBaysCount;
    state.isLoading = false;
    state.searchValue='';
  });

  shipments.addCase(selectShipment, (state, { payload }) => {
    const tempShipment = state.data.find(({ id },) => id === payload);
    state.shipmentId = payload;
    state.selectedShipment = tempShipment;
    state.cargoInput = tempShipment?.boxes || String(0);
    state.cargoBaysCount = getCargoBaysCount(tempShipment?.boxes);
  });

  shipments.addCase(changeCargoInput, (state, { payload }) => {
    state.cargoInput = payload;
    state.cargoBaysCount = getCargoBaysCount(payload);
  });

  shipments.addCase(searchShipments, (state, { payload }) => {
    const tempFilteredData = state.data.filter((item) =>
      item.name.toLowerCase().includes(payload.toLowerCase())
    );

    state.searchValue = payload;
    state.filteredData = tempFilteredData;
  });
});

export default shipmentsReducer;
