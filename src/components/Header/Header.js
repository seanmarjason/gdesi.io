import './Header.css';
import gdesiLogo from '../../assets/gdesiLogo_white.png'
// import facebookLogo from '../../assets/socials/iconmonstr-facebook-6-240.png'
// import instagramLogo from '../../assets/socials/iconmonstr-instagram-11-240.png'

export function Header() {
  return (
    <div id='header'>
      <div id='logo'>
        <img src={gdesiLogo} alt='gdesi_logo'></img>
      </div>
      <div id='socials'>
        {/* <a href='https://www.facebook.com/gdesi.io'><img className='socialMediaIcon' src={facebookLogo} alt='facebook-gdesi'></img></a> */}
        {/* <a href='https://www.instagram.com/gdesi.io/'><img className='socialMediaIcon' src={instagramLogo} alt='facebook-gdesi'></img></a> */}
      </div>
    </div>
  );
}
