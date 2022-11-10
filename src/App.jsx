import Navigation from './components/Navigation/Navigation'
import { Routes, Route } from 'react-router-dom'
import { PageHome } from './pages/PageHome/PageHome'
import { Profile } from './pages/Profile/Profile'
import { MostLikedPost } from './pages/MostLikedPost/MostLikedPost'
import { MostCommentPost } from './pages/MostCommentPost/MostCommentPost'
import { Posts } from './pages/Posts/Posts'
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<PageHome />}
        />
        <Route path='/profile/'>
          <Route
            path={':id'}
            element={<Profile />}
          />
        </Route>
        <Route
          path='/mostLikedPost'
          element={<MostLikedPost />}
        />
        <Route
          path='/mostCommentPost'
          element={<MostCommentPost />}
        />
        <Route path='/posts/'>
          <Route
            path={':id'}
            element={<Posts />}
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
