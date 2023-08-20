import { Box, Button, TextField, TextareaAutosize, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { readProduct, updateProduct } from "../function/get_data";

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

const ModalEdit = (products) => {
  const product = products.products;
  const [values, setValues] = useState(product);
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    

  };
  const handleSubmit=()=>{
    updateProduct(values._id,values)
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
    console.log(values);
  }

  return (
    <>
    <Box sx={style}>
        <div component="form">
          <h5 className="text-center">Update</h5>
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
              label={"Name"}
              variant="outlined"
            />

            <TextField
              required
              name="price"
              onChange={handleChange}
              type="number"
              id="outlined-required"
              label={"Price"}
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
              required
              onChange={handleChange}
              name="quantity"
              type="number"
              id="outlined-required"
              label={"quantity"}
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

export default ModalEdit;
