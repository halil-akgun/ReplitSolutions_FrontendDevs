import { Card, CardBody, CardFooter, CardText, FormGroup, Input, Label } from 'reactstrap'
import { deleteTodo, updateTodo } from './apiService';
import { AiFillDelete } from 'react-icons/ai';
import Swal from "sweetalert2";

const Note = (props) => {

    const data = props.todos;

    const handleCompleted = async (e) => {
        e.preventDefault()
        try {
            await updateTodo({ ...data, completed: e.target.checked });
            props.setRefreshToken(Math.random());
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async () => {

        const resp = await Swal.fire({
            icon: 'question',
            title: 'Attention',
            text: 'Are you sure you want to delete this note?',
            showCancelButton: true
        })

        if (!resp.isConfirmed) return;

        try {
            await deleteTodo(data.id);
            props.setRefreshToken(Math.random());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card
            className="my-2 todo-card"
            style={{
                width: '18rem'
            }}
        >
            <CardBody>
                <CardText>
                    {data.message}
                </CardText>
            </CardBody>
            <CardFooter>
                <FormGroup check>
                    <Input
                        id="completed"
                        name="checkbox"
                        type="checkbox"
                        checked={data.completed}
                        onChange={handleCompleted}
                    />
                    <Label
                        check
                        for="completed"
                    >
                    </Label>
                </FormGroup>
                <AiFillDelete onClick={handleDelete} />
            </CardFooter>
        </Card>
    )
}

export default Note