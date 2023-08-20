import React, { useEffect, useState } from "react";
import { listProduct } from "../function/get_data";
import TableData from "./TableData";
import { Button, Modal } from "@mui/material";
import ModalCreate from "./ModalCreate";


const Get_data = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const showModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    listProduct()
      .then((res) => {
        console.log(res.data);
        setProducts(JSON.parse(res.data.products));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(products);
  return (
    <div className="container mt-2">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Edit</th>

          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <TableData product={item} />
            </tr>
          ))}
        </tbody>
        <Button variant="outlined" onClick={showModal} >
          เพิ่ม
        </Button>{" "}
      </table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalCreate />
      </Modal>
      
    </div>
  );
};

export default Get_data;
