import project1 from "../images/nim.png";
import project2 from "../images/calculator.png";
import project3 from "../images/sudoku.png";

export default function Projects() {
  return (
    <div className="content">
        <h1>My projects</h1>
        <p>Project 1 - A game of Nim made in Java, developed by me for a class assignment.</p>
        <img src={project1} alt="Nim Game" className="nim-photo"/>
        <p>Project 2 - A calulator made in Java, developed by me for a class assignment.</p>
        <img src={project2} alt="Calculator" className="calculator-photo"/>
        <p>Project 3 - A sudoku solver made in Python, developed by me for a class assignment.</p>
        <img src={project3} alt="Sudoku Solver" className="sudoku-photo" />
    </div>
  );
}