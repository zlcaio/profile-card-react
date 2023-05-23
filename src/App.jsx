import Profile from "./components/Profile";
import bakiImg from "./assets/baki-profile.jpg";
import "./index.css"

export default function App() {
  

  return (
    <div className="app">
      <Profile
      avatar={bakiImg}
      name="Caio Guilherme"
      bio="Front end React developer"
      email="caiofrontdev677@proton.me"
      phone="+55 11 98311-4169"
      githubUrl="https://github.com/zlcaio"
      linkedinUrl="https://www.linkedin.com/in/caio-guilherme-5b8387262/"
       />
    </div>
  )
}


