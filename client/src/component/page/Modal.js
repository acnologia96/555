import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { readProduct } from "../function/get_data";
import ModalEdit from "./ModalEdit";
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

const Modal = (products) => {
  const product = products.products;
 

  return (
    <>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {product.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {product.description}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          จำนวน : {product.quantity}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          ราคา : {product.price}
        </Typography>
       
      </Box>
      
    </>
  );
};

export default Modal;
