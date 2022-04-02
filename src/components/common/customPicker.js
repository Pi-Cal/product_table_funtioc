import React from 'react'
import { Form } from 'react-bootstrap'

export const CustomPicker = ({name, items, value, label,error, setErrorr, onChange, ...rest}) => {
    const eventHandle = (e) => {
        const _value = parseInt(e.target.value);
        if(isNaN(_value)) {
            onChange({name, value: -1})
            setErrorr(prev=>{
                return {...prev, [name]: 'Required'}
            })
        } else {
            onChange({name, value:_value})
            setErrorr(prev=>{
                return {...prev, [name]: null}
            })
        }
    }
    return(
        <div>
            <Form.Select aria-label="Default select example" value={value} {...rest} onChange={eventHandle}>
                <option defaultValue>{label}</option>
                {items.map((item, index)=>{
                    return <option key={index} value={item.value}>{item.label}</option>
                })}
            </Form.Select>
            {error&&<div className='text-danger'>{error}</div>}
        </div>
    )
    
}