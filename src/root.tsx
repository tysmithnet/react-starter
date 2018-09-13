import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { observe } from "react-performance-observer";
import { Provider } from "react-redux";
import App from "./app/App";
import rootSaga from "./root.saga";
import store, { sagaMiddleware } from "./root.store";

// register a metric tracking routine
observe(measurements => {
  for (const measurement of measurements) {
    if (measurement.entryType != "measure") {
      continue;
    }
    console.log(`${measurement.componentName} - ${measurement.duration}`);
    // axios.post("/metrics", {
    //   data: `${measurement.componentName} - ${measurement.duration}`,
    // });
  }
});

/**
 * Render a component and connect the root store to it
 *
 * @param {JSX.Element} component
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
