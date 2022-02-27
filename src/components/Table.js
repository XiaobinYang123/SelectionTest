import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import moment from "moment";

const columns = [
  { field: "location", headerName: "Location", width: 130, align: "center" },
  {
    field: "quantity",
    headerName: "Quantity of Ducks",
    type: "number",
    width: 250,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "foodName",
    headerName: "Food Name",
    width: 130,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "foodWeight",
    headerName: "Food Weight(kg)",
    type: "number",
    width: 150,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "date",
    headerName: "Time",
    width: 300,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    valueFormatter: (params) =>
      moment(params.value).format("MMMM Do YYYY, h:mm:ss a"),
  },
];

export default function Table({ data }) {
  return (
    <Box sx={{ my: 3, height: 650, width: 1 }} ml={2}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        initialState={{
          sorting: {
            sortModel: [{ field: "date", sort: "desc" }],
          },
        }}
      />
    </Box>
  );
}
