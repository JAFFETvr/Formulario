import styled from "styled-components"
const InputStyled = styled.input`
  width: 50%;
   height: 40px;
   border: 1px gray solid;
   border-radius: 5px;
   font-size: 18px;
   color: #0308a3;
   display: block;
`

function Input (props){
   const handlerOnChange= (event)=>{
      props.fnVal(event.target.value)
  }
    
    return(
 <InputStyled type={props.type} placeholder={props.placeholder}  value={props.val} onChange={handlerOnChange} />
    )
}
export default  Input