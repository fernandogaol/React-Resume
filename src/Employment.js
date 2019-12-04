import React from "react";
import "./App.css";

function Employment() {
  return (
    <section className="App-employment">
      <h2>Employment</h2>
      <address className="App-current-job">
        <font color="white">Company:</font> UCLA <br></br>
        <font color="white">Title:</font> Professor <br></br>
        <font color="white">Employment date:</font> 10/2018 to present <br></br>
        <font color="white">Description:</font> typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem <br></br>
        <br></br>
      </address>

      <address className="App-previous-job">
        <font color="white">Company:</font> Wacala <br></br>
        <font color="white"> Title:</font> Warehouse Manager <br></br>
        <font color="white">Employment date:</font> 5/2015 to 10/2018 <br></br>
        <font color="white">Description:</font> typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem <br></br>
        <br></br>
      </address>
    </section>
  );
}
export default Employment;
