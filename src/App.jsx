import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import PlaylistDetail from './pages/PlaylistDetail'
import TrackDetail from './pages/TrackDetail'
import ArtistDetail from './pages/ArtistDetail'
import PlaylistPublic from './pages/PlaylistPublic'
import Playlists from './pages/Playlists'
import Page404 from './pages/Page404'
import PrivateRoutes from './components/auth/PrivateRoutes'

function App() {

  return (
    <>
      <Routes>
        {/* Rutas publicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/playlists/public/:id" element={<PlaylistPublic />} />

        {/* Rutas privadas */}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlists/:id" element={<PlaylistDetail />} />
          <Route path="/tracks/:id" element={<TrackDetail />} />
          <Route path="/artist/:id" element={<ArtistDetail />} />
        </Route>

        {/* Page 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>

    </>
  )
}

export default App
