import styled from "styled-components"

const ButtonStyled = styled.button`
    
   width: 50%;
   height: 40px;
   background-color:  #003452;
   border: 1px gray solid;
   border-radius: 5px;
   color: white;
   box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
   margin-top: 20px;


   &:hover {
    background-color: #4d53fd;
   }
    
    `
function Button ({title,onclick}){
    return (
        <ButtonStyled onClick={onclick}>{title}</ButtonStyled>
    )
}
export default Button