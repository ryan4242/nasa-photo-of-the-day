import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
  height: 13vh;
  background: #2a2d47;
  color: #fff;
  padding: 0 3vw;
  box-shadow: 0px 1px 10px 1px rgb(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #fff;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  background: #2a2d47;
  color: #fff;

  cursor: ${props => (props.button ? 'pointer' : null)};
  padding: ${props => (props.button ? '13px' : null)};
`;

const Header = props => {
  return (
    <HeaderStyle>
      <h1 className='title'>NASA Photo Of The Day</h1>
      <form onSubmit={e => {
        e.preventDefault();
        props.changeDate(document.querySelector('#date').value)
        }}>
        <Input
          id='date' 
          type='date'
        />
        <Input button type='submit' value='Change Date!' />
      </form>
    </HeaderStyle>
  )
}

export default Header;