import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";

import Header from "./components/Header";
import Table from "./components/Table";
import { useAxios } from "./hooks/useAxios";

function App() {
  const [loading, data] = useAxios({ method: "GET" });

  return (
    <Box
      sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
      ml={10}
    >
      <Header />
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
