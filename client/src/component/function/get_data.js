import axios from "axios";

export const listProduct = async () => {
  return await axios.get(process.env.REACT_APP_API + "/get_item");
};

export const readProduct = async (id) => {
  return await axios.get(process.env.REACT_APP_API + "/get_item_by_id/" + id);
};

export const createProduct = async ( value) => {
  
  return await axios.post(process.env.REACT_APP_API + "/insert_item", value,)

};

export const updateProduct = async ( id,product) => {
  return await axios.put(process.env.REACT_APP_API + "/update_item/"+id,product, {
  });
};

