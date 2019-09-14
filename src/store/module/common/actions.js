const SET_NAV_HIDDEN = 'SET_NAV_HIDDEN'
const SET_SIDE_HIDDEN = 'SET_SIDE_HIDDEN'

const actions = {
  showSideBar ({ commit }) {
    commit(SET_SIDE_HIDDEN, false)
  },
  hiddenSideBar ({ commit }) {
    commit(SET_SIDE_HIDDEN, true)
  },
  setSideBarVisibility ({ commit }, visibility) {
    commit(SET_SIDE_HIDDEN, !visibility)
  },
  showNavBar ({ commit }) {
    commit(SET_NAV_HIDDEN, false)
  },
  hiddenNavBar ({ commit }) {
    commit(SET_NAV_HIDDEN, true)
  },
  setNavBarVisibility ({ commit }, visibility) {
    commit(SET_NAV_HIDDEN, !visibility)
  }
}

export default actions
