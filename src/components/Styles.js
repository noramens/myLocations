import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const NavTitle = styled.h1`
  color: #712b75;
  font-weight: 600;
  font-size: 2.4rem;
  font-family: 'Water Brush', cursive;
  &:hover {
    cursor: pointer;
  }
`;

export const NavAction = styled.button`
  background: #fff;
  outline: #fff;
  border: 1px solid #fff;
  color: #712b75;
  padding: 1rem;
  margin-right: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  border-bottom: ${props => (props.isActive ? '3px solid #712b75 ' : 'none')};
  &:hover {
    cursor: pointer;
  }
`;

export const FooterBar = styled.footer`
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  width: 30%;
  margin: auto;
  min-height: 70vh;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid #787a91;
  outline: #787a91;
  font-size: 1.1rem;
  font-weight: 400;
  color: #000;
  padding: 0.5rem;
  border-radius: 3px;
  width: ${props => (props.coord ? '13.35vw' : 'auto')};
  &:focus {
    outline: 1.2px solid #712b75;
  }
`;

export const ErrorMessage = styled.span`
  color: #f582a7;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const FormAction = styled.button`
  align-self: flex-end;
  background-color: ${props => (props.secondary ? '#fff' : '#712b75')};
  color: ${props => (props.secondary ? '#712b75' : '#fff')};
  outline: #712b75;
  border: 1px solid #712b75;
  padding: 10px 20px;
  border-radius: 3px;
  margin-top: 2rem;
  font-weight: 600;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
  ${props =>
    props.disabled && {
      color: '#DDD',
      border: '#EEE',
      background: '#EEE',
      '&:hover': {
        cursor: 'no-drop'
      }
    }}
`;

export const FieldWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CoordinatesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`;

export const CoordinateInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const themeStyles = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#787A91',
    primary: '#712b75'
  }
});

export const selectStyle = {
  control: (base, state) => ({
    ...base,
    border: '1px solid #787a91',
    fontSize: '1.1rem',
    fontWeight: '400'
  })
};

export const Label = styled.label`
  font-weight: 300;
`;
