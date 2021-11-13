import React, { BaseSyntheticEvent } from 'react';
import css from "styled-jsx/css";
import ImageButton from '../components/ImageButton';
import TiltingDiv from '../components/TiltingDiv';
import router from 'next/dist/client/router';
import dynamic from "next/dynamic"

const pic_github = '/images/logos/ghlogo.svg';
const pic_email = '/images/logos/emlogo.svg';
const pic_linkedin = '/images/logos/lilogo.svg';
// const pic_phone = '/images/logos/phlogo.svg';
// const pic_profile = '/images/profilepic.webp';

const LazyParticleBackdrop = dynamic(
    () => import('../components/ParticleBackdrop'),
    { loading: () => <p>...</p> }
)

const PageStyle = css`
    div {
        min-height: 100vh;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
    }
`

const FooterStyle = css`
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    a:link {
        text-decoration: none;
        color: #E5E5E5;
    }

    a:visited {
        color: inherit;
    }
`

const ContentStyle = css`
    div {
        background-color: #1e2128;
        padding: 5vmin;
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.8);
        border-radius: 10px;
        justify-content: center;
    }
`

const App = () => <Page />

const Page = () =>
    <div>
        <style jsx>{PageStyle}</style>
        <LazyParticleBackdrop />
        <Content />
    </div>

const Content = () => {
    return (
        <TiltingDiv style={{ width: '50vmin', height: '40vmin' }}>
            <div>
                <h1>Oliver Legg</h1>
                <Footer />
                <style jsx>{ContentStyle}</style>
            </div>
        </TiltingDiv>
    )
}

const handleClick = (e: BaseSyntheticEvent, href: string) => {
    e.preventDefault();
    router.replace(href);
}

const Footer = () => {
    return (
        <div>
            <style jsx>{FooterStyle}</style>
            <ImageButton
                href="https://github.com/OleeL"
                src={pic_github}
                alt="GitHub" />
            <ImageButton
                onClick={(e: BaseSyntheticEvent) => {
                    return handleClick(e, "mailto:oliglegg@hotmail.co.uk")}
                }
                src={pic_email}
                href="."
                alt="Email" />
            <ImageButton
                href="https://linkedin.com/in/leggoli"
                src={pic_linkedin}
                alt="LinkedIn" />
        </div>
    )
}

// const PortfolioLink = () => {
//     const [hovering, setHovering] = useState(false);
//     const spring = useSpring({
//         transform: hovering ? `scale(1.2)` : `scale(1)`,
//         margin: 0,
//         fontSize: `calc(2.5vmin)`
//     });

//     return (
//         <Link href="/portfolio">
//             <a
//                 onMouseEnter={() => {setHovering(true)}}
//                 onMouseLeave={() => {setHovering(false)}}>
//                 <style jsx>{FooterStyle}</style>
//                 <animated.h2 style={spring}>Portfolio</animated.h2>
//             </a>
//         </Link>
//     )
// }

export default App;
