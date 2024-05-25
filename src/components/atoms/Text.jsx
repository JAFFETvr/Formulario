import styled from "styled-components";
const TextStyled =styled.p`
   width: 50%;
   height: 40px;
   font-size: 30px;
   color: #000000;
   font-family: Georgia, 'Times New Roman', Times, serif;

`
function Text (){
    return (
        <TextStyled>Registrar alumno</TextStyled>
    )
}
export default  Text