import './App.sass';
import Header from "./components/header/Header"
import {Navbar} from "./components/navbar/Navbar"
import {Footer} from "./components/footer/Footer"
import {Dialogs, DialogType, MessageType} from "./components/content/dialogs/Dialogs"
import {BrowserRouter, Route} from "react-router-dom"
import {Posts} from "./components/content/posts/Posts"
import {Profile} from "./components/content/profile/Profile"
import {News} from "./components/content/news/News"
import {PostType} from "./components/content/posts/post/Post";

type AppType = {
    posts: Array<PostType>
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="wrapper">
                    <Header />
                    <main className="main">
                        <Navbar />
                        <div className='content'>
                            <div className='content__imgWrapper'>
                                <img className='content__img' src="https://share.america.gov/wp-content/uploads/2018/06/international-waters-freedom-of-navigation-DY8ERP.jpg" alt="sea" />
                            </div>
                            <div className='content__desc'>
                                <Route path="/profile" component={Profile} />
                                <Route path="/posts" render={() => <Posts title="My Posts" posts={props.posts} />} />
                                <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} dialogsTitle="Dialogs" messages={props.messages} messagesTitle="Messages from " />} />
                                <Route path="/news" component={News} />
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
