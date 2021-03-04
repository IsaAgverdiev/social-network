import "./styles/App.scss";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";

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
