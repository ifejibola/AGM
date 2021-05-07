import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { create } from './api-mod'
const signup = (props) => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        company: '',
        error: ''
    })

    const handleChange = name => event => {
        console.log(setValues({ ...values, [name]: event.target.value }))

    }

    const clickSubmit = () => {
        console.log(alert())
        const mod = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined,
            company: values.company || undefined,
        }
        console.log(mod)
        // create(mod).then((data) => {
        //     if (data.error) {
        //         setValues({ ...values, error: data.error })
        //     } else {
        //         setValues({ ...values, error: '' })
        //     }
        // })
    }
    return (
        <Form onSubmit={clickSubmit}>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label for="email" className="me-sm-2">Email</Label>
                <Input type="text" name="email" id="email" value={values.email} onChange={handleChange('email')} placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label for="name" className="me-sm-2">Full Name</Label>
                <Input type="text" name="name" id="name" value={values.name} onChange={handleChange('name')} placeholder="John Doe" />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label for="company" className="me-sm-2">Company</Label>
                <Input type="text" name="company" id="company" value={values.company} onChange={handleChange('company')} placeholder="Organization" />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label for="password" className="me-sm-2">Password</Label>
                <Input type="password" name="password" id="password" value={values.password} onChange={handleChange('password')} placeholder="Password" />
            </FormGroup>

            {/* <Button onSubmit={clickSubmit}>Submit</Button> */}
            <Button type='submit' >Submit</Button>
        </Form>
    );
}

export default signup;