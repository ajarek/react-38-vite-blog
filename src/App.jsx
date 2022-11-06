import Navigation from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import { PageHome } from './pages/PageHome/PageHome'
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<PageHome />}
        />
      </Routes>
    </div>
  )
}

export default App
