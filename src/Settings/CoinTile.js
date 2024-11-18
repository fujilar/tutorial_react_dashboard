import React from "react";
import {AppContext} from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";


// eslint-disable-next-line import/no-anonymous-default-export
export default function ({coinkey}) {

    const TileClass = SelectableTile;

    return (
        <AppContext.Consumer>
            {({coinList}) => {
              let coin = coinList[coinkey];

              const TileClass = SelectableTile;
            }}
        </AppContext.Consumer>
    );
}
