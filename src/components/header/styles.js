import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  position: relative;
`;

export const Head = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

`;

export const Logo = styled.div``;

export const Menu = styled.ul`
  list-style: none;
  width: 35vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
`;

export const Item = styled.li`
  cursor: pointer;
  color: white;
  font-weight: bold;
  display: flex;

  &.button {
    padding: 5px 20px;
    color: #f3367e;
    border: 2px solid #f3367e;
    border-radius: 5px;
  }

  &:hover {
    color: rgb(72, 199, 39);
    transition: 0.2s;
  }
`;

export const SubMenu = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgb(72, 199, 39);
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: rgb(248, 248, 248);
    transition: 0.2s;
  }
`;
