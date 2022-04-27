import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const NavTitle = styled.h1`
  color: #f2cc8f;
  font-weight: 600;
  font-size: 2.4rem;
  &:hover {
    cursor: pointer;
  }
`;

export const NavAction = styled.button`
  background-color: #f2cc8f;
  outline: #f2cc8f;
  border: 1px solid #f2cc8f;
  padding: 1rem;
  border-radius: 3px;
  margin-right: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const FooterBar = styled.footer`
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  width: 40%;
  margin: auto;
  min-height: 70vh;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid #eee;
  outline: #eee;
  font-size: 1.5rem;
  color: #fff;
  padding: 0.5rem;
  border-radius: 3px;
  width: ${props => (props.coord ? '18.25vw' : 'auto')};
`;

export const ErrorMessage = styled.span`
  color: #f582a7;
`;

export const FormAction = styled.button`
  align-self: flex-end;
  background-color: #712b75;
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
      color: '#2B2B2B',
      border: '#423F3E',
      background: '#423F3E',
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
    primary: '#f2cc8f'
  }
});

export const selectStyle = {
  placeholder: placeholderStyles => ({
    ...placeholderStyles,
    color: '#fff'
  }),
  control: (base, state) => ({
    ...base,
    background: '#000',
    color: '#fff'
  }),
  input: base => ({
    ...base,
    color: '#fff'
  })
};
