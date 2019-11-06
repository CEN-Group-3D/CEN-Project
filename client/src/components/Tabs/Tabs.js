import React from 'react';
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
        this.props.handleTabChangeCallback(index);
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.titles.map((value, index) => {
                            return <li key={index}><button key={index} className="tab-button" onClick={() => this.handleClick(index)}>{value}</button></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Tabs;