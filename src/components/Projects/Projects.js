import React, { Component } from 'react';
import styles from './Projects.module.css'
import Project from './Project/Project'


class Projects extends Component {
    // state contains information about each project
    state = {
        projects: [
            {id: '1', name: 'Recommendify', description: 'A web application that allows Spotify users to get personalized music recommendations',
            technologies: ['Python', 'Flask', 'Redis', 'HTML/CSS'], demo: '/static/mockup.jpeg', link: 'https://recommend-ify.herokuapp.com'},
            {id: '2', name: 'Trump_Tweets', description: 'Investment Bot that uses NLP to predict the sentiment of Trump tweets on the stock market', 
            technologies: ['Python', 'Tensorflow', 'Pandas', 'Numpy'], demo: '/static/meme.jpg', link: 'https://github.com/akshay-sharma1/Trump_Tweets'},
            {id: '3', name: 'BrickBreaker', description: 'Version of the popular game that features multi-player mode, leaderboards, and powerups', 
            technologies: ['Java', 'Swing'], demo: '/static/brickbreaker.png', link: 'https://github.com/akshay-sharma1/brickbreaker'}
        ]
    }

    // render list of projects every time

    render () {
        const projects = this.state.projects.map((project, _) => {
            return <Project 
            title={project.name}
            demo={project.demo}
            description={project.description}
            key={project.id}
            technologies={project.technologies}
            link={project.link}
            />
        })


        return (
            <div className={styles.Projects}>
                <div className={styles.Content}>{projects}</div>
            </div>
        )
    }
}

export default Projects;