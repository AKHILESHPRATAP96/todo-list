import { useState } from "react"


function HOOKS(){
let [name,setstate]=useState("Rohit")//hook
setTimeout(()=>{setstate("Akhilesh")},3000)
let [number,setnumber]=useState(0)
let onClick=()=>{
    setnumber(number+1)
}
return(<div>
    <h1>name:{name}</h1>
    <h1>{number}</h1>
    <button onClick={onClick}>click</button>
</div>)

}
export default HOOKS;