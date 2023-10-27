import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph tipo="secundario">Lista de tarefas feitas com VueJs</Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
