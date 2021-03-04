import "./styles/App.scss";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-wrapper grid__wrapper">
      <Header />
      <Aside />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
