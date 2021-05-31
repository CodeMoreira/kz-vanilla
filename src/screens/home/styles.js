import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.span`
  color: ${props => props.color ? props.color : '#f5f5f5'};
  font-size: ${props => props.size ? props.size : '18px'};
`;

export const ProfileContainer = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-top:2px solid #f80530;
  border-bottom:2px solid #f80530;
  background-color: #111;
`;

export const SearchPlayer = styled.input`
  font-size: 20px;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
`;

export const Button = styled.button`
  height: 40px;
  background-color: #333;
  padding: 10px;
  margin-bottom: 10px;
  margin-left: ${props => props.marginLeft ? props.marginLeft : '0px'};
  border-radius: 10px;
  transition: 0.3s;
  cursor:pointer;
  :hover{
    background-color: #f80530;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const SelectTierContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f5f5f5;
`;

export const ContainerRecords = styled.div`
  width: 470px;
  height: 500px;
  padding: 10px;
  background-color: #333;
  border:1px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow-y: auto;
`;

export const ContainerInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;