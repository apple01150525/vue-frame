const SET_NAV_HIDDEN = 'SET_NAV_HIDDEN'
const SET_SIDE_HIDDEN = 'SET_SIDE_HIDDEN'

const mutations = {
  updateFold (state, fold) {
    state.fold = fold
  },
  [SET_NAV_HIDDEN] (state, isHidden) {
    state.navHidden = isHidden
  },
  [SET_SIDE_HIDDEN] (state, isHidden) {
    state.sideHidden = isHidden
  }
}

export default mutations
