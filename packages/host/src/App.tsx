import React from "react";

const App1 = React.lazy(() => import("app1/App"));

function App() {
  return (
    <>
      <App1 />
      <div className="App">host</div>
    </>
  );
}

export default App;
