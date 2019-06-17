import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faMapMarkerAlt, faAt, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import me_1 from './images/me_1.jpg';
import wpi_logo from './images/wpi_logo.png';
import hhs_logo from './images/hhs_logo.png';
import chegg_logo from './images/chegg_logo.png';
import fundacion_logo from './images/fundacion_logo.png';
import accur8_logo from './images/accur8_logo.png';
import first_year_hub from './images/first_year_hub_screenshot.png';
import data_uncorked from './images/data_uncorked_screenshot.png';
import graphical_perception from './images/graphical_experiment_screenshot.png';
import results from './images/experiment_results.png';
import resume from './documents/resume.pdf';

function App() {
  function scrollPastHeader() {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  function calculateAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }

    return age;
  }

  return (
    <div className="App">
      <header className="Header">
        <h1>
          Anthony Gringeri
        </h1>
        <FontAwesomeIcon
          className="headerIcon"
          icon={faArrowCircleDown}
          color={"white"}
          size={"2x"}
          onClick={scrollPastHeader}
        />
      </header>

      <body>
        <div id="profile" className="ThemeLight">
          <div className="TextBlock">
            <h1>Profile</h1>
            <h2>About Me</h2>
            <p>
              I'm a recent college graduate looking for full-time, entry-level positions. I have degree in computer science with a versatile programming background. My interests lie in data visualization and analysis, but I value working on something worthwhile and interesting above all else. I have experience working in teams and prefer collaborating. Many hands make light work! While my professional experience isn’t extensive, I’m a fast learner and an effective communicator.
            </p>
            <p>
              I have many interests including hiking, swimming, travelling, drinking *good* beer, and cooking.
            </p>
          </div>
          <div className="TextBlock">
            <h2>Details</h2>
            <p><b>Name:</b> Anthony Gringeri</p>
            <p><b>Age:</b> {calculateAge("04/03/1997")} years old</p>
            <p><b>Location: </b><FontAwesomeIcon icon={ faMapMarkerAlt }/> <a target="_blank" href="https://www.google.com/maps/place/Hinsdale,+NH/@42.7924279,-72.5042205,11z/data=!3m1!4b1!4m5!3m4!1s0x89e1176ec0824231:0x3e6bb4c0dcfdcf5b!8m2!3d42.7862065!4d-72.4865089">Hinsdale, NH</a></p>
          </div>
        </div>

        <div id="experience" className="ThemeDark">
          <div className="TextBlock">
            <h1>Experience</h1>

            <h2>Education</h2>

            <div className="ExperienceBlock">
              <h3><img src={wpi_logo} alt="WPI logo" height="25px"/> Worcester Polytechnic Institute (WPI)</h3>
              <p>August 2015 - May 2019</p>
              <h4>Bachelor of Computer Science</h4>
              <ul>
                <li>GPA: 3.27</li>
                <li>Graduated with Distinction</li>
              </ul>
              <p>Going to an engineering school allowed me to surround myself with a lot of smart and like-minded people to learn from. A lot of my early college education was taught in Java, with some python here and there. I learned the basics of most of the programming stack during college, and focused my projects on web/app development and data visualization.</p>
              <h4><FontAwesomeIcon icon={ faMapMarkerAlt }/> <a target="_blank" href="https://www.google.com/maps/place/Worcester,+MA/@42.2756038,-71.9478275,11z/data=!3m1!4b1!4m5!3m4!1s0x89e406585a2a8b0d:0x9e137dd87fca4d6d!8m2!3d42.2625932!4d-71.8022934">Worcester, MA</a></h4>
            </div>

            <div className="ExperienceBlock">
              <h3><img src={hhs_logo} alt="HHS logo" height="25px"/> Hinsdale Middle/High School</h3>
              <p>August 2011 - June 2015</p>
              <h4>High School Diploma</h4>
              <p>During high school I was involved in soccer, baseball, and was the Vice President of my class. I focused my studies on math and sciences, and was able to take online classes to start programming in Java.</p>
              <h4><FontAwesomeIcon icon={ faMapMarkerAlt }/> <a target="_blank" href="https://www.google.com/maps/place/Hinsdale,+NH/@42.7924279,-72.5042205,11z/data=!3m1!4b1!4m5!3m4!1s0x89e1176ec0824231:0x3e6bb4c0dcfdcf5b!8m2!3d42.7862065!4d-72.4865089">Hinsdale, NH</a></h4>
            </div>

            <h2>Professional Experience</h2>

            <div className="ExperienceBlock">
              <h3><img src={chegg_logo} alt="Chegg logo" height="25px"/> Chegg.com</h3>
              <p>February 2016 - present</p>
              <h4>Online Tutor, computer science, math</h4>
              <ul>
                <li>Conducted over 90 positively reviewed lessons</li>
              </ul>
              <p>During my spare time, I remotely tutor other students around the country on Chegg. Doing so allowed me to understand math and programming concepts deeper and help others along the way.</p>
              <h4><FontAwesomeIcon icon={ faMapMarkerAlt }/> Remote (Online)</h4>
            </div>

            <div className="ExperienceBlock">
              <h3><img src={fundacion_logo} alt="Fundación logo" height="25px"/> Fundación Paraguaya</h3>
              <p>March 2018 - May 2018</p>
              <h4>Program Intern</h4>
              <p>During the spring semester of my junior year of college into the summer, I studied abroad in Paraguay. Here, I worked in a team of 4 with local wildlife advocates to design blueprints for a bird observatory for future construction at an avian conservation site. I also used my programming knowledge to improve an existing Android application which profiles local bird species.</p>
              <h4><FontAwesomeIcon icon={ faMapMarkerAlt }/> <a target="_blank" href="https://www.google.com/maps/place/Asuncion,+Paraguay/@-25.2967865,-57.738182,11z/data=!3m1!4b1!4m5!3m4!1s0x945da8076e69dbf5:0xaceb7a46bf1936c9!8m2!3d-25.2637399!4d-57.575926">Asunción, Paraguay, South America</a></h4>
            </div>

            <div className="ExperienceBlock">
              <h3><img src={accur8_logo} alt="Accur8 logo" height="25px"/> Accur8 Software</h3>
              <p>July 2017 - Aug 2017</p>
              <h4>Intern</h4>
              <p>During the second half of my sophomore year summer, I worked with a local software company. My main project was to develop a program that enabled automatic backups for company files to Amazon S3 cloud storage.</p>
              <h4><FontAwesomeIcon icon={ faMapMarkerAlt }/> <a target="_blank" href="https://www.google.com/maps/place/Brattleboro,+VT+05301/@42.8606477,-72.6365608,12z/data=!3m1!4b1!4m5!3m4!1s0x89e11a35805a89b5:0x61dce0642e9758f2!8m2!3d42.8509152!4d-72.5578678">Brattleboro, VT</a></h4>
            </div>

          </div>
        </div>

        <div id="abilities" className="ThemeLight">
          <div className="TextBlock">
            <h1>Abilities</h1>

            <h2>Programming Languages</h2>

            <h3>Proficient</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript (ES6)</li>
              <li>Java (8)</li>
              <li>Python (3)</li>
              <li>C/C++</li>
              <li>SQL (of many flavors)</li>
            </ul>

            <h3>Familiar</h3>
            <ul>
              <li>Scala</li>
              <li>Ruby</li>
              <li>R</li>
            </ul>

            <h2>Frameworks/Paradigms</h2>

            <h3>Proficient</h3>
            <ul>
              <li>React</li>
              <li>React Native</li>
              <li>D3</li>
              <li>Node.js</li>
              <li>Object-Oriented Programming</li>
              <li>Functional Programming</li>
              <li>MVC Design Patterns</li>
              <li>Mac OS</li>
              <li>Git/Github</li>
            </ul>

            <h3>Familiar</h3>
            <ul>
              <li>Redux</li>
              <li>ggplot/ggplot2</li>
              <li>Adobe Photoshop/Illustrator/Animate</li>
              <li>Maya</li>
            </ul>

            <h2>Tidbits</h2>
            <ul>
              <li>I speak (a survivable amount of) Spanish</li>
              <li>I can juggle</li>
              <li>I can roll sushi</li>
              <li>I've done 2D animation and I've made clay maquettes</li>
            </ul>

          </div>
        </div>

        <div id="projects" className="ThemeDark">
          <div className="TextBlock">
            <h1>Recent Projects</h1>

              <div className="ExperienceBlock">
                <h2>WPI First-Year Hub</h2>
                <ul>
                  <li>Cross-platform mobile application</li>
                  <li>Reimagination of WPI campus app</li>
                  <li>Features include an interactive campus map, personalized logins, and an extensive directory of campus resources</li>
                  <li>User testing showed that related tasks were completed 26% faster with the app than without</li>
                  <li>Proof-of-concept</li>
                  <li>Programmed in React Native</li>
                </ul>
                <div className="Screenshot">
                  <img className="ProjectScreenshot" src={first_year_hub} alt="First-Year Hub Screenshot"/>
                </div>
                <h3><a target="_blank" href="https://exp.host/@agringeri/MQP-app">check it out here</a></h3>
                <p>*you'll need an Android or iOS device and the Expo app</p>
              </div>

              <div className="ExperienceBlock">
                <h2>Data "Uncorked"</h2>
                <ul>
                  <li>Evaluated a set of ~130k wine reviews to build an interactive web visualiztion in a team of 2</li>
                  <li>Built using HTML, JavaScript, and D3</li>
                </ul>
                <div className="ImageBlock">
                  <img className="ProjectScreenshot" src={data_uncorked} alt="First-Year Hub Screenshot"/>
                </div>
                <h3><a target="_blank" href="https://data-uncorked.firebaseapp.com/">check it out here</a></h3>
              </div>

              <div className="ExperienceBlock">
                <h2>Graphical Perception Experiment</h2>
                <ul>
                  <li>Replicated a classic experiment to show differences in human perception of multiple graph types</li>
                  <li>Statistically evaluated data using bootstrapped confidence intervals to show findings</li>
                  <li>Built using HTML, JavaScript, and D3</li>
                </ul>
                <div className="ImageBlock">
                  <img className="ProjectScreenshot" src={graphical_perception} alt="Graphical Perception Screenshot"/>
                </div>
                <h3><a target="_blank" href="https://leitrim-s-finest.firebaseapp.com/">check it out here</a></h3>
              </div>

          </div>
        </div>

        <div id="contact" className="ThemeLight">
          <div className="TextBlock">
            <h1>Contact Me:</h1>
            <p><FontAwesomeIcon icon={ faAt }/> <a target="_blank" href="mailto:antgringeri@gmail.com">email me</a></p>
            <p><FontAwesomeIcon icon={ faFile }/> <a target="_blank" href={resume}>download (the boring version of) my resume</a></p>
            <p><FontAwesomeIcon icon={ faGithub }/> <a target="_blank" href="https://github.com/agringeri">here's my github page</a></p>
            <p><FontAwesomeIcon icon={ faLinkedin }/> <a target="_blank" href="https://www.linkedin.com/in/anthony-gringeri-832999105/">send me a message on linkedin (people do that?)</a></p>
            <p><FontAwesomeIcon icon={ faFacebook }/> <a target="_blank" href="https://www.facebook.com/anthony.gringeri">check out my facebook (or not)</a></p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
