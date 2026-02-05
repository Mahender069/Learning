import { Link } from 'react-router'
import darkModeIcon from 'url:../assets/images/dark-mode.png'
export default function Header() {
  return (
    <>
        <header>
            <Link className='text1' to={'/'}>Where in the world</Link>
            <div id='Mode'>
              <img src={darkModeIcon}></img>
              <p className='text2'>&nbsp;&nbsp; Dark Mode</p>
            </div>
        </header>
    </>
  )
}
