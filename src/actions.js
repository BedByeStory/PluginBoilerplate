export default dispatch => ({
  action() {
    dispatch({
      type: 'ACTION_NAME',
      connected: true,
    });
  },
});
