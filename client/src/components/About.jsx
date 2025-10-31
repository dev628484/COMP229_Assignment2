import photo from "../images/devPhoto.png";
import resume from "../assets/devResume.pdf";

export default function About() {
  return (
    <div className="content about-container">
      <img src={photo} alt="My Photo" className="about-photo" />
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          Hello, my name is Dev Patel. I am a software engineering student studying at Centennial College
          with a strong foundation in programming and problem-solving. I enjoy applying my technical skills
          to build practical solutions, like web applications or repairing devices. My academic and project
          experiences have strengthened my ability to work both independently and in team settings. I am
          eager to contribute my skills, adaptability and enthusiasm to a fast-paced organization where I can
          continue to grow and add value. 

        </p>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          Check out my resume here (PDF)
        </a>
      </div>
    </div>
  );
}


