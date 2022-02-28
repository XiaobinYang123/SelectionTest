import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";

import Header from "./components/Header";
import Table from "./components/Table";
import { url } from "./asset/url";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setLoading(false);
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
      ml={10}
    >
      <Header setData={setData} />
      <Divider variant="middle" />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Table data={data} />
      )}
    </Box>
  );
}

export default App;
