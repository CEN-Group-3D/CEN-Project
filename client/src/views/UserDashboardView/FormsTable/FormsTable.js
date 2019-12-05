import React from 'react';
import FormEntry from './FormEntry';
import { personalAndFamily, survivorAndBeneficiary} from '../../FormView/FormData';

class FormsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formsData: [personalAndFamily, survivorAndBeneficiary],
            userPlan: -1,
            userForms: []
        };
    }

    componentDidMount() {
        fetch('/user/form', {
            method: 'GET',
            credentials: 'include'
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log('error loading form');
            }
        }).then((data) => {
            this.setState({paymentPlan: data.plan})
        })

        fetch('/user/dashboard', {
            method: 'GET',
            credentials: 'include'
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log('error loading data');
            }
        }).then((data) => {
            console.log(data);
        })
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
                        {this.state.formsData.map((form, index) => {
                            return (
                                <FormEntry 
                                    key={index}
                                    title={form.title}
                                    fields={form.fields}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

export default FormsTable;