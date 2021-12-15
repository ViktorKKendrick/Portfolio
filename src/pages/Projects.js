import React from 'react'
import { Container, Row } from 'react-bootstrap';
import ProjectItem from '../Components/ProjectItem.js';
import '../App.css';
export default function Projects() {
    return (
        <>
            <Container className='text-center'>
                <h3>Projects</h3>
                <Row className='d-flex text-center align-items-center justify-content-center'>
                    <ProjectItem description='Tic? Toe? no. Taco' title='TicTacToe Project' liveLink='https://viktorkkendrick.github.io/TicTacToe/' repo='https://github.com/ViktorKKendrick/TicTacToe' image='./Img/TicTacToe.png' />
                    <ProjectItem description='Enter a valid zip code to see the weather of that area' title='Weather App Project' liveLink='https://viktorkkendrick.github.io/WeatherApp/' repo='https://github.com/ViktorKKendrick/WeatherApp' image='./Img/WeatherApp.png' />
                    <ProjectItem description="I can read your mind" title='Mind Reader App' liveLink='https://viktorkkendrick.github.io/Mindgame/' repo='https://github.com/ViktorKKendrick/Mindgame' image='./Img/MindReader.png' />
                </Row>
                <h1> </h1>
                <Row className='d-flex text-center align-items-center justify-content-center'>
                    <ProjectItem description='Control the evil ball and absord the surrounding balls' title='Bouncing Balls Game' liveLink='https://viktorkkendrick.github.io/BouncingBalls/' repo='https://github.com/ViktorKKendrick/BouncingBalls' image='./Img/BouncingBalls.png' />
                    <ProjectItem description='Generates psudo-random story that can be described as silly' title='Silly Story App' liveLink='https://viktorkkendrick.github.io/SillyStory/' repo='https://github.com/ViktorKKendrick/SillyStory' image='./Img/SillyStory.png' />
                    <ProjectItem description='Just a restaurant menu used for practice with API calls' title='Menu App' liveLink='https://menu-274fa.firebaseapp.com/' repo='https://github.com/ViktorKKendrick/Menu' image='./Img/Menu.png' />
                </Row>
                <h1> </h1>
                <Row ClassName='d-flex text-center align-items-center justify-content-center'>
                    <ProjectItem
                        description='Control the evil ball and absord the surrounding balls'
                        title='MyLiberry'
                        liveLink='https://library-9b5f5.web.app/'
                        repo='https://github.com/ViktorKKendrick/LibraryFinalFrontEnd'
                        image='./Img/Liberry.png'
                    />
                    <ProjectItem
                        description='Project will be coming Soon!!'
                        title='Coming Soon'
                        liveLink=''
                        repo=''
                        image='./Img/images.png'
                    />
                    <ProjectItem
                        description='Project will be coming Soon!!'
                        title='Coming Soon'
                        liveLink=''
                        repo=''
                        image='./Img/images.png'
                    />
                </Row>
            </Container>
        </>
    )
}