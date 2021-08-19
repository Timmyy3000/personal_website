import React from "react";
import "./Projects.css";
import ProjectTabs from "./ProjectTabs";

import ProjectTabPane from "./ProjectTabPane";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section className="projects" id='projects'>
        <div className="max-width">
            <h2 className="title">Projects</h2>
            <div className='projects-tab'>
                <ProjectTabs>

                <ProjectTabPane label='DS & ML'>
                    <div className='project__container'>
                        <div className='project__wrapper'>
                            <ul className='project__items'>
                                <ProjectItem 
                                className='project__item'
                                src='assets/images/kpmg.png'
                                text='KPMG Virtual Internship Tasks'
                                dets='My project submission for the remote tasks of the KPMG Virtual Internship by Forage.com in Data Quality Assessment, Data Insights, Data Analysis and Data Presentation'
                                label='DS'
                                path='https://github.com/Timmyy3000/KPMG-Virtual-Internship-Module-Tasks'
                                />

                                <ProjectItem 
                                className='project__item'
                                src='assets/images/titanic.jpg'
                                text='Kaggle Titanic Dataset Classifier'
                                label='ML'
                                dets='My submission for the Titanic Dataset competion on the Kaggle.com. Aim was to predict survival of a passanger of the RS Titanic based on specific attributes using a Machine Learning model'
                                path='https://share.streamlit.io/timmyy3000/titanic-dataset-classifier/main/app.py'
                                />

                                
                            </ul>

                            <ul className='project__items'>
                            <ProjectItem 
                            className='project__item'
                                src='assets/images/penguins.jpeg'
                                text='Palmer Penguins Dataset Classifier'
                                label='ML'
                                path='https://share.streamlit.io/timmyy3000/penguins-classifier/main/penguin-app.py'
                                dets='Creating a simple classifier that uses the well-known Palmer Penguins Dataset to predict the Specie of penguins based on set features'
                                />

                            <ProjectItem 
                            className='project__item'
                                src='assets/images/grades.png'
                                text='Student Performance Predictor'
                                label='ML'
                                path='https://grades-predictor.herokuapp.com'
                                dets='A Mahcine Learning model that uses a linear regression approach to predicts a students final grade based on factors like attendance, study hours and past performance'
                                />      
                            
                            </ul>
                        </div>
                    </div>
                </ProjectTabPane>
                
                <ProjectTabPane label='AI & NN'>
                    <div className='project__container'>
                            <div className='project__wrapper'>
                                <ul className='project__items'>
                                    <ProjectItem 
                                    className='project__item'
                                    src='assets/images/img-nn.png'
                                    text='Handwritten Image Classifier'
                                    dets='Harnessing a Convolutional Neural Net to analyze and interpret handwritten digits, letters and possibly words '
                                    label='NN'
                                    path='https://share.streamlit.io/timmyy3000/handwritten-image-classifier/Timmyy3000/gitpod-setup/app.py'
                                    />

                                    <ProjectItem 
                                    className='project__item'
                                    src='assets/images/AI.png'
                                    text='Game AI using NEAT'
                                    dets='Using the NEAT algorithm to evolve an AI that plays a simple 2D Game that mimics obstacle avoidance and range perception to extraordinary levels'
                                    label='AI'
                                    path='https://github.com/Timmyy3000/Dodge-The-Blocks-NEAT-AI'
                                    />

                                    
                                </ul>

                                <ul className='project__items'>
                                    <ProjectItem 
                                    className='project__item'
                                    src='assets/images/pet.jpeg'
                                    text='Pet Image Classifier'
                                    dets='A CNN works by extracting features from images. This is model was trained upon multiple images of cats and dogs and has learnt to differentiate between both animals'
                                    label='NN'
                                    path='https://pet-cnn-classifier.herokuapp.com/'
                                    />

                                    <ProjectItem 
                                    className='project__item'
                                    src='assets/images/face-mask.jpg'
                                    text='Real Time Face Mask Detection'
                                    dets='During pandemic COVID-19, WHO has made wearing masks compulsory to protect against this deadly virus. This is a real-time system to detect whether the person on the webcam is wearing a mask or not'
                                    label='AI'
                                    path='https://github.com/Timmyy3000/Dodge-The-Blocks-NEAT-AI'
                                    />

                                    
                                </ul>


                            
            

                            
                            
                            </div>
                        </div>
                </ProjectTabPane>

                <ProjectTabPane label='Web Dev'>
                <div className='project__container'>
                        <div className='project__wrapper'>
                            <ul className='project__items'>
                                <ProjectItem 
                                className='project__item'
                                src='assets/images/react_js.jpg'
                                text='Personal Portfolio Website'
                                dets='Built a portfolio website using React Js framework. Not much else to say, because your currently on that website XD'
                                label='Web'hubs
                                path='https://timilehinogunme.netlify.app'
                                />

                                <ProjectItem 
                                className='project__item'
                                src='assets/images/django.jpeg'
                                text='Django ML API '
                                indev={true}
                                dets='An elaborate API system that incorprates Machine Learning models through the backend using the Django Rest API'
                                label='Web'
                                path='/'
                                />

                                
                            </ul>
                            <ul className='project__items'>
                                <ProjectItem 
                                className='project__item'
                                src='assets/images/cmd.png'
                                text='Customer Management System'
                                dets='A fully functional Customer Management dashboard complete with CRUD functionalities and custom user models built in Django'
                                label='Web'
                                path='https://github.com/Timmyy3000/CustomerManagementDjango'
                                />

                                <ProjectItem 
                                className='project__item'
                                src='assets/images/grovehub.png'
                                text='Groove Hub'
                            
                                dets='A joint music listening app built with React and Django that allows users to create "Hubs" and listen to music together using the spotify api'
                                label='Web'
                                path='https://github.com/Timmyy3000/Groove-hub'
                                />

                                
                            </ul>

                          
                        
                           
                        </div>
                    </div>
                </ProjectTabPane>

                <ProjectTabPane label='Others'>
                <div className='project__container'>
                        <div className='project__wrapper'>

                        <div className = 'project_cat'>Side Projects</div>
                                <ul className='project__items '>
                                    <ProjectItem 
                                    className='project__item__graphics'
                                    src='assets/images/100daysofcode.jfif'
                                    graphics='100 Days Of Code'
                                
                                    label='Code'
                                    path='https://github.com/Timmyy3000/100-days-of-code'
                                    />

                                    <ProjectItem 
                                    className='project__item__graphics'
                                    src="assets/images/a-star.jpg"
                                    graphics="A* Pathfinding"
                                
                                
                                    label='Code'
                                    path="https://github.com/Timmyy3000/Pathfinding"
                                    />

                                    </ul>
                    


                            <div className = 'project_cat'>Logo and Poster Designs</div>
                                <ul className='project__items '>
                                    <ProjectItem 
                                    className='project__item__graphics'
                                    src='assets/images/py logo (2).webp'
                                    graphics='PY Tech Brand Logo'
                                
                                    label='Logo'
                                    path='assets\images\py logo (2).jpg'
                                    />

                                    <ProjectItem 
                                    className='project__item__graphics'
                                    src="assets/images/bammy' kitchen.webp"
                                    graphics="Bammy's Kitchen Brand Logo"
                                
                                
                                    label='Logo'
                                    path="assets/images/bammy' kitchen.jpg"
                                    />

                                    </ul>
                                    <ul className='project__items '>
                                    <ProjectItem 
                                    className='project__item__graphics'
                                    src='assets/images/delivery.webp'
                                    graphics="Delivery Service Poster"
                                
                                
                                    label='Poster'
                                    path='assets/images/delivery.png'
                                    />

                                    <ProjectItem 
                                    className='project__item__graphics'
                                    src='assets/images/MENS WEEK.webp'
                                    graphics='Church Event Poster'
                                    label='Poster'
                                    path='assets/images/MENS WEEK.jpg'
                                    />


                                    
                                </ul>

                       

                          
                        
                           
                       
                    <div className = 'project_cat'>Concept Art and 3D Renders</div>
                                <ul className='project__items '>
                                    <ProjectItem 
                                    className='project__item__graphics'
                                    src='assets/images/Black_panther.webp'
                                    graphics='Black Panther Tribute Artwork'
                                
                                    label='PS'
                                    path='assets/images/Black_panther.jpg'
                                    />

                                    <ProjectItem 
                                    className='project__item__graphics'
                                    src='assets/images/BUCC_OVERCLOCKED.webp'
                                    graphics="BUCC Concept Render"
                                
                                
                                    label='Blender 3D'
                                    path='assets/images/BUCC_OVERCLOCKED.jpg'
                                    />

                                    </ul>
                                    <ul className='project__items '>
                                    <ProjectItem 
                                    className='project__item__graphics'
                                    src='assets/images/Quarantine.webp'
                                    graphics="Quarantine Concept Render"
                                
                                
                                    label='Blender 3D'
                                    path='assets/images/Quarantine.jpg'
                                    />

                                    <ProjectItem 
                                    className='project__item__graphics'
                                    src='assets/images/Way_of_a_shinobi.webp'
                                    graphics='Anime Inspired Realistic render'
                                    label='Blender 3D'
                                    path='assets/images/Way_of_a_shinobi.png'
                                    />
                                </ul>
                                </div>
                    </div>
                </ProjectTabPane>

                </ProjectTabs>
               

            </div>
        </div>
    </section>
  );
};

export default Projects;
