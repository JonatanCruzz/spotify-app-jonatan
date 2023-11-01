import { useState } from "react"
import "./PopUpPlayList.css"
import { PencilIcon } from "../icons/Svgs"
import { useDispatch, useSelector } from "react-redux"
import TrackCard from "./TrackCard"
import axiosMusic from "../../utils/configAxios"
import { clearTasks } from "../../store/slices/playlistCart.slice"

const PopUpPlayList = ({ isShowPlayList }) => {
    const [isShowFront, setIsShowFront] = useState(true)

    const tracks = useSelector((store) => store.playlistCart.tracks)
    const distpach = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: e.target.title.value,
            to: e.target.to.value,
            message: e.target.message.value,
            tracks,
        };

        axiosMusic
            .post("api/playlists", data)
            .then(() => {
                e.target.reset()
                distpach(clearTasks())
                alert("Playlist creada con éxito")

            })
            .catch((error) => console.log(error));
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`fixed top-24 bg-primary-light uppercase grid p-4 gap-1 rounded-md 
            justify-start font-semibold border border-secondary 
            ${isShowPlayList ? "right-10" : "-right-full"} transition-all`}>

            <div className={`relative cassette ${isShowFront ? "front" : "back"}`}>
                {/* Frontal */}
                <div className="front">
                    <img src="/images/cassette.png" alt="" />
                    <div className="bg-white flex p-1 items-center rounded-md w-[198px] absolute 
                        top-[15px] left-[20px] gap-1 text-sm">
                        <input
                            className="bg-transparent flex-1 outline-none text-black"
                            id="title"
                            type="text"
                            placeholder="Título"
                            size={15}
                        />
                        <label htmlFor="title">
                            <PencilIcon />
                        </label>
                    </div>
                </div>

                {/* Trasera */}
                <div className="absolute top-0 back">
                    <img src="/images/cassette.png" alt="" />
                    <div className="bg-white flex p-1 items-center rounded-md w-[198px] absolute 
                        top-[15px] left-[20px] gap-1 text-sm">
                        <input
                            className="bg-transparent flex-1 outline-none text-black"
                            placeholder="Destinatario"
                            id="to"
                            type="text"
                            size={15}
                        />
                        <label htmlFor="to">
                            <PencilIcon />
                        </label>
                    </div>
                    <div className="bg-white flex p-1 items-center rounded-md w-[198px] absolute 
                        top-[50px] left-[20px] gap-1 text-sm">
                        <textarea
                            name="message"
                            rows={4}
                            className="resize-none outline-none text-black"
                            placeholder="Mensaje"
                        >
                        </textarea>

                    </div>
                </div>
            </div>

            <button type="button" className="border-2 border-white uppercase p-2 px-8 rounded-full max-w-max mx-auto
            hover:text-secondary hover:border-secondary transition-colors text-sm"
                onClick={() => setIsShowFront(!isShowFront)}>
                {isShowFront ? "Lado B" : "Lado A"}
            </button>

            <section className="normal-case font-normal w-[238px] max-h-[170px] overflow-y-auto">
                {
                    tracks.map((track) => <TrackCard key={track.id} track={track} imageSize="sm" showMinusBtn />)
                }
            </section>

            <button type="submit" className="border-2 border-white uppercase p-2 px-8 rounded-full max-w-max mx-auto
            hover:text-secondary hover:border-secondary transition-colors">
                Crear
            </button>
        </form>
    )
}
export default PopUpPlayList