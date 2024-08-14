import AStar from '../assets/images/a-star-path.png'
import QYay from '../assets/images/QYay.png'
import UTransit from '../assets/images/UTransit.png'

const Protfo_Game = () => {
    return (
        <div className='protfolio-container'>
                <div className='item item-first'>
                    <div className='image'>
                        <img src={AStar} alt='Project Img' width={300}/>
                    </div>
                    <div className='desc'>
                        <div className='title'>
                            Pathfinding 
                        </div>
                        <div className='lables'>
                            <button className='btn yellow'> C# </button>
                            <button className='btn green indent'> Unity </button>
                            {/* <button className='btn blue indent'> WebSocket </button>
                            <button className='btn purple indent'> PostgreSQL </button>
                            <button className='btn blue indent'> Azure </button> */}
                        </div>
                        <div className='intro'>
                            Pathfinding provides you a simple chess-like board and allows
                            you to draw any walls before you select two points and forming
                            a path. Pathfinding is developed on Unity, ad all paths are 
                            calculated based on A-star algorithm.
                        </div>
                    </div>
                </div>
                
                
                
                <br></br>
                <div>
                    More are comming on the way..
                </div>
            </div>
    )
}

export default Protfo_Game;