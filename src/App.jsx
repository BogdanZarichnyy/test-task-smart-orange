import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Tasks from './components/tasks/Tasks';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

import scss from './App.module.css';

function App() {
    return (
        <>
            <Header />

            <main className={scss.main}>

                <Home />

                <About />

                <Tasks />

                <Projects />

                <Contacts />

            </main>

            <Footer />
        </>
    );
}

export default App;