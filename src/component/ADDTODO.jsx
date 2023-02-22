import { useState } from "react"
let ADDTODO = (props) => {
    const [value, setvalue] = useState('')
    let onSubmit = (event) => {
        event.preventDefault()
        props.addtodo(value)
        setvalue('')
    }
    let onvaluechange=(event)=>{
        setvalue(event.target.value)
        
    }


    return (<div className="container">
        <form onSubmit={onSubmit}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="add your todo" value={value} onChange={onvaluechange} />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-success">ADD TODO</button>
                </div>
            </div>
        </form>
    </div>)
}
export default ADDTODO;