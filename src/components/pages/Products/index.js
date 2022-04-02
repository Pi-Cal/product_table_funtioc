import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/Provider";
import getProducts from "../../../context/actions/getProducts";
import { Button, Container, Image, InputGroup, Table } from "react-bootstrap";
import { CustomInput } from "../../common/customInput";
import getColor from "../../../context/actions/getColor";
import { updateProduct } from "../../../context/actions/updateProduct";
import { CustomPicker } from "../../common/customPicker";
import "./styles.css";
import { color } from "../../../context/reducer/color";
import { CustomPagination } from "../../common/customPagination";
import { CustomModal } from "../../common/customModal/customModal";

export const ErrorProducts = () => {
  const { productState, productDispatch, colorDispatch, colorState } =
    useContext(GlobalContext);

    const [currentPage, setCurrentPage] = useState(0);
    const [productPerPage, setProductPerPage] = useState(10);
    const [total, setTotal] = useState(0);
    const [showProducts, setShowProducts] = useState(0);
    
    const [modalShow, setShow] = useState(false);


    const onSubmit = () => {
      const doit = async() => {
        let canSubmit = true
          await productState.data.forEach(p=>{
          const name = p.name.length <= 0 ? 'Required' : p.name.length > 50 ? 'Max 50 characters' : null;
          const sku = p.sku.length <= 0 ? 'Required' : p.sku.length > 20 ? 'Max 20 characters' : null;
          const check = colorState.data.some(c=>c.id==p.color);
          // const color = colorState.data.some(c=>c.id==p.color) ? null: 'Required';
          const error = name || sku  ? {name, sku} : null
          if (error!==null) updateProduct({...p, error})(productDispatch)
          if(error) canSubmit = false
        })
        if(canSubmit) {
          setShow(true)
        } else {
        }
      }

      doit();
        
    }

    useEffect(()=>{
      const firstIndex = (currentPage - 1) * productPerPage
      setShowProducts([...productState.data.slice(firstIndex, firstIndex + 10)])
    },[currentPage])

  useEffect(() => {
    getProducts()(productDispatch)
      .then((res) => {
        setTotal(res.length);
        setCurrentPage(1);
      })
      .catch((err) => alert(err));
    getColor()(colorDispatch)
      .then()
      .catch((err) => alert(err));
  }, []);

  return (
    <Container className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="fs-5 fw-bold">JaSon - Re-upload Error Product</div>
        <Button className="" variant="success" onClick={onSubmit}>
          Update
        </Button>
      </div>
      <Table striped bordered className="mt-3" hover> 
        <thead>
          <tr>
            <th>ID</th>
            <th>Error Description</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>SKU</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {showProducts && showProducts.map((product, index) => (
            <ProductRow product={product} key={index}/>
          ))}
        </tbody>
      </Table>
      <CustomPagination currentPage={currentPage} totalPages={parseInt(total/productPerPage + 1)} setCurrentPage={setCurrentPage}/>
      <CustomModal title={'Upload Product'} show={modalShow} handleClose={()=>setShow(false)} data={productState.tempData}/>
    </Container>
  );
};

const ProductRow = ({product, test}) => {
  const {productState, colorState, productDispatch} = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [error, setErrorr] = useState([]);
  const [presentation, setPresentation] = useState({});

  useEffect(()=>{
    setForm({name: product.name, color: product.color, sku: product.sku})
    setErrorr({...product.error})
    setPresentation(productState.data.find(p=>p.id==product.id))
  },[product])
  
  useEffect(()=>{
    if (form.name!=presentation.name || (form.color != presentation.color)  || form.sku != presentation.sku)
      updateProduct({...product, ...form})(productDispatch);
  },[form])

  useEffect(()=>{
    setErrorr(prev=> {
      return {...prev, ...presentation.error}
    })
  }, [productState.loading])

  const onChange = ({name, value}) => {
    setForm(prev=>{
      return {...prev, [name]: value}
    })
  }

  
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.errorDescription}</td>
      <td>
        <Image src={product.image} className="product-img" />
      </td>
      <td>
        <CustomInput
          name={'name'}
          value={form.name}
          maxLength={50}
          onChange={
            onChange
          }
          error={error.name}
          setErrorr={setErrorr}
        />
      </td>
      <td>
        <CustomInput 
          name={'sku'}
          value={form.sku} 
          maxLength={20} 
          onChange={onChange}
          error={error.sku}
          setErrorr={setErrorr}
          />
      </td>
      <td>
        <CustomPicker
          items={colorState.data.map((color) => ({
            value: color.id,
            label: color.name,
          }))}
          value={form.color}
          label={"Colors"}
          onChange={onChange}
          // error={error.color}
          // setErrorr={setErrorr}
          name='color'
        />
      </td>
    </tr>
  );
};
