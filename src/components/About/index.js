import React from 'react';
import headshot from '../../assets/charles-dawkins.png';

function About() {
    return (
        <section className="bio">
            <div className="flex-row">
                <div className="col-auto">
                    <img src={headshot} style={{ width: "50%" }} alt="headshot" />
                    <h2>Bio:</h2>
                    <p className="bio-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, eveniet. Distinctio, minima repellat. Accusantium eligendi odio omnis culpa impedit tempore, corporis reprehenderit veritatis libero consequuntur nisi nemo iste porro magnam. <br /><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, eveniet. Distinctio, minima repellat. Accusantium eligendi odio omnis culpa impedit tempore, corporis reprehenderit veritatis libero consequuntur nisi nemo iste porro magnam. <br /><br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, eveniet. Distinctio, minima repellat. Accusantium eligendi odio omnis culpa impedit tempore, corporis reprehenderit veritatis libero consequuntur nisi nemo iste porro magnam.</p>
                </div>
            </div>
        </section>
    );
}

export default About;