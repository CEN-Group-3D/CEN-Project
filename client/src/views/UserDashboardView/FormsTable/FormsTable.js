import React from 'react';
import FormEntry from './FormEntry';
import { personalAndFamily, survivorAndBeneficiary} from '../../FormView/FormData';

class FormsTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formsData: [personalAndFamily, survivorAndBeneficiary],
            userPlan: this.props.userPlan,
        };
    }

    render() { 
        return (
            <React.Fragment>
                {
                    this.state.userPlan === 0 ?
                        <p>You don't seem to have a plan. Purchase one <a href="/payments">here</a> to continue</p>
                    :
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Last Modified</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.formsData.map((form, index) => {
                                return (
                                    <FormEntry 
                                        key={index}
                                        title={form.title}
                                        formID={form.id}
                                        formPlan={form.plan}
                                        userPlan={this.state.userPlan}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                }
            </React.Fragment>
        )
    }
}

export default FormsTable;