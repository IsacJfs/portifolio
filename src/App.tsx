import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import darkTheme from './themes/dark'
import lightTheme from './themes/light'

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false)

  function toggleTheme() {
    setUseDarkTheme(!useDarkTheme)
  }

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeThemes={toggleTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
