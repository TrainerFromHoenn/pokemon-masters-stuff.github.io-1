import {
  SELECT_POKEMON,
  ADD_TO_GRID_LIST,
  REMOVE_FROM_GRID_LIST,
  DISPLAY_GRID_DATA,
  HIDE_GRID_DATA,
  SUBTRACT_FROM_REMAINING_ENERGY,
  ADD_BACK_TO_REMAINING_ENERGY,
  RESET_GRIDS,
  SAVE_CURRENT_BUILD,
  LOAD_SELECTED_BUILD,
  DELETE_SELECTED_BUILD
} from './types';

export const selectPokemon = selectedPokemon => ({
  type: SELECT_POKEMON,
  selectedPokemon
});

export const addToGridList = gridData => ({
  type: ADD_TO_GRID_LIST,
  gridData
});

export const subtractFromRemainingEnergy = gridData => ({
  type: SUBTRACT_FROM_REMAINING_ENERGY,
  gridData
});

export const removeFromGridList = gridData => ({
  type: REMOVE_FROM_GRID_LIST,
  gridData
});

export const addBackToRemainingEnergy = gridData => ({
  type: ADD_BACK_TO_REMAINING_ENERGY,
  gridData
});

export const displayGridData = gridData => ({
  type: DISPLAY_GRID_DATA,
  gridData
});

export const hideGridData = () => ({
  type: HIDE_GRID_DATA
});

export const resetGrids = () => ({
  type: RESET_GRIDS
});

export const saveCurrentBuild = payload => ({
  type: SAVE_CURRENT_BUILD,
  payload
});

export const loadSelectedBuild = payload => ({
  type: LOAD_SELECTED_BUILD,
  payload
});

export const deleteSelectedBuild = payload => ({
  type: DELETE_SELECTED_BUILD,
  payload
});