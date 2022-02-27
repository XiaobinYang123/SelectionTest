import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <Box
      sx={{ width: "100%", maxWidth: 1200, bgcolor: "background.paper" }}
      ml={10}
    >
      <Header />
      <Divider variant="middle" />
      <Table></Table>
    </Box>
  );
}

export default App;
