import { useEffect } from "react"
import { SearchIcon } from "../components/icons/Svgs"
import PrincipalLayout from "../components/layouts/PrincipalLayout"
import axiosMusic from "../utils/configAxios"
import playlistList from "../components/playlists/playlistList"

const Playlists = () => {

  const [playlist, setPlaylist] = useState([])

  //TODO FILTAR POR PLAYLISTS DEL USUARIO

  useEffect(() => {

    axiosMusic
      .get("/api/playlists/me")
      .then(({ data }) => setPlaylist(data))
      .catch((err) => console.log(err))

  }, [])

  return (
    <PrincipalLayout>
      <form onSubmit={handleSubmit} className="bg-white/20 p-4 px-4 rounded-md flex gap-4 items-center">
        <button>
          <SearchIcon />
        </button>
        <input
          className="bg-transparent outline-none flex-1"
          placeholder="Buscar"
          type="text"
          name="query"
          required
          autoComplete="off"
          size={8}
        />
      </form>

      <playlistList playlists={playlists} />
    </PrincipalLayout>
  )
}
export default Playlists