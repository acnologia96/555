import {
  Box,
  Button,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { createProduct, readProduct } from "../function/get_data";
import ModalEdit from "./ModalEdit";

const initialstate = {
  name: "",
  description: "",
  price: "",
  quantity: "",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalCreate = () => {
  const [values, setValues] = useState(initialstate);
  const handleChange = (e) => {
    
    setValues({ ...values, [e.target.name]: e.target.value });
   
  };
  const handleSubmit=()=>{
    console.log(values)
    createProduct(values)
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <>
      <Box sx={style}>
        <div component="form">
          <h5 className="text-center">Create</h5>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />

            <TextField
              required
              label="Price"
              name="price"
              onChange={handleChange}
              type="number"
              id="outlined-required"
              value={values.price}
            />
            <TextareaAutosize
              style={{ marginLeft: 8, width: 260 }}
              required
              name="description"
              onChange={handleChange}
              minRows={3}
              id="outlined-required"
              placeholder="description*"
           
              value={values.description}
            />
            <TextField
            label="Quantity"
              required
              onChange={handleChange}
              name="quantity"
              type="number"
              id="outlined-required"
            
               value={values.quantity}
            />
          </Box>
          <div className="text-center">
            <Button variant="outlined" onClick={handleSubmit}>
              บันทึก
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
};

export default ModalCreate;
