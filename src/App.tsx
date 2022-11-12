import './App.sass';
import Header from "./components/header/Header"
import {Navbar} from "./components/navbar/Navbar";
import {Content} from "./components/content/Content";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className="container">
            <div className="wrapper">
                <Header />
                <main className="main">
                    <Navbar />
                    <Content />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
