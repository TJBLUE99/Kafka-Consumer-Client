import * as React from "react";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MailIcon from "@mui/icons-material/Mail";
import { useState, useEffect } from "react";
import useMessages from "../../hooks/useMessages";

export default function TestComponent() {
  const [notification, setNotification] = useState([]);
  const [updateCounter, setCounter] = useState(0);

  const { message } = useMessages();
  let dataconversion = JSON.stringify(`"message" : ${message}`);
  let Jsondata = JSON.parse(dataconversion);
  console.log(Jsondata);

  let handleSetNotification = () => {
    const timer = setInterval(() => {
      setNotification(message);
    }, 4000);
  };

  handleSetNotification();

  const handleUpdateCounter = () => {
    setCounter(updateCounter + 1);
  };

  useEffect(() => {
    handleUpdateCounter();
  }, [notification]);

  return (
    <>
      <h1> Notifications</h1>
      <Stack spacing={2} direction="row">
        <Badge badgeContent={updateCounter} color="secondary">
          <MailIcon color="action" />
        </Badge>
        <Badge badgeContent={4} color="success">
          <MailIcon color="action" />
        </Badge>
      </Stack>

      <h1>{notification}</h1>
    </>
  );
}
