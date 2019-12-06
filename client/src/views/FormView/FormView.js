import React from 'react';
import { personalAndFamily, survivorAndBeneficiary} from "./FormData"
import './FormView.css';

class FormView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            paymentPlan: -1,
            editingFormID: 0,
        };
    }

    componentDidMount() {
        // Check if user is editting a form
        let queryString = new URLSearchParams(window.location.search);
        let focusedForm = queryString.get('id');

        if (focusedForm) {
            this.setState({editingFormID: parseInt(focusedForm)});
        }
        

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
            if (data) {
                this.setState({paymentPlan: data.plan})
            }
        })
    }

    createLengthAttributes = (field) => {
        if (field.length) {
            if (field.length === -1) {
                return 'col';
            } else {
                return `col-md-${field.length}`;
            }
        } else {
            return ''
        }
    }

    createInputMarkup = (field) => {
        // When the field.type is option, we want controlled input (like gender)
        if (field.type === "option") {
            let options = [];
            // Add each of the options to the array
            field.options.forEach((option, index) => {
                options.push(<option key={index} value={option.value}>{option.name}</option>);
            });
            return <select className="form-control" name={field.dataTag} id={field.dataTag}>{options}</select>;
        
        } else if (field.type === 'textarea') {
            return <textarea className="form-control" name={field.dataTag} id={field.dataTag} rows={3}></textarea>
        
        } else if (field.type === "checkbox") {
            return <input className="form-check-input" name={field.dataTag} id={field.dataTag} type={field.type}></input>
        }

        else {
            return <input className="form-control" name={field.dataTag} id={field.dataTag} type={field.type}></input>;
        }
    }

    createLabelMarkup = (field) => {
        let className = field.type !== 'checkbox' ? '' : 'form-check-label'
        return (<label className={className} htmlFor={field.dataTag}>{field.label}</label>)
    }

    createFormGroup = (field, key) => {
        let className = `form-group ${this.createLengthAttributes(field)}`
        let innerFormGroup = null;

        if (field.type === 'checkbox') {
            innerFormGroup = <div className="form-check">
                                {this.createInputMarkup(field)}
                                {this.createLabelMarkup(field)}
                            </div>
        } else {
            innerFormGroup = <React.Fragment>
                                {this.createLabelMarkup(field)}
                                {this.createInputMarkup(field)}
                            </React.Fragment>
        }

        return (
            <div key={key} className={className}>
                {innerFormGroup}
            </div>
        )
    }

    generateForm = (formData) => {
        // Begin the form with the title
        let formTitle = <h1 className="panel-title">{formData.title}</h1>;
        let formEntries = [];
        // Iterate through each of the fields
        formData.fields.forEach((fieldEntry, index) => {
            // Handles if form entries should be on same line.
            if (fieldEntry.formRow) {
                let formRow = []
                fieldEntry.fields.forEach((field, index) => {
                    formRow.push(this.createFormGroup(field, index));
                });
                formEntries.push(<div key={index} className="form-row">{formRow}</div>);
            } else {
                formEntries.push(this.createFormGroup(fieldEntry, index));
            }
        });

        return (<div className="container panel col-12">
                    {formTitle}
                    <div className="panel-content">
                        {formEntries}
                    </div>
                </div>
                );
    }


    handleSubmit = (evt) => {
        evt.preventDefault();

        let form = evt.target;
        let formData = new FormData(form);

        fetch('/user/form', {
            method: 'PUT',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            
        }).then((response) => {
            if (response.ok) {
                window.location = '/dashboard'
            }
        })
    }

    render() {


        return (
            <div className="col-xs-12 col-md-6">
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.paymentPlan === -1 ?
                            <div className="loading-panel panel container col-6">
                                <h1>Loading...</h1>
                            </div> 
                        :
                            <React.Fragment>
                                {
                                    this.state.paymentPlan >= personalAndFamily.plan ?
                                        this.generateForm(personalAndFamily)
                                    :
                                        null
                                }
                                {
                                    this.state.paymentPlan >= survivorAndBeneficiary.plan ?
                                        this.generateForm(survivorAndBeneficiary)
                                    :
                                        null
                                }
                                {
                                    this.state.paymentPlan > 0 ?
                                        <div id="form-submit-container" className="container panel col-12">
                                            <button className="btn btn-primary btn-lg btn-block">Submit</button>
                                        </div>
                                    :
                                        <div className="loading-panel panel container col-6">
                                            <h1>Oops, make sure to pay for a <a href="/payments">plan</a>!</h1>
                                        </div>
                                }
                            </React.Fragment>
                    }
                </form>
            </div>
        );
    }
}

export default FormView;
