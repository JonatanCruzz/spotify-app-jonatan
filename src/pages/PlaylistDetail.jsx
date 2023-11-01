import { useEffect, useRef, useState } from "react"
import { PencilIcon, SaveIcon, ShareIcon, TrashIcon } from "../components/icons/Svgs"
import PrincipalLayout from "../components/layouts/PrincipalLayout"
import axiosMusic from "../utils/configAxios"
import { useParams } from "react-router-dom"

const PlaylistDetail = () => {

  const [isShowFront, setIsShowFront] = useState(true)
  const [playlist, setPlaylist] = useState(null)

  const { id } = useParams();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      title: e.current.title.value,
      to: e.current.to.value,
      message: e.current.message.value,
    };

    axiosMusic
      .patch(`/api/playlists/${id}`, data)
      .then(() => {
        alert("Playlist actualizada correctamente");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axiosMusic
      .get(`/api/playlists/${id}`)
      .then(({ data }) => {
        setPlaylist(data)
        formRef.current.title.value = data.title
        formRef.current.to.value = data.to
        formRef.current.message.value = data.message
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <PrincipalLayout>
      <form
        onsSubmit={handleSubmit}
        ref={formRef}
        className="top-24 uppercase grid justify-center p-4 gap-1 rounded-md font-semibold transition-all">

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

            <button
              type="submit"
              className="absolute bottom-4 left-5 border-2 rounded-full p-[3px]">
              <SaveIcon />
            </button>

            <button
              type="button"
              className="absolute bottom-4 left-[60px] border-2 rounded-full p-[3px]">
              <TrashIcon />
            </button>

            <button
              type="button"
              className="absolute bottom-4 right-5 border-2 rounded-full p-[3px]">
              <ShareIcon />
            </button>
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

      </form>
    </PrincipalLayout>
  )
}
export default PlaylistDetail