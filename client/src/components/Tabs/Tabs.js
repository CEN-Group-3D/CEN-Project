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
                <div id="tabs-header">
                    {this.props.header}
                </div>
                <div id="tabs-container">
                    <div id="tabs-list">
                        <ul>
                            {
                                this.props.titles.map((value, index) => {
                                    return (<li key={index}>
                                                <button 
                                                    key={index} 
                                                    className={`${index === this.state.selectedTab ? 'active' : ''} 
                                                                ${index === 0 ? 'first-tab-button' : index === this.props.titles.length - 1 ? 'last-tab-button' : ''}
                                                                tab-button
                                                                btn
                                                                btn-light`}
                                                    onClick={() => this.handleClick(index)}>
                                                    {value}
                                                </button>
                                            </li>)
                                })
                            }
                        </ul>
                    </div>
                    <div id="tabs-display">
                        { this.props.components[this.state.selectedTab] }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

Tabs.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    components: PropTypes.array.isRequired,
    onTabChangeCallback: PropTypes.func,
    header: PropTypes.element,
}

export default Tabs;