import SecHand from '../assets/images/SecHand.png'
import QYay from '../assets/images/QYay.png'
import UTransit from '../assets/images/UTransit.png'

const Protfo_Full = () => {
    return (
        <div className='protfolio-container'>
                <div className='item item-first'>
                    <div className='image'>
                        <img src={SecHand} alt='Project Img' width={300}/>
                    </div>
                    <div className='desc'>
                        <div className='title'>
                            SecHand
                        </div>
                        <div className='lables'>
                            <button className='btn yellow'> Django </button>
                            <button className='btn green indent'> Vue.js </button>
                            <button className='btn blue indent'> WebSocket </button>
                            <button className='btn purple indent'> PostgreSQL </button>
                            <button className='btn blue indent'> Azure </button>
                        </div>
                        <div className='intro'>
                            Sechand is a trading platform that is aiming to provide a way for 
                            Hopkins students and scholars to purchase second hand items. 
                            It offers secure and trustble place to let users sell their items. 
                            Accessible for any JHED holder. Currently under development.
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='image'>
                        <img src={QYay} alt='Project Img' width={300}/>
                    </div>
                    <div className='desc'>
                        <div className='title'>
                            QYay LiveQA
                        </div>
                        <div className='lables'>
                            <button className='btn yellow'> Node.js </button>
                            <button className='btn purple indent'> Express.js </button>
                            <button className='btn blue indent'> React.js </button>
                            <button className='btn green indent'> MongoDB </button>
                            <button className='btn blue indent'> Token </button>
                        </div>
                        <div className='intro'>
                            QYay LiveQA provides an easy and convenient platform for event
                            hosts to organize their Q&A sessions. By providing a random 
                            generated access code to guests, hosts can easily gather and reply
                            questions raised by their audiances, and select out the most famous
                            question.
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className='image'>
                        <img src={UTransit} alt='Project Img' width={300}/>
                    </div>
                    <div className='desc'>
                        <div className='title'>
                            <div className='text'>
                                U Transit
                            </div>
                            <a href='https://github.com/jtao26/U-Transit'>
                                <button className='proj-git-btn'>
                                    <div className='button-text'>
                                        Source Code
                                    </div>
                                </button>
                            </a>
                        </div>
                        <div className='lables'>
                            <button className='btn brown'> Java </button>
                            <button className='btn purple indent'> Gradle </button>
                            <button className='btn yellow indent'> WebSocket </button>
                            <button className='btn green indent'> JavaScript </button>
                        </div>
                        <div className='intro'>
                            U Transit is a traffic simulation application that models vehicle 
                            transit around the University of Minnesota campus. Specifically, 
                            the software simulates the behavior of vehicles and passengers 
                            on campus to let reasearchers and coordinators gain a solid 
                            understanding of traffic patterns and needs.
                        </div>
                    </div>
                </div>
                <br></br>

            </div>
    )
}

export default Protfo_Full;