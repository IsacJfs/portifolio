import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre</Title>
    <Paragraph tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nihil
      iure ab aperiam nam iusto saepe corporis porro, adipisci sint? Corporis
      sit tempora neque nesciunt delectus ratione, accusamus dicta natus.
    </Paragraph>
    <GithubSection>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=isacjfs&show_icons=true&theme=dracula&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=isacjfs&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSection>
  </section>
)

export default About
