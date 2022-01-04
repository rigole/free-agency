import PropTypes from 'prop-types';
import logo from  '../../logo.svg'
import styled from "styled-components";
import colors from "../../utils/style/colors";

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
  padding-left: 15px;
`

const CardTitle = styled.span` 
    color: black;
    font-size: 22px;
    font-weight: normal;
    align-self: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  align-self: center;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  &:hover{
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }

`


function Card({ label, title, picture}) {
    return(
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" height={80} width={80}/>
            <CardTitle>{title}</CardTitle>
        </CardWrapper>
    )
}


Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps={
    label: "",
    title: "",
    picture:logo,
}


export default Card