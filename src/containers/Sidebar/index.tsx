import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import Avatar from '../../components/avatar'
import { ButtomStyle, Describe, SideContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideContainer>
      <Avatar />
      <Title fontSize={20}>Isac Sousa</Title>
      <Paragraph tipo="secundario" fontSize={16}>
        IsacJfs
      </Paragraph>
      <Describe tipo="principal" fontSize={12}>
        Engenheiro Agrônomo
      </Describe>
      <ButtomStyle>Trocar tema</ButtomStyle>
    </SideContainer>
  </aside>
)

export default Sidebar
