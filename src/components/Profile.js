// import { Link } from 'react-router-dom'
import ProfileImg from '../assets/images/avatar-300.jpg'
import LinkedInIcon from '../assets/images/linked.svg'
import GithubIcon from '../assets/images/github.svg'
const Profile = () => {

    return (
        <>
            <div className='profile'>
                <div className='profile-image'>
                    <img src={ProfileImg} alt='Profile' width={200}></img>
                </div>
                <div className='main-text'>
                    Todd Tao
                </div>
                <div className='sub-text'>
                    Software Engineer
                </div>
                <div className='desc'>
                    <div className='desc-text'>
                        Master Student interested in application and game development. 
                    </div>
                    <div className='desc-text'>
                        Experience in full-stack app development, project management, and interactive game development. Aiming to deliver quality work.
                    </div>
                </div>
                <div className='icons'>
                    <a href='https://github.com/jtao26'>
                        <img src={GithubIcon} alt ='Github' width={40} height={40} />
                    </a>
                    <a href='https://www.linkedin.com/in/todd-tao'>
                        <img src={LinkedInIcon} alt='LinkedIn' width={40} height={40}/>
                    </a>
                </div>
                <div className='contact'>
                    <a href='mailto:jun-yue.tao@outlook.com'>
                        <button>
                            <div className='button-text'>
                                Contact Me
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Profile