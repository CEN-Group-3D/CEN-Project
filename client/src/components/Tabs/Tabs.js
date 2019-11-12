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
        this.props.onTabChangeCallback(index, this.props.titles[index])
    }

    render() {
        return (
            <React.Fragment>
                <div className="header">
                    {this.props.header}
                </div>
                <div className="tabs-container">
                    <div className="tabs-list">
                        <ul>
                            {
                                this.props.titles.map((value, index) => {
                                    return <li key={index}><button key={index} className="tab-button" onClick={() => this.handleClick(index)}>{value}</button></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="tabs-display">
                        { this.props.components[this.state.selectedTab] }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Tabs.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string),
    components: PropTypes.array,
    header: PropTypes.element,
}

export default Tabs;