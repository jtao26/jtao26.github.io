import WorkIcon from '../assets/images/Work.svg'
import WorkText from '../assets/images/Work-text.svg'
import AboutIcon from '../assets/images/About.svg'
import AboutText from '../assets/images/About-text.svg'
import EduIcon from '../assets/images/education.svg'
import EduText from '../assets/images/edu-text.svg'
import BlueJay from '../assets/images/blue-jay.svg'
import Gopher from '../assets/images/goldy-gopher.png'
import Ubisoft from '../assets/images/Ubisoft.svg'
import Inspur from '../assets/images/Inspur_logo.svg'

import './About.css'

const About = () => {
    return (
        <div className="About">
            <div className="about-container">
                <div className="title">
                    <img src={AboutIcon} className='about-icon' width={30} height={30} alt=''/>
                    <img src={AboutText} className='about-text' alt='About'/>
                </div>
                <div className="text-content">
                    <p>Hi, You've found my page! I am Todd (Junyue) Tao, a master's student at Johns Hopkins University majoring in Computer Science.</p>
                    <p>My first contact with coding was during my junior high, I made a basic calculator using Visual Basic, a really cool way to "draw" GUI back then.</p>
                    <p>Now what I love to do is explore ways to build functional applications, and make interactive and interesting games.</p>
                </div>
            </div>
            <div className='horizontal-line'></div>
            <div className="edu-container">
                <div className="education">
                    <img src={EduIcon} alt=''/>
                    <img src={EduText} className='edu-text' alt='Education'/>
                </div>
                <div className='school-container'>
                    <div className='school-logo'>
                        <img src={BlueJay} alt='BlueJay' width={45} height={45}/>
                    </div>
                    <div className='school-info'>
                        <div className='row'>
                            <div className='title'>
                                Johns Hopkins University
                            </div>
                            <div className='location'>
                                Baltimore, MD
                            </div>
                        </div>
                        <div className='row'>
                            <div className='major'>
                                Master, Computer Science
                            </div>
                            <div className='date'>
                                2023.8 - Present
                            </div>
                        </div>
                        <div className='row'>
                            <div className='gpa'>
                                CS Major GPA: 3.9 / 4.0
                            </div>
                        </div>
                    </div>
                </div>
                <div className='school-container bottom-school-container'>
                    <div className='school-logo gopher-logo'>
                        <img src={Gopher} alt='Goldy Gopher' width={64} height={45}/>
                    </div>
                    <div className='school-info'>
                        <div className='row'>
                            <div className='title'>
                                University of Minnesota - Twin Cities
                            </div>
                            <div className='location'>
                                Minneapolis, MD
                            </div>
                        </div>
                        <div className='row'>
                            <div className='major'>
                            Bachelor, Computer Science
                            </div>
                            <div className='date'>
                                2020.1 - 2022.12
                            </div>
                        </div>
                        <div className='row'>
                            <div className='gpa'>
                                CS Major GPA: 4.0 / 4.0
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='horizontal-line'></div>
            <div className="exp-container">
                <div className='experience'>
                    <img src={WorkIcon} alt=''/>
                    <img src={WorkText} alt='Experience'/>
                </div>
                <div className='company-container'>
                    <div className='company-logo ubi-logo'>
                        <img src={Inspur} alt='Ubisoft' width={55} height={50}/>
                    </div>
                    <div className='company-info'>
                        <div className='row'>
                            <div className='title'>
                                Software Engineer
                            </div>
                            <div className='date'>
                                2024.6 - 2023.8
                            </div>
                        </div>
                    </div>
                </div>
                <div className='company-container'>
                    <div className='company-logo ubi-logo'>
                        <img src={BlueJay} alt='JHU' width={55} height={50}/>
                    </div>
                    <div className='company-info'>
                        <div className='row'>
                            <div className='title'>
                                Course Assistant
                            </div>
                            <div className='date'>
                                2024.1 - 2023.5
                            </div>
                        </div>
                    </div>
                </div>
                <div className='company-container'>
                    <div className='company-logo ubi-logo'>
                        <img src={Ubisoft} alt='Ubisoft' width={55} height={50}/>
                    </div>
                    <div className='company-info'>
                        <div className='row'>
                            <div className='title'>
                                Software Engineer Intern (Gameplay)
                            </div>
                            <div className='date'>
                                2023.3 - 2023.7
                            </div>
                        </div>
                    </div>
                </div>
                <div className='company-container'>
                    <div className='gopher-logo'>
                        <img src={Gopher} alt='UMN' width={69} height={50}/>
                    </div>
                    <div className='company-info'>
                        <div className='row'>
                            <div className='title'>
                                Student Software Developer
                            </div>
                            <div className='date'>
                                2022.8 - 2022.12
                            </div>
                        </div>
                    </div>
                </div>
                <div className='company-container'>
                    <div className='gopher-logo'>
                        <img src={Gopher} alt='UMN' width={69} height={50}/>
                    </div>
                    <div className='company-info'>
                        <div className='row'>
                            <div className='title'>
                                Course Assistant & Tutor
                            </div>
                            <div className='date'>
                                2021.8 - 2022.5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About