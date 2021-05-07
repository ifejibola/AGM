import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { list } from './api-mod'

import { Button, Navbar, Nav, Form, FormControl, NavDropdown, ListGroup } from 'react-bootstrap'
export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })

        return function cleanup() {
            abortController.abort()
        }
    }, [])

    return (
        <div>


            <ListGroup>
                {users.map((item, i) => {
                    return <Link to={"/user/" + item._id} key={i}>
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </Link>
                })
                }

            </ListGroup>



        </div>
    )
}
