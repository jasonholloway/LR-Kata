import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { sumReturnTypes } from "../../utils";
import { hotelsSearched } from "../../modules/hotelSearch/actions";
import State from "../../State";

const stateProps = (state: State) => ({
    hotels: state.hotelSearch.hotels
});

const dispatchProps = (dispatch: Dispatch) => ({
    searchHotels: (filter: string) => dispatch(hotelsSearched({ filter }))
});

type Props = sumReturnTypes<typeof stateProps, typeof dispatchProps>

class HotelSearch extends Component<Props> {    
    componentDidMount() {
        this.props.searchHotels('Skegness');
    }

    render() {
        return <section id="hotelSearch">
                    <h1>Hotels</h1>
                    <ul>
                        {this.props.hotels.map(h => 
                            <li key={h.name}>
                                <h3>{h.name}</h3>
                                <span>boasts {h.facilities.join(', ')}</span>
                            </li>
                        )}
                    </ul>
                </section>
    }
}

export default connect(stateProps, dispatchProps)(HotelSearch);