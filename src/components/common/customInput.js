import React from "react";
import { Form, FormControl } from "react-bootstrap";

export const CustomInput = ({name, value, onChange, maxLength, error, setErrorr,...rest }) => {


  const eventHandle = (e) => {
    const _value = e.target.value
    onChange({name,value: _value});
    if(_value==='') setErrorr(prev=>{
      return {...prev, [name]: 'Required'}
      })
    else if (_value.length > maxLength) {
      setErrorr(prev=>{
        return {...prev, [name]: `Max characters: ${maxLength}`}
      })
    } else {
      setErrorr(prev=>{
        return {...prev, [name]: null}
      })
    }
  }

  return (
    <Form.Group>
      <FormControl type="input" value={value} onChange={eventHandle} {...rest} />
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form.Group>
  );
};
