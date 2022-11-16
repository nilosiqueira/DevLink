import './home.css'
import { Social } from '../../components/Social'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'

export default function Home() {
    return (
        <div className='home-container'>
            <h1>Nilo Siqueira</h1>
            <span>Veja meus Links 👇​</span>

            <main className='links'>
                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Canal do Youtube</p>
                    </a>
                </section>
                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Grupo privado no telegram</p>
                    </a>
                </section>
                <section className='link-area'>
                    <a href='#'>
                        <p className='link-text'>Treinamento Fábrica de Aplicativos</p>
                    </a>
                </section>

                <footer>
                    <Social url="https://facebook.com/nilosiqueiratj">
                        <FaFacebook size={35} color="#FFF" />
                    </Social>
                    <Social url="https://www.youtube.com/Nilosiqueira30">
                        <FaYoutube size={35} color="#FFF" />
                    </Social>
                    <Social url="https://www.instagram.com/nilo.siqueira/">
                        <FaInstagram size={35} color="#FFF" />
                    </Social>
                </footer>
            </main>
        </div>
    )
}