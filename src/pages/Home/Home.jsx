import logo from "../../logo.svg";
import "../../App.css";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { StyledLink } from "../../utils/Atoms";


const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${colors.backgroundLight};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;

`

const LeftCol = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink}{
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

function Home() {
  return (

   <HomeWrapper>
     <HomeContainer>
       <LeftCol>
         <StyledTitle>
           Reperez vos besoins on s'occupe du reste avec les meilleurs talents
         </StyledTitle>
         <StyledLink to="/survey/1" $isFullLink>
           Faire le test
         </StyledLink>
       </LeftCol>
     </HomeContainer>
   </HomeWrapper>
  );
}

export default Home;
