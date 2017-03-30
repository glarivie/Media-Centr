const updateWindowWidth = width => async dispatch =>
  dispatch({
    type: 'UPDATE_WINDOW_WIDTH',
    data: width,
  });

const toggleNav = isNavOpen => async dispatch =>
  dispatch({
    type: 'TOGGLE_NAVIGATION',
    data: isNavOpen,
  });

export default {
  updateWindowWidth,
  toggleNav,
};
