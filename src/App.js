import logo from './logo.svg';
import './App.css';

const About=()=>{
  return(
    <div >
    <h1>Mukka Saiteja</h1>
  <h5>graduate,full stack developer</h5>
  <span><a href="#">Github</a></span> <span><a href="#">Linkdin</a></span><hr/>
  </div>

  );
}
const Experiences=()=>{
  return(
    <div >
      <h2>Experiences</h2>
      <h3>software developer</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id explicabo officia maxime dolorum eaque, illum velit placeat qui provident, iste, deserunt necessitatibus molestias enim non quod beatae distinctio quos repellendus est nostrum vitae. Totam atque eligendi quos quae earum. Odit natus quidem non quia! Recusandae quasi dolores quos, nulla enim, provident possimus cumque, praesentium iure corrupti aspernatur. Quibusdam iure sunt eos nihil perferendis nulla, incidunt consequatur repudiandae aliquid numquam corporis at. Delectus eligendi nulla earum deserunt eos quasi illum maiores aliquam. Tempora vel delectus dignissimos nihil qui voluptatem, laboriosam atque sit sint! Quidem dicta fuga distinctio exercitationem, quia voluptas quibusdam!
      </p><hr/>

    </div>
  )
}
const Skills=()=>{
  return(
    <div >
    <h3>skills</h3>
    <ul>
      <li>javascript</li>
      <li>html and css</li>
      <li>core java</li>
      <li>core python</li>
    </ul><hr/>
  </div>
  )
}
const Hobbies=()=>{
  return(
    <div >
    <h3>hobbies</h3>
    <ul>
      <li>playing online games</li>
      <li>reading books</li>
      <li>cricket</li>
    </ul><hr/>
  </div>
  )
}
const Cv=()=>{
  return(
    <div>
      <About/>
      <Experiences/>
      <Skills/>
      <Hobbies/>
    </div>
  )
}

export default Cv;
