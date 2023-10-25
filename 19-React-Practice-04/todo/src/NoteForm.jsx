import React, { useEffect, useRef, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { createTodo, getAllTodos } from './apiService'

const NoteForm = (props) => {

    const [message, setMessage] = useState('');
    const initialState = {
        completed: false
    };
    const inputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createTodo({ ...initialState, message });
        } catch (error) {
            console.log(error);
        }
        props.setRefreshToken(Math.random());
        setMessage('');
        inputRef.current.focus();
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="title">
                        Title
                    </Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder=""
                        type="text"
                        rows="1"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ref={inputRef}
                    />
                </FormGroup>
                <Button className='bg-primary'>
                    Create Note
                </Button>
            </Form>
        </div>
    )
}

export default NoteForm

