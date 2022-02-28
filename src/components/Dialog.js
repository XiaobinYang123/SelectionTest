import React from "react";
// import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MuiAlert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";

import Alert from "./Alert";
import { url } from "../asset/url";

const FormSchema = yup
  .object()
  .shape({
    location: yup.string().required("Location is required"),
    quantity: yup
      .number()
      .required("Quantity is required")
      .positive("Quantity must be postive")
      .integer("Quantity must be an integer"),
    foodName: yup.string().required("Food name is required"),
    foodWeight: yup
      .number("Food Weight must be a number")
      .required("Food Weight is required")
      .positive("Food Weight must be postive"),
    date: yup
      .date()
      .max(new Date(Date.now()), "Time can not be in the future")
      .required(),
  })
  .required();

export default function Header({ setData }) {
  const [openForm, setOpenForm] = React.useState(false);
  const [openSnackBar, setOpenSnackBar] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSchema),
  });

  const onSubmit = (data) => {
    setOpenForm(false);
    reset();
    axios
      .post(url + "/add", data)
      .then((res) => {
        setMessage("Submission is successfully");
        setData((prevState) => {
          return [res.data, ...prevState];
        });
        setOpenSnackBar(true);
      })
      .catch((err) => {
        setMessage("Submission is unsuccessfully");
        setOpenSnackBar(true);
      });
  };

  const cancelFormHandler = () => {
    setOpenForm(false);
    reset();
  };

  return (
    <>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button variant="contained" onClick={() => setOpenForm(true)}>
          New Submission
        </Button>
        <Dialog open={openForm} onClose={() => setOpenForm(false)}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogTitle>Add a new submission</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please fill out the following form
              </DialogContentText>
              <Stack spacing={2}>
                <TextField
                  required
                  id="datetime-local"
                  label="Time"
                  type="datetime-local"
                  sx={{ width: 250 }}
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="date"
                  {...register("date")}
                  error={errors.date}
                  helperText={errors?.date?.message}
                />
                <TextField
                  required
                  id="filled-required"
                  label="Location"
                  variant="filled"
                  name="location"
                  {...register("location")}
                />
                <TextField
                  required
                  label="Quantity of Ducks"
                  type="number"
                  variant="filled"
                  name="quantity"
                  {...register("quantity")}
                  error={errors.quantity}
                  helperText={errors?.quantity?.message}
                />
                <TextField
                  required
                  label="Food Name"
                  variant="filled"
                  name="foodName"
                  {...register("foodName")}
                />
                <TextField
                  required
                  type="number"
                  label="Food weight"
                  id="filled-start-adornment"
                  sx={{ m: 1, width: "25ch" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                  }}
                  variant="filled"
                  name="foodWeight"
                  {...register("foodWeight")}
                  error={errors.foodWeight}
                  helperText={errors?.foodWeight?.message}
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={cancelFormHandler}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </Dialog>
      </Box>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackBar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ width: "50%" }}
      >
        <Alert
          onClose={() => setOpenSnackBar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
