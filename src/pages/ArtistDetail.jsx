import { useEffect, useState } from "react"
import PrincipalLayout from "../components/layouts/PrincipalLayout"
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

const ArtistDetail = () => {
  const [artistInfo, setArtistInfo] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    axiosMusic
      .get(`/api/artists/${id}`)
      .then(({ data }) => setArtistInfo(data))
      .catch((err) => console.log(err))
  }, [id])

  return (
    <PrincipalLayout>
      <h3 className="uppercase">Album del artista</h3>

      <section>
        <Swiper className="mySwiper" breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}>
          {
            artistInfo?.albums.map((album) => (
              <SwiperSlide key={album.id}>
                <article className="text-sm grid gap-[2px]">
                  <header className="rounded-xl overflow-hidden">
                    <img src={album.images[1].url} alt="" />
                  </header>

                  <h5 className="line-clamp-1 font-semibold">{album.name}</h5>
                  <span className="line-clamp-1 text-slate-400">{album.artist[0].name}</span>
                </article>
              </SwiperSlide>
            ))}

        </Swiper>
      </section>
    </PrincipalLayout>
  )
}
export default ArtistDetail