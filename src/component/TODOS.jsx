import { useState } from "react";
import ADDTODO from "./ADDTODO";
import TODO from "./TODO";

function TODOS() {
   
    let [todos, settodo] = useState(localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []
    )
    let ondelete = (todo) => {
        let todoarr=todos.filter(item=>
            item.id!==todo.id
        )
        updatestate(todoarr)

    }
    let handledone = (todo) => {
        let todoarr = [...todos]
        todoarr.map(item => {
            if (item.id == todo.id) {
                item.isDone = !item.isDone
            }
            return item
        })
        updatestate(todoarr)

    }
    let addnewtodo = (todovalue) => {
        if (todovalue) {
            let todoarr = [...todos]
            todoarr.push({
                id: new Date().getTime(),
                value: todovalue,
                isDone: false
            })
            updatestate(todoarr)
        }


    }
    let onEdit = (todo) => {
        let todoarr = [...todos]
        todoarr.map(item => {
            if (item.id == todo.id) {
                item.value = todo.value
            }
            return item
        })
        updatestate(todoarr)
    }
    let updatestate = (todoarr) => {
        

        settodo(todoarr);
        localStorage.setItem("todos", JSON.stringify(todoarr))
    }






    return (<div >{todos?.length == 0 ? <h1>no todos present</h1> : todos.map((item, index) => {
        return (<TODO key={index}
            todo={item} number={index + 1}
            handledone={handledone} delete={ondelete} edit={onEdit}></TODO>)
    })

    }
        <ADDTODO addtodo={addnewtodo}></ADDTODO>
    </div>)

}
export default TODOS;