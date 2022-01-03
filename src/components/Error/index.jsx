import styled from "styled-components";
import colors from "../../utils/style/colors";

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`
const Illustration = styled.img`
 max-width: 800px;
`


function Error() {
   return(
       <ErrorWrapper>
           <ErrorTitle>Desole  Cette page n'existe pas</ErrorTitle>
           <Illustration src="https://i.imgur.com/A040Lxr.png" alt="error"/>
           <ErrorSubtitle>
               Cette page n'existe pas
           </ErrorSubtitle>

       </ErrorWrapper>
   )
}

export default Error