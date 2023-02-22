
import Modal from "react-bootstrap/Modal"
import { useState } from "react"
let TODO = (props) => {
    let [show, setshow] = useState(false)
    let [value,setvalue]=useState(props.todo.value)
    let done=(event)=>{
        setshow(false);
        props.edit({id:props.todo.id,
        value:value})
    }
    const onChange=(event)=>{
        setvalue(event.target.value)

       }


    return (
        <div >
            <table className="table">
                <tbody>
                    <tr>
                        <td style={{ width: 15 }} className="text-center">
                            {props.number}
                        </td>
                        <td style={{ width: 15 }} className="text-center">
                            <input type="checkbox" onChange={() => { props.handledone(props.todo) }} checked={props.todo.isDone} />
                        </td>
                        <td style={{ width: 150, textDecoration: props.todo.isDone ? "line-through" : "" }} className="text-center">
                            {props.todo.value}
                        </td>
                        <td style={{ width: 50 }} className="text-center">
                            <input type="button" value="EDIT" className="btn btn-warning" onClick={()=>{setshow(true)}} />
                        </td>
                        <td style={{ width: 50 }} className="text-center" onClick={() => { props.delete(props.todo) }}>
                            <input type="button" value="DELETE" className="btn btn-danger" />
                        </td>
                    </tr>
                </tbody></table>
            <Modal show={show}>
                <Modal.Header>EDIT TODO VALUE</Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control"
                        placeholder={value} onChange={onChange}/>
                </Modal.Body>
                <Modal.Footer>
                    <input type="button" className="btn btn-secondary" value="cancel" onClick={()=>{setshow(false)}}/>
                    <input type="button" className="btn btn-success" value="save" onClick={done}/>
                </Modal.Footer>

            </Modal>

        </div>
    )
}
export default TODO;