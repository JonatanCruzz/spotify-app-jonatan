import PlaylistCard from "./PlaylistCard"

const PlaylistList = ({ playlists }) => {

    const CASSETTE_HEIGHT = 180
    const DELTA = 47
    const queantityCassette = playlists.length

    const totalHeight = `${CASSETTE_HEIGHT + (DELTA * (queantityCassette - 1))}px`

    return (
        <ul className="relative mt-8 grid place-items-center" style={{ height: totalHeight }}>
            {playlists.map((playlist, index) => (
                <PlaylistCard key={playlist.id} playlist={playlist} index={index} />
            ))}
        </ul>

    )
}
export default PlaylistList