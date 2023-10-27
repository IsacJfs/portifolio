import styled from 'styled-components'
import { Paragraph } from '../../components/Paragraph/styles'

export const Describe = styled(Paragraph)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ButtomStyle = styled.button`
  font-size: 10;
  font-weight: bold;
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`
export const SideContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
