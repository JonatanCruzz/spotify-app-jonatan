import { Link, useNavigate } from "react-router-dom"
import ContainerAuth from "../components/layouts/ContainerAuth"
import { loginThunk } from "../store/slices/user.slice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector((store) => store.user.token)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    dispatch(loginThunk(data))
  }

  useEffect(() => {
    if (token !== "") {
      navigate("/")
    }
  }, [token])

  return (
    <ContainerAuth>
      {/* Banner */}
      <div className="hidden md:block">
        <img className="max-w-[350px]" src="/images/banner-login.png" alt="" />
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} action="" className="[&>label]:grid [&>label]:gap-7 grid gap-6
        w-[min(100%,300px)] mx-auto items-center">
        <h1 className="text-3xl uppercase 
          font-semibold">Iniciar Sesión</h1>

        <label>
          <span className="text-white/50 text-sm">E-mail</span>
          <input name="email" type="email" className="bg-transparent border-b 
            border-secondary outline-none"/>
        </label>

        <label>
          <span className="text-white/50 text-sm">Contraseña</span>
          <input name="password" type="password" className="bg-transparent border-b 
            border-secondary outline-none"/>
        </label>

        <button className="bg-primary-light rounded-full py-1 px-4 max-w-max
          mx-auto uppercase text-sm font-semibold shadow-lg shadow-purple-400/40
          hover:tracking-widest transition-all mt-6"
          type="submit">Entrar</button>

        <Link className="text-center underline" to="/register">
          o crear una cuenta nueva
        </Link>

      </form>
    </ContainerAuth>
  )
}
export default Login