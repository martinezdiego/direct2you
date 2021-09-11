import React from 'react'
import { Form, Button, Select } from 'antd';

const ciudades = [
    { label: 'Merida', value: 'Merida' },
    { label: 'Caracas', value: 'Caracas' },
  ];

const zonas = [
{ label: 'ejido', value: 'ejido' },
{ label: 'petare', value: 'petare' },
];

function FormhomeComp (){
    const [form] = Form.useForm();

    const onFinish = values => {
    console.log('Received values of form:', values);
    };

    return (
        <div className="form">
            <Form form={form} layout="vertical" name="Formhome" onFinish={onFinish} autoComplete="off">
                    <Form.Item name="ciudad" label="Ciudad" rules={[{ required: true, message: 'Falta Ciudad' }]}>
                        <Select options={ciudades} />
                    </Form.Item>
                <Form.Item name="zonares" label="Zona Residencial" >
                    <Select options={zonas} />
                </Form.Item>

                <Form.Item noStyle={false}>
                    <Button className="form-button" type="default" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

class FormHome extends React.Component{
    render(){          
        return(
            <div className="containerform">
                <div className="title-form">
                    Ingresa Tu Direccion
                </div>

                <FormhomeComp/>
            </div>
        )
    };
}
export default FormHome;