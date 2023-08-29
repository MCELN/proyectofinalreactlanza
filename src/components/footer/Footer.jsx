import React from 'react'
import style from './footer.module.css';


const Footer = () => {
return (
        <footer className={style.footer}>        
            <div className={style.address}>
                <a href="./index.html"><img src="./assets/logoWS.png" alt="" /></a>
                <address>
                    <p>Página desarrollada por Cristian Lanza.</p>
                    <p>Ciudad de Rosario.</p>
                    <p>Provincia de Santa Fe.</p>
                    <p>Argentina.</p>
                </address>
            </div>

            <div className={style.email}>
                <p>E-Mail.</p>
                <a href="mailto:cristianlanza@gmail.com"><img src="./assets/social/mail.png" alt="mail" /></a>
            </div>

            <div className={style.social}>
                <div>
                    <p>Nuestras redes sociales:</p>
                </div>
                <div className={style.socialImg}>
                    <a href="https://facebook.com/fraganciasdenicho" target="_blank" rel="noopener noreferrer"><img src="./assets/social/icons8-facebook.png"
                        alt="Logo Facebook" /></a>
                    <a href="https://instagram.com/fraganciasdenicho" target="_blank" rel="noopener noreferrer"><img
                        src="./assets/social/icons8-instagram.png" alt="Logo Instagram" /></a>
                    <a href="https://twitter.com/fraganciasdenicho" target="_blank" rel="noopener noreferrer"><img src="./assets/social/icons8-twitter.png"
                        alt="Logo Twitter" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;