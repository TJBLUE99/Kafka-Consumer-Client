import React, { useEffect, useState } from "react";
import "./Main.css";
import BasicCard from "../Card/Card";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DataGridTest from "../Datagrid/DataGrid";
import LabTabs from "../TabsDatagrid/TabsDataGrid";
import PieActiveArc from "../PieChart/PieChart";
import { useApi } from "../../hooks/useApi";
import axios from "axios";

const Main = () => {
  const [notification, setNotification] = useState([]);

  var sample = [
    {
      message: "New Org request subscription",
      organizationName: "TJORG198",
      planName: "trial",
      status: "Pending",
    },
  ];

  useEffect(() => {
    getNotificationData();
  }, []);

  const getNotificationData = () => {
    axios
      .get("http://localhost:8080/consume/all")
      .then((res) => {
        console.log(res.data);
        setNotification(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="main">
      <Box sx={{ margin: 2 }}>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "space-between",
            height: "100vh",
          }}
        >
          <Box sx={{ width: "70vw" }}>
            <Card sx={{ borderRadius: "0.5rem" }}>
              <CardContent>
                <Typography>Cast Details</Typography>
                <LabTabs />
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Card sx={{ width: "fit-content", borderRadius: "0.5rem" }}>
              <CardContent sx={{ padding: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5">Today's Updates</Typography>
                </Box>
                {notification.map((i) => {
                  return (
                    <Box
                      sx={{
                        mb: 2,
                        padding: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "1rem",
                        "&:hover": {
                          background: "rgba(0,0,0,0.04)",
                          cursor: "pointer",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "grey",
                          width: "0.4rem",
                          "&:hover": {
                            background: "aqua",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <p></p>
                      </Box>
                      <Box>
                        <Typography variant="h7">
                          <strong>{i.message}</strong>
                        </Typography>
                        <br></br>
                        <Typography variant="h8">
                          {i.organizationName}
                        </Typography>
                        <br></br>
                        <Typography variant="h7">
                          <strong>Plan Name:</strong> {i.planName}
                        </Typography>
                        <br></br>
                      </Box>
                    </Box>
                  );
                })}
              </CardContent>
            </Card>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Main;
