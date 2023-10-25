import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { getAllTodos } from './apiService'
import Note from './Note';

const Notes = (props) => {

    const [data, setData] = useState([]);

    const loadData = async (page) => {
        try {
            const todos = await getAllTodos();
            setData(todos);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadData();
    }, [props.refreshToken]);

    return (
        <Row>
            {data.map((todo) => (
                <Col key={todo.id} md={6} lg={4} xl={3}><Note todos={todo} setRefreshToken={props.setRefreshToken} /></Col>
            ))}
        </Row>
    )
}

export default Notes