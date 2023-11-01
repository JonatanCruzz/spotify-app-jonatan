const ContainerAuth = ({ children }) => {
    return (
        <main className="bg-dark text-white text-xl font-urbanist h-screen 
        grid items-center px-4 bg-[url(/images/auth-bg-mobile.png)] 
        bg-no-repeat bg-right-bottom md:bg-[url(/images/auth-bg-desktop.png)] 
        transition-all">
            <section className="grid md:grid-cols-[auto,_400px] sm:justify-center 
            gap-10 items-center">
                {children}
            </section>
        </main>
    )
}
export default ContainerAuth