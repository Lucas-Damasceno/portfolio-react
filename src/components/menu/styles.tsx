import styled from "styled-components"

export const Header = styled.header`
  height: 70px;
  width: 100%;
  background-color: var(--light-black);
`

export const Ul = styled.ul`
  display: flex;
  height: 100%;
  margin: 0;
  justify-content: center;
  align-items: center;
  gap: 24px;
  
  li{
    list-style: none;
    color: var(--white);
    font-weight: bold;
    cursor: pointer;
  }
`