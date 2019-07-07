const INITIAL_STATE = {
  val:10,
  currencylist:[],
  selectoption:["IDR","CAD","GBP","CHF","SGD","INR","MYR","JPY","KRW"],
  on:false
};

export default (state=INITIAL_STATE,action)=>{
  switch (action.type) {

    case "COMPARE":
    return {...state,val:action.payload};
    case "ON":
    return {...state,on:action.payload};
    case "ADD_COMPARE":
    return {...state,currencylist:state.currencylist.concat(action.payload)};
    case "ADD_SELECT":
    return {...state,selectoption:state.selectoption.concat(action.payload)};
    case "REMOVE_COMPARE":
    return {...state,currencylist: state.currencylist.filter((currlist) => currlist !== action.payload)};
    case "REMOVE_SELECT":
    return {...state,selectoption: state.selectoption.filter((currlist) => currlist !== action.payload) };
    case "GET_CURRENCY":
    return {...state,currencies:action.payload};
    default:
      return state;

  }
};
