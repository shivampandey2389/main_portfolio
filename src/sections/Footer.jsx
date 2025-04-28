import { socialImgs } from "../constants"

const Footer = ( )=>{
  return(
    <footer className="footer"> 
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Thanks for visiting</a>
        </div>
        <div className="socials">
          {socialImgs.map((img)=>(
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} alt="social" width={25} height={25} />
            </a>
          ))}
        </div>

          <div className="flex flex-col justify-center">
            <div className="text-center md:text-end">
            © {new Date().getFullYear()}  Shivam Pandey All rights resevered.
            </div>
          </div>

      </div>
    </footer>
  )
}
export default Footer