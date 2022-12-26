import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { Project } from "./components/Project";


const App = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <Project/>
      <Footer />
    </div>
  );
};

export default App;
