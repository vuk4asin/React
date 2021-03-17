import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import axios from "axios";
import Facebook from "./Facebook";
import Google from "./Google";

export default function Register() {
  const [user, setUser] = React.useState({ name: "", email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/register", {
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      alignItems="center"
      justify="center"
      style={{ minHeight: "104vh" }}
      direction="column"
    >
      <Grid item xs={3} spacing={2}>
        <TextField
          name="name"
          label="Name"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
          fullWidth
        ></TextField>
        <TextField
          name="email"
          label="Email"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
          fullWidth
        ></TextField>
        <TextField
          type="password"
          name="password"
          label="Password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
          fullWidth
        ></TextField>
        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            mt={3}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Box>
      </Grid>
      <Grid item xs={3} spacing={3}>
        <Box mt={2}>
          <Facebook />
        </Box>
      </Grid>
      <Grid item xs={3} spacing={3}>
        <Box mt={2}>
          <Google />
        </Box>
      </Grid>
    </Grid>
  );
}
