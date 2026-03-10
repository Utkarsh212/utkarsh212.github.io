import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import OffScreen from "./components/OffScreen";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col pt-16 selection:bg-brand-accent selection:text-brand-bg">
        <Header />

        <main className="flex-grow flex flex-col">
          <Hero />

          <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-32 py-20">
            <Experience />
            <Projects />
            <Skills />
            <CurrentlyBuilding />
            <OffScreen />
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
