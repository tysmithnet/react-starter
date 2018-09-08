import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import App from "./app/App";
import rootSaga from "./root.saga";
import store, { sagaMiddleware } from "./root.store";
import { observe } from 'react-performance-observer';
import axios from "axios";

observe(measurements => {
  for(let measurement of measurements) {
    if(measurement.entryType != "measure")
      continue;
    axios.post("/metrics", {
      data: `${measurement.componentName} - ${measurement.duration}`
    })
  }
  console.log(measurements);
  // [
  //   {
  //     entryType: "measure",
  //     name: "⚛ App [mount]",
  //     componentName: "App",
  //     phase: "mount",
  //     startTime: 281,
  //     duration: 4,
  //     warning: null
  //   },
  //   ...
  // ]
});
/**
 * Render a component, connecting to it the root store
 * @param component Component to provide state for
 */
function render(component: JSX.Element) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>{component}</Provider>
    </AppContainer>,
    document.getElementById("root"),
  );
}

// Start the "background processing"
sagaMiddleware.run(rootSaga);

// Render the application
render(<App />);
