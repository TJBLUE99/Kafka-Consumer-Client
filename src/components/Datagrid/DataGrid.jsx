import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 90, flex: 1 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 90,
    flex: 1,
  },

  {
    field: "Usage",
    headerName: "Usage",
    headerAlign: "left",
    align: "left",
    type: "number",
    renderCell: (params) => {
      return (
        <Box
          sx={{ justifyContent: "center", alignItems: "center", mt: "1rem" }}
        >
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
      );
    },
    width: 60,
    flex: 1,
  },
  {
    field: "Activation",
    headerName: "Status",
    headerAlign: "center",
    align: "center",
    type: "number",
    renderCell: (params) => {
      return (
        <Box
          sx={{ justifyContent: "center", alignItems: "center", mt: "1rem" }}
        >
          <CheckCircleIcon color="success" />
        </Box>
      );
    },
    width: 60,
    flex: 1,
  },

  {
    field: "Action",
    headerName: "Action",
    description: "This column has a value getter and is not sortable.",
    width: 150,
    flex: 1,
  },
];

const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 14 }];

const DataGridTest = () => {
  return (
    <>
      <Box sx={{ height: 400, width: "100%", mt: "1rem", background: "white" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </>
  );
};

export default DataGridTest;
