let Time=()=>{
    let time=new Date();
    return(
<p>this is the current Time: {time.toLocaleDateString()}-{time.toLocaleTimeString()}</p>
    )
}
export default Time;