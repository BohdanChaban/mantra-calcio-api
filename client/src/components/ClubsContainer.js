import React, { Component } from 'react';
import axios from 'axios';
import Club from './Club';

class ClubsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            clubs: []
        }
    }

    componentDidMount() {
        axios.get('api/v1/clubs.json')
            .then(response => {
                this.setState({
                    clubs: response.data
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="clubs-container container">
                <div className="row">
                    {this.state.clubs.map( club => {
                        return (<Club club={club} key={club.id} />)
                    })}
                </div>
            </div>
        )
    }
}

export default ClubsContainer;
