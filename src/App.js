import React from "react";
import "./App.css";
import Table from "./components/table";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="contain">
      <div className="App">
        <Card>
          <Typography color="textPrimary" gutterBottom>
            IIT Tirupati 2021 Chemical Engineering Time Table
          </Typography>
        </Card>
        <Table />
      </div>

      <Card style={{ padding: "50px" }}>
        <Typography color="textPrimary" gutterBottom>
          B -> CH3202 Heterogeneous Reaction engineeriong (2-1-3-5) -> Dr.
          Narendra Singh Laboratory, Dr. Narendra singh, Dr. Anil Vir
        </Typography>

        <Typography color="textPrimary" gutterBottom>
          C -> CH 3204 Separation and Purification Processes (2-1-3-5) -> Prof.
          KSMS Raghavarao Laboratory, Prof. KSMS Raghavarao, Prof. Sasidhar
          Gumma
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          D -> CH3206 Process Equipment Design (2-0-3-4) -> Dr. M. Nabil, Prof.
          Sasidhar Gumma
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          E -> CH3208 Transport Phenomena (2-1-0-3) -> Dr. Sunil KumarThamida
        </Typography>
        <Typography>
          F -> HS2030 International Trade and Finance -> Dr. Rahul A Sihori
        </Typography>
      </Card>
    </div>
  );
}

export default App;
