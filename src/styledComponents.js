import styled from 'styled-components'

export const CustomBackground = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const CenterWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const ChoicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  alignitems: center;
  width: 100%;

  @media screen and (min-width: 768px){
    width: 40%;
  }
`

export const ScoreCard = styled.div`
  border: 2px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: #ffffff;
  margin-bottom: 30px;
  text-align: left;

  @media screen and (min-width: 768px){
    width: 60%;
  }
`

export const Choices = styled.div`
  display: flex;
  flex-direction: column;
  
`

export const Option = styled.p`
  font-family: 'Bree Serif';
  color: ${props => props.color || '#ffffff'};
  font-size: 28px;
  font-weight: ${props => props.fontWeight || 300};
  margin: 0;
`

export const Score = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  padding: 10px 20px;
  border-radius: 10px;
`

export const ScoreValue = styled.p`
  font-family: 'Roboto';
  margin: 10px;
  text-align: center;
  font-size: 45px;
`

export const CustomButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`

export const CustomImg = styled.img`
  width: 120px;
  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 170px;
  }
  @media screen and (min-width: 768px){
    width: 200px;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 24px;
  padding-bottom: 20px;
  text-align: center;
  color: #ffffff;

  @media screen and (min-width: 768px){
    font-size: 34px;
  }
`

export const ResetButton = styled.button`
  font-family: 'Bree Serif';
  font-size: 15px;
  background-color: #ffffff;
  width: 150px;
  height: 38px;
  border-radius: 10px;
  border: none;
  color: #223a5f;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`

export const PopButton = styled.button`
  background-color: #fff;
  border: none;
  font-family: 'Bree Serif';
  height: 38px;
  width: 80px;
  align-self: flex-end;
  border-radius: 5px;
  color: #223a5f;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

export const PopUpContainer = styled.div`
  align-self: flex-end;
`

export const RulesImg = styled.img`
  width: 100%;
  height: auto
  max-width: 1000px;
  margin: 10px;
`

export const ImgBackground = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
