import "./Footer.css"
import LogoWhite from "../../assets/img/Logo_white.png"

export default function Footer() {
  return (
    <footer className='footer'>
        <img className='footer_logo' src={LogoWhite} alt="logo"/>
        <div className='footer_info'>© 2020 Kasa. All rights reserved </div>
    </footer>
  )
}
