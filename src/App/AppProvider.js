import _ from "lodash";
import React from "react";

const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard', //default page
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(), //spread the saved settings
            setPage: this.setPage, //function to set the page
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
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

    addCoin = key => {
        let favorites = [...this.state.favorites];
        if (favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({ favorites });
        }
    }

    removeCoin = key => {
        let favorites = [...this.state.favorites];
        this.setState({ favorites: _.pull(favorites, key) });
    }

    isInFavorites = key => _.includes(this.state.favorites, key);

    confirmFavorites = () => {
        // console.log('Hello');
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({ 
            favorites: this.state.favorites
        }));
    }

    savedSettings() {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData) {
            return { page: 'settings', firstVisit: true }; //return the default settings
        }
        let { favorites } = cryptoDashData;
        return {favorites};
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