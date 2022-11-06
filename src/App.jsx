import Navigation from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import { PageHome } from './pages/PageHome/PageHome'
import { Profile } from './pages/Profile/Profile'
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<PageHome />}
        />
        <Route
          path='/profile/'>
           <Route 
            path={':id'}
          element={<Profile />}
          />
          </Route>
        
      </Routes>
    </div>
  )
}

export default App
