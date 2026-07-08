import SebriumIndustries, { WebDesignPage } from './SebriumIndustries_1'

function App() {
  if (window.location.pathname === '/web-design') {
    return <WebDesignPage />
  }

  return <SebriumIndustries />
}

export default App
