import React from "react";

const cc = require('cryptocompare');

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard', //default page
            ...this.savedSettings(), //spread the saved settings
            setPage: this.setPage, //function to set the page
            confirmFavorites: this.confirmFavorites
        }
    }

    componentDidMount = () => {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data;
        this.setState({ coinList });
    }

    confirmFavorites = () => {
        // console.log('Hello');
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({ 
            test: 'hello' 
        }));
    }

    savedSettings() {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData) {
            return { page: 'settings', firstVisit: true }; //return the default settings
        }
        return {};
    }

    setPage = page => this.setState({ page }); //function to set the page

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
    
}