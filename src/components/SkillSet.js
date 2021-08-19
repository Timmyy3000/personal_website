import React from 'react'
import './SkillSet.css'
import { FaChartLine, FaConnectdevelop, FaFileCode, FaPaintBrush } from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll'

const SkillSet = () => {

    
    return (
        <section className='skill' id='skills'>
            <div className='max-width'>
                <h2 className='title'>
                    Technical Skills
                </h2>
                <div className='skill-content'>
                        
                        <div className='card'>
                        <ScrollAnimation animateIn='fadeIn' >
                            <div className="bars">
                                <div className='tool-title'>
                                    Tools
                                </div>
                                <div className="info">
                                    <span>Python</span>
                                    <span>90%</span>
                                </div>
                                <div className="line python"></div>
                                <div className="info">
                                    <span>Pandas</span>
                                    <span>90%</span>
                                </div>
                                <div className="line pandas"></div>
                                <div className="info">
                                    <span>Matplotlip</span>
                                    <span>70%</span>
                                </div>
                                <div className="line matplotlib"></div>
                                <div className="info">
                                    <span>Keras</span>
                                    <span>80%</span>
                                </div>
                                <div className="line keras"></div>
                                <div className="info">
                                    <span>Tensorflow</span>
                                    <span>85%</span>
                                </div>
                                <div className="line tf"></div>
                            </div>
                        
                            <div className='box'>
                                <FaChartLine />
                                <div className='text'>
                                    Data Science and Machine <br/>Learning
                                </div>
                                <p>
                                    Assessing and analysing data sets to draw predictions and classifications
                                </p>
                            </div>
                            </ScrollAnimation>
                        </div>
                       
                        <div className='card'>
                        <ScrollAnimation animateIn='fadeIn' >
                            <div className="bars">
                                    <div className='tool-title'>
                                        Tools
                                    </div>
                                    <div className="info">
                                        <span>Python</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="line python"></div>
                                    <div className="info">
                                        <span>SciKit Learn</span>
                                        <span>72%</span>
                                    </div>
                                    <div className="line skl"></div>
                                    <div className="info">
                                        <span>Neat</span>
                                        <span>75%</span>
                                    </div>
                                    <div className="line neat"></div>
                                    <div className="info">
                                        <span>Tensorflow</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="line tf"></div>
                                    <div className="info">
                                        <span>NLP</span>
                                        <span>65%</span>
                                    </div>
                                    <div className="line nlp"></div>
                                </div>
                        <div className='box'>
                                <FaConnectdevelop />
                                <div className='text'>
                                    Artificial Intelligence and Neural Networks
                                </div>
                                <p>
                                    Implementing neural networks with the ability to learn and develop preoficiency in a task
                                </p>
                            </div>
                            </ScrollAnimation>
                        </div>
                        <div className='card'>
                        <ScrollAnimation animateIn='fadeIn' >
                            <div className="bars">
                                <div className='tool-title'>
                                    Tools
                                </div>
                                <div className="info">
                                    <span>Django</span>
                                    <span>85%</span>
                                </div>
                                <div className="line django"></div>
                                <div className="info">
                                    <span>React Js</span>
                                    <span>80%</span>
                                </div>
                                <div className="line react"></div>
                                <div className="info">
                                    <span>SQL</span>
                                    <span>70%</span>
                                </div>
                                <div className="line sql"></div>
                                <div className="info">
                                    <span>Javascript</span>
                                    <span>85%</span>
                                </div>
                                <div className="line js"></div>
                                <div className="info">
                                    <span>CSS</span>
                                    <span>80%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className='box'>
                                <FaFileCode />
                                <div className='text'>
                                    Fullstack Web <br />Development
                                </div>
                                <p>
                                    Building dynamic websites and web apps using a <br />python-based backend 
                                </p>
                            </div>
                            </ScrollAnimation>
                        </div>
                        <div className='card'>
                        <ScrollAnimation animateIn='fadeIn' >
                        <div className="bars">
                                <div className='tool-title'>
                                    Tools
                                </div>
                                <div className="info">
                                    <span>Blender 3D</span>
                                    <span>90%</span>
                                </div>
                                <div className="line blender"></div>
                                <div className="info">
                                    <span>Photoshop</span>
                                    <span>80%</span>
                                </div>
                                <div className="line ps"></div>
                                <div className="info">
                                    <span>Resolve</span>
                                    <span>55%</span>
                                </div>
                                <div className="line resolve"></div>
                                <div className="info">
                                    <span>Lightroom</span>
                                    <span>75%</span>
                                </div>
                                <div className="line lightroom"></div>
                                <div className="info">
                                    <span>After Effects</span>
                                    <span>70%</span>
                                </div>
                                <div className="line afe"></div>
                            </div>
                            <div className='box'>
                                <FaPaintBrush />
                                <div className='text'>
                                    Graphics Design and 3D <br/>Modeling
                                </div>
                                <p>
                                    From commercial-grade logo and poster designs <br />to realistic 3d renders
                                </p>
                            </div>
                            </ScrollAnimation>
                        </div>
                    
                 
                </div>
            </div>
        </section>
    )
}

export default SkillSet
