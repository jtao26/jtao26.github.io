import AStar from '../assets/images/a-star-path.png'
import RayTracer from '../assets/images/ray-tracer.png'
import UTransit from '../assets/images/UTransit.png'

const Protfo_Game = () => {
    return (
        <div className='protfolio-container'>
                <div className='item item-first'>
                    <div className='image'>
                        <img src={RayTracer} alt='Project Img' width={300}/>
                    </div>
                    <div className='desc'>
                        <div className='title'>
                            <div className='text'>
                                Ray Tracer
                            </div>
                            <a href='https://github.com/jtao26/ray-tracer'>
                                <button className='proj-git-btn'>
                                    <div className='button-text'>
                                        Source Code
                                    </div>
                                </button>
                            </a>
                        </div>
                        
                        <div className='lables'>
                            <button className='btn yellow'> C/C++ </button>
                            <button className='btn green indent'> Linux </button>
                            {/* <button className='btn blue indent'> WebSocket </button>
                            <button className='btn purple indent'> PostgreSQL </button>
                            <button className='btn blue indent'> Azure </button> */}
                        </div>
                        <div className='intro'>
                            C/C++ based scene renderer that generates images of arbitrary 
                            prefabricated objects in space using Phong Illumination Model, 
                            with support for textures, simulated depth of field, and ray tracing.
                        </div>
                    </div>
                </div>
                <div className='item item-first'>
                    <div className='image'>
                        <img src={AStar} alt='Project Img' width={300}/>
                    </div>
                    <div className='desc'>
                        <div className='title'>
                            <div className='text'>
                                A* Pathfinding
                            </div>
                            <a href='https://github.com/jtao26/A-Star-PathFinding'>
                                <button className='proj-git-btn'>
                                    <div className='button-text'>
                                        Source Code
                                    </div>
                                </button>
                            </a>
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

            </div>
    )
}

export default Protfo_Game;