import Router from "./routes/router"
import './index.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import ChakraTheme from './theme.js'

function App() {
  const theme = extendTheme(ChakraTheme)
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  )
}

export default App