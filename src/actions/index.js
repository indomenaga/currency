import CurrencyApi from '../apis/CurrencyApi';

export const getCurrency = () => async dispatch => {
  const response = await CurrencyApi.get('?base=USD');

  dispatch({ type: 'GET_CURRENCY', payload: response.data});
};

export const compare = (val) =>{
  return{
    type:'COMPARE',
    payload:val
  };
};

export const on = (val) =>{
  return{
    type:'ON',
    payload:val
  };
};

export const addCompare = (curr) =>{
  return{
    type:'ADD_COMPARE',
    payload:curr
  };
};

export const removeCompare = (curr) =>{
  return{
    type:'REMOVE_COMPARE',
    payload:curr
  };
};

export const addSelect = (curr) =>{
  return{
    type:'ADD_SELECT',
    payload:curr
  };
};

  export const removeSelect = (curr) =>async dispatch=>{
    dispatch({
      type:'REMOVE_SELECT',
      payload:curr
    })
  };
