import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 0,
        };
    }

    handleClick = (index) => {
        this.setState({
            selectedTab: index,
        })
    }

    render() {
        return (
            <div className="tabs-container">
                <div>
                    <ul>
                        {
                            this.props.titles.map((value, index) => {
                                return <li key={index}><button key={index} className="tab-button" onClick={() => this.handleClick(index)}>{value}</button></li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    { this.props.components[this.state.selectedTab] }
                </div>
            </div>
        )
    }
}

Tabs.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string),
}

export default Tabs;