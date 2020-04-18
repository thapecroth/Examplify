function Webgazer(webgazer) {
  webgazer.setGazeListener(gazeListener);

  function handleStatusChange(status) {
    status === true ? webgazer.begin() : webgazer.end();
  }

  function gazeListener(d) {
    console.log(d);
  }

  return { handleStatusChange };
}

export default Webgazer;
