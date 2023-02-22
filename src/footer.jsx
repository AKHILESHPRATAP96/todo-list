import image from "./nathan-dumlao-LPRrEJU2GbQ-unsplash.jpg"
function Footer(){
    return(<div className="d-flex">
      <div>  <h4>7 Ways to Write a Better To-Do List and Get More Done</h4>
        <h6>1.Note Why Each To-Do on Your List Is Important</h6>
        <h6>2. Delete Low/No-Value Tasks and Nice-To-Dos</h6>
        <h6>3.Create a To-Do List for Each Week or Each Day</h6>
        <h6>4.Break Large To-Dos Down Into Smaller To-Dos</h6>
        <h6>5. Write a “What I will Probably Do” List</h6>
        <h6>6. Make Your To-Do List Public</h6>
        <h6>7. Draw Your To-Do List</h6></div>
        <div id="b"><img src={image} width={220} height={225}/> </div>
      
        
    </div>)
}
export default Footer;