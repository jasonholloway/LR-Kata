import React, { Component } from "react";
import { connect } from "react-redux";
import { State } from './core'
import { Dispatch } from "redux";

type Props = ReturnType<typeof stateProps> & ReturnType<typeof dispatchProps>

function stateProps(state: State) {
    return {

    };
}

function dispatchProps(dispatch: Dispatch) {
    return {
        searchHotels() { dispatch({ type: 'SEARCH_REQUEST' }) }
    };
}

class View extends Component<Props> {
    
    componentDidMount() {
        this.props.searchHotels();
    }

    render() {
        return <section id="hotelList">
                    Hello!
                    <ul>

                    </ul>
                </section>
    }
}

export default connect(stateProps, dispatchProps)(View);