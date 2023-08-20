import React, { useState } from "react";
import { Link } from "react-router-dom";
import { readProduct } from "../function/get_data";
import Modals from "../page/Modal";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import ModalEdit from "./ModalEdit";

const TableData = ({ product }) => {
  const [products, setProducts] = useState([]);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);
 

  const showModal = (id) => {
    setOpen(true);
    readProduct(id)
      .then((res) => {
        const products = JSON.parse(res.data.products);
        setProducts(products);
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const showModalEdit = (id) => {
   
    readProduct(id)
      .then((res) => {
        const products = JSON.parse(res.data.products);
        setProducts(products);
        setOpen1(true);
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <td>
        {" "}
        <Link onClick={() => showModal(product._id)}> {product.name}</Link>
      </td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>
        <Button variant="outlined" onClick={() => showModalEdit(product._id)}>
          <EditIcon />
        </Button>{" "}
      </td>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Modals products={products} />
      </Modal>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalEdit products={products} />
      </Modal>

    </>
  );
};

export default TableData;
