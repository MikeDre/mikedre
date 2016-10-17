import React from 'react';

// import Head from './Head.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends React.Component {

    constructor() {
        super();

        // getInitialState
        this.state = {
        };
    }

    render() {
        return (
            <div className="wrapper__app">
                <Header />
                App Component
                <Footer />
            </div>
        )
    }
}

export default App;
