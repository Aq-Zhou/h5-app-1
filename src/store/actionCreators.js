import * as actionTypes from "./constants.js";

// 项目名称
export const changeName = (res) => ({type: actionTypes.CHANGE_NAME,value: res})

// 区位模块
export const changeQuWeiPrices = (res) => ({type: actionTypes.CHANGE_QUWEIPRICES,value: res})

// 项目鸟瞰
export const changeNiaoPrices = (res) => ({type: actionTypes.CHANGE_NIAOPRICES,value: res})

// 项目沙盘
export const changeSandPrices = (res) => ({type: actionTypes.CHANGE_SANDPRICES,value: res})

// 景观漫游
export const changeQuanPrices = (res) => ({type: actionTypes.CHANGE_QUANPRICES,value: res})


