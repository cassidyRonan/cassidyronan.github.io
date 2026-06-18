import './CodexNavbar.css'
import Logo from '../../assets/RC_Short_Color.svg'
import CrescentCall from '../../assets/CrescentCall.svg'
import MenuIcon from '../../assets/MenuIcon.svg'
import CloseIcon from '../../assets/CloseIcon.svg'
import { useState } from 'react'

function CodexNavbar(){
    const [menuActive, setMenuActive] = useState(false);

    return (
        <>
            <nav className='pageNavbar'>
                <div className='navBrandContainer'>
                    <a href="/"><img src={Logo} className='navLogo'/></a>
                </div>
                <div className='navLinksContainer'>
                    <a href="https://www.linkedin.com/in/ronan-cassidy/" className='navContactButton'>Contact</a>
                    <button className='menuButton' onClick={() => setMenuActive(!menuActive)}><img className='menuIcon' src={menuActive ? CloseIcon:MenuIcon}/></button>
                </div>
            </nav>
            <div className='codexDivider'>
                <div className='crescentDivider'></div>
                <img src={CrescentCall} className='crescentIcon' />
            </div>
            {
                menuActive ? (
                <div className='navContactDrop'>
                    <a href="/about" className='navContactDropButton'>&gt; About</a>
                    <a href="/portfolio" className='navContactDropButton'>&gt; Portfolio</a>
                    <a href="/contact" className='navContactDropButton'>&gt; Contact</a>
                </div>
                ) : (<></>)
            }
        </>
    )
}

export default CodexNavbar