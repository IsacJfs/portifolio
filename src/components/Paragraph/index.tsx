import { Par as P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragraph = ({ children, tipo }: Props) => <P tipo={tipo}>{children}</P>

export default Paragraph
