import * as actionTypes from './constants';

const defaultState = {
  projectName: '',
  totalPrices: 0
};

// 这里reducer最终根据action返回新的数据
function reducer(state = defaultState, action) {
  // console.log(action)
  switch (action.type) {
    case actionTypes.CHANGE_NAME:
      return {...state, projectName: action.value}
    default:
      return state;
  }
}

export default reducer;