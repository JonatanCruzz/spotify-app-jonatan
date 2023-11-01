import { Link } from "react-router-dom"
import { AddIcon, MinusIcon, PlayIcon } from "../icons/Svgs"
import { addTrack, removeTrack } from "../../store/slices/playlistCart.slice"
import { useDispatch } from "react-redux"

const TrackCard = ({ track, showPlayBtn, showAddBtn, imageSize = "base", showMinusBtn }) => {

    const distpach = useDispatch();

    const handleAddTrack = (e) => {
        distpach(addTrack(track))
    }

    const handleRemoveTrack = (e) => {
        distpach(removeTrack(track.id))
    }

    const imageSizes = {
        base: "w-[58px] h-[58px]",
        sm: "w-[48px] h-[48px]",
        large: "w-[100px] h-[100px]"
    }


    return (
        <article className="flex gap-4 items-center hover:bg-white/20 transition-colors rounded-md p-1">
            {/* Track image */}
            <div className={`w-[58px] h-[58px] rounded-md overflow-hidden ${imageSizes[imageSize]}`}>
                <img src={track.album.images[2].url} alt="" />
            </div>

            {/* Track details */}
            <div className="flex-1 text-sm grid gap-1">
                <Link to={`tracks/${track.id}`}
                    className="font-semibold line-clamp-1 hover:text-secondary transition-colors">
                    {track.name}
                </Link>
                {/* <h5 className="text-slate-400 line-clamp-1">{track.artists[0].name}</h5> */}
                <ul className="flex gap-2">
                    {
                        track.artists.slice(0, 2).map((artist, index, array) => (
                            <li key={artist.id}>
                                <Link
                                    className="hover:text-secondary transition-colors line-clamp-1"
                                    to={`/artists/${artist.id}`}>
                                    {artist.name} {array.length - 1 !== index && ","}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 pr-1">
                {
                    showPlayBtn && (
                        <button>
                            <PlayIcon />
                        </button>
                    )
                }
                {
                    showAddBtn && (
                        <button onClickCapture={handleAddTrack}>
                            <AddIcon />
                        </button>
                    )
                }
                {
                    showMinusBtn && (
                        <button onClick={handleRemoveTrack}>
                            <MinusIcon />
                        </button>
                    )
                }
            </div>
        </article>
    )
}
export default TrackCard