import { useEffect, useState } from "react"
import { PlayListIcon } from "../icons/Svgs"
import PopUpAuth from "../shared/PopUpAuth"
import PopUpPlayList from "../shared/PopUpPlayList"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const PrincipalLayout = ({ children }) => {
    const [isShowAuth, setIsShowAuth] = useState(false)
    const [isShowPlayList, setIsShowPlayList] = useState(false)
    const tracks = useSelector((store) => store.playlistCart.tracks)

    useEffect(() => {
        if (isShowPlayList) {
            if (isShowAuth) setIsShowAuth(false)
        }
    }, [isShowPlayList])


    useEffect(() => {
        if (isShowAuth) {
            if (isShowPlayList) setIsShowAuth(false)
        }
    }, [isShowAuth])

    return (
        <section className="bg-dark text-white text-xl font-urbanist h-screen 
        grid bg-[url(/images/auth-bg-mobile.png)] 
        bg-no-repeat bg-right-bottom md:bg-[url(/images/auth-bg-desktop.png)] 
        transition-all grid-rows-[auto_1fr]">

            <header className="bg-primary-dark flex justify-between p-4 px-4 uppercase 
      items-center">
                <Link to="/">
                    <h1 className="font-semibold text-lg">Gift Music</h1>
                </Link>

                <div className="flex gap-3">
                    <button onClick={() => setIsShowAuth(!isShowAuth)}
                        className={`uppercase p-2 px-4 border border-secondary 
          rounded-full font-semibold hover:bg-primary-light 
          transition-all text-sm sm:text-base ${isShowAuth && "bg-primary-light"}`}>
                        Mi cuenta</button>

                    <button onClick={() => setIsShowPlayList(!isShowPlayList)}
                        className={`uppercase p-2 px-4 border border-secondary 
          rounded-full font-semibold hover:bg-primary-light 
          transition-all flex items-center gap-2 ${isShowPlayList && "bg-primary-light"}`}>
                        <PlayListIcon />
                        <span className="hidden sm:inline">Grabando</span> {tracks.length}
                    </button>
                </div>

            </header>
            <section className="py-14 px-4 overflow-y-auto">
                <main className="w-[min(520px,_100%)] mx-auto bg-primary-dark py-8 px-6
        sm:px-14 rounded-3xl">
                    {children}
                </main>
            </section>

            <PopUpAuth isShowAuth={isShowAuth} />
            <PopUpPlayList isShowPlayList={isShowPlayList} />
        </section>
    )
}
export default PrincipalLayout