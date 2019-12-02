import React from 'react';
import { personalAndFamily, survivorAndBeneficiary} from "./FormData"
import './FormView.css';

class FormView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
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
            field.options.forEach(option => {
                options.push(<option value={option.value}>{option.name}</option>);
            });
            return <select className="form-control" id={field.dataTag}>{options}</select>;
        
        } else if (field.type === 'textarea') {
            return <textarea className="form-control" id={field.dataTag} rows={3}></textarea>
        
        } else if (field.type === "checkbox") {
            return <input className="form-check-input" id={field.dataTag} type={field.type}></input>
        }

        else {
            return <input className="form-control" id={field.dataTag} type={field.type}></input>;
        }
    }

    createLabelMarkup = (field) => {
        let className = field.type !== 'checkbox' ? '' : 'form-check-label'
        return (<label className={className} htmlFor={field.dataTag}>{field.label}</label>)
    }

    createFormGroup = (field) => {
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
        <div className={className}>
            {innerFormGroup}
        </div>
        )
    }

    generateForm = (formData) => {
        // Begin the form with the title
        let formTitle = <h1 className="panel-title">{formData.title}</h1>;
        let formEntries = [];
        // Iterate through each of the fields
        formData.fields.forEach(fieldEntry => {
            // Handles if form entries should be on same line.
            if (fieldEntry.formRow) {
                let formRow = []
                fieldEntry.fields.forEach(field => {
                    formRow.push(this.createFormGroup(field));
                });
                formEntries.push(<div className="form-row">{formRow}</div>);
            } else {
                formEntries.push(this.createFormGroup(fieldEntry));
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

        fetch('/form', {
            method: 'POST',
            body: JSON.stringify(loginData),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            
        }).then((response) => {
            
        })
    }

    render() {
        return (
            <div className="col-xs-12 col-md-6">
                <form>
                    {this.generateForm(personalAndFamily)}
                    {this.generateForm(survivorAndBeneficiary)}
                    {/* <h1>Personal and Family</h1>
                    <div className="panel col-xs-12">
                        <div className="form-entry">
                            <label for="fname">First Name</label>
                            <input id="fname" type="text"></input>
                        </div>
                        <div className="form-entry">
                            <label for="mname">Middle Initial</label>
                            <input id="mname" type="text"></input>
                        </div>
                        <div className="form-entry">
                            <label for="lname">Last Name</label>
                            <input id="lname" type="text"></input>
                        </div>
                        <div className="form-entry">
                            <label for="dob">First Name</label>
                            <input id="dob" type="date"></input>
                        </div>
                        <div className="form-entry">
                            <label for="gender">Gender</label>
                            <select id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="transgender">Transgender</option>
                                <option value="gender-neutral">Gender Neutral</option>
                            </select>
                        </div>
                        <div className="form-entry">
                            <label for="marital-status">Marital Status</label>
                            <select i="marital-status">
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </select>
                        </div>
                    </div>  */}
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormView;
