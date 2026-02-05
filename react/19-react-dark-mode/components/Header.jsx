import { Link } from "react-router";
import darkModeIcon from "url:../assets/images/dark-mode.png";
import lightModeIcon from "url:../assets/images/light-mode.png";

export default function Header({theme}) {
  const [isdark,setIsDark]=theme;
  console.log('rendering header');
  return (
    <>
      <header className={isdark?'dark':''}>
        <Link className="text1" to={"/"}>
          Where in the world
        </Link>
        <div
          id="Mode"
          onClick={() => {
            setIsDark(!isdark);
            localStorage.setItem('isdark',!isdark);
          }}
        >
          <img src={isdark ? lightModeIcon : darkModeIcon}></img>
          <p className="text2">
            &nbsp;&nbsp;{isdark ? "Light Mode" : "Dark Mode"}
          </p>
        </div>
      </header>
    </>
  );
}
