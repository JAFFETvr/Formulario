import Input from "../atoms/Input"
import Label from "../atoms/Label"
function Lista (props){
    return (
        <>   
        <Label text={props.text} ></Label>
        <Input type={props.type} placeholder={props.placeholder} val={props.val}fnVal={props.fnVal}/>
           
        </>
    )
}
export default Lista