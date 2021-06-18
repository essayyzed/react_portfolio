import Image from '/home/essayyzed/Documents/react_portfolio/src/monstera.jpg'

export default function Home() {
    return (
        <main>
            <img
                src={Image}
                alt="Monstera Leaves"
                className="absolute object-cover w-full h-full "
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-sung home-name">An Aspiring Geek.</h1>
            </section>
        </main>
    )
}
