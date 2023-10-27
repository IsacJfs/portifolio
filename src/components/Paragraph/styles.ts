import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.p<Props>`
  line-height: 22px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.primaryColor
      : props.theme.secundaryColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
`
