import React from 'react';
import { personalAndFamily, survivorAndBeneficiary} from '../../FormView/FormView';

class FormsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        let formsData = [personalAndFamily, survivorAndBeneficiary];
    }

    render() { 
        return (
            <React.Fragment>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Last Modified</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default FormsTable;