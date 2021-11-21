import React from 'react';

function Project() {
    const projects = [
        {
            name: "Bored!",
            description: "Front End Project using HTML, CSS, JavaScript and 2 API's.",
            project_url: "https://team4project1.github.io/Bored/",
            image: "bored"
        },
        {
            name: "Budget Tracker",
            description: "Progressive Web Application (PWA)",
            project_url: "https://infinite-ocean-83638.herokuapp.com/",
            image: "budget-tracker"
        },
        {
            name: "Pizza Hunt",
            description: "NoSQL Application using MongoDB and Mongoose Library work.",
            project_url: "https://still-brushlands-06870.herokuapp.com/",
            image: "pizza-hunt"
        },
        {
            name: "Zoo Keepr",
            description: "Application using Node.js & Express.js",
            project_url: "https://safe-bayou-21195.herokuapp.com/",
            image: "zoo-keepr"
        },
        {
            name: "Run Buddy",
            description: "HTML & CSS created website",
            project_url: "https://dawkc.github.io/run-buddy/",
            image: "run-buddy"
        },
        {
            name: "Taskinator",
            description: "Task Tracker Application",
            project_url: "https://dawkc.github.io/taskinator/",
            image: "taskinator"
        },
        {
            name: "Online Therapy",
            description: "Full stack project using MySQL, Sequelize, Node.js, Express.js, and Handlebars",
            project_url: "https://online-therapy-44444.herokuapp.com//",
            image: "online-therapy"
        },
        {
            name: "Next Step",
            description: "React Project that uses the MERN Stack and GraphQL",
            project_url: "https://next-setp-uoft-project3.herokuapp.com//",
            image: "next-step"
        },
    ]

    return (
        <div className="col-1">
            {projects.map((project) => (
                <div className="card">
                    <div className="card-header">
                        <h2>{project.name}</h2>
                    </div>
                    <div className="card-body">
                        <a href={project.project_url} target="_blank" rel="noreferrer">
                            <img src={require(`../../assets/${project.image}.png`).default} alt={project.name} className="card-img" style={{ width: "50%" }} />
                        </a>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;