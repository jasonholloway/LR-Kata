import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from './core'
import { Dispatch } from "redux";
import { hotelsSearched } from "./actions";
import { summedReturnTypes } from "./utils";

function stateProps(state: State) {
    return {
        hotels: state.hotels
    };
}

function dispatchProps(dispatch: Dispatch) {
    return {
        searchHotels(filter: string) { dispatch(hotelsSearched({ filter })) }
    };
}

type Props = summedReturnTypes<typeof stateProps, typeof dispatchProps>

class View extends Component<Props> {
    
    componentDidMount() {
        this.props.searchHotels('Skegness');
    }

    render() {
        return <section id="hotelList">
                    Hello!
                    <ul>
                        {this.props.hotels.map(h => <li key={h.id}>Hotel {h.id}</li>)}
                    </ul>
                </section>
    }
}

export default connect(stateProps, dispatchProps)(View);