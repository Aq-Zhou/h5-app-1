import * as actionTypes from './constants';

const defaultState = {
  projectName: '',

  // 区位模块价格
  quWeiPrices: 0,
  // 鸟瞰渲染价格
  niaoPrices: 0,
  //项目沙盘价格
  sandPrices: 0,
  // 景观漫游价格
  quanPrices: 0,
  // 户型鉴赏价格
  jianPrices:0,
  // 阳台景观价格
  yangPrices:0,

  //总价
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
        ...state, quWeiPrices: action.value, totalPrices: action.value + state.niaoPrices + state.sandPrices + state.quanPrices + state.jianPrices + state.yangPrices
      };
    case actionTypes.CHANGE_NIAOPRICES:
      return {
        ...state, niaoPrices: action.value, totalPrices: action.value + state.quWeiPrices + state.sandPrices + state.quanPrices + state.jianPrices + state.yangPrices
      };
    case actionTypes.CHANGE_SANDPRICES:
      return {
        ...state, sandPrices: action.value, totalPrices: action.value + state.quWeiPrices + state.niaoPrices + state.quanPrices + state.jianPrices + state.yangPrices
      };
    case actionTypes.CHANGE_QUANPRICES:
      return {
        ...state, sandPrices: action.value, totalPrices: action.value + state.quWeiPrices + state.niaoPrices + state.sandPrices + state.jianPrices + state.yangPrices
      };
    case actionTypes.CHANGE_JIANPRICES:
      return {
        ...state, sandPrices: action.value, totalPrices: action.value + state.quWeiPrices + state.niaoPrices + state.sandPrices + state.jianPrices + state.yangPrices
      };
    case actionTypes.CHANGE_YANGPRICES:
      return {
        ...state, sandPrices: action.value, totalPrices: action.value + state.quWeiPrices + state.niaoPrices + state.sandPrices + state.jianPrices + state.yangPrices
      };
    default:
      return state;
  }
}

export default reducer;