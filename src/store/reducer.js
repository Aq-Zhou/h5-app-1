import * as actionTypes from './constants';

const defaultState = {
  projectName: '测试',
  // 区位模块价格
  quWeiPrices: 0,
  // 鸟瞰渲染价格
  niaoPrices: 0,



  totalPrices: 0
};

// 这里reducer最终根据action返回新的数据
function reducer(state = defaultState, action) {
  // console.log(action)
  switch (action.type) {
    case actionTypes.CHANGE_NAME:
      return {
        ...state, projectName: action.value
      };
    case actionTypes.CHANGE_QUWEIPRICES:
      return {
        ...state, quWeiPrices: action.value, totalPrices: action.value + state.niaoPrices
      };
    case actionTypes.CHANGE_NIAOPRICES:
      return {
        ...state, niaoPrices: action.value, totalPrices: action.value + state.quWeiPrices
      };
    default:
      return state;
  }
}

export default reducer;