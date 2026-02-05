import darkModeIcon from 'url:../assets/images/dark-mode.png'
export default function Header() {
  console.log('header rendering');
  return (
    <>
        <header>
            <p className='text1'>Where in the world</p>
            <div id='Mode'>
              <img src={darkModeIcon}></img>
              <p className='text2'>&nbsp;&nbsp; Dark Mode</p>
            </div>
        </header>
    </>
  )
}
