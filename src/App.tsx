import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ConctactPage from "./pages/ConctactPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header/>
      <main className="pt-16">
        <HomePage />
        <AboutPage />
        <ProjectPage />
        <ConctactPage />
      </main>
      <section className="flex-grow flex items-center justify-center bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Bienvenue sur mon Portfolio</h1>
      </section>

      <Navbar />
    </div>
  );
};

export default App;