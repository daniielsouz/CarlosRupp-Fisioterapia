import Header from "./components/Header";
import Services from "./pages/Services";
import About from "./pages/about";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
