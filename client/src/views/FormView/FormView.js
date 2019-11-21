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
        let className = `form-control ${this.createLengthAttributes(field)}`

        // When the field.type is option, we want controlled input (like gender)
        if (field.type === "option") {
            let options = [];
            // Add each of the options to the array
            field.options.forEach(option => {
                options.push(<option value={option.value}>{option.name}</option>)
            });
            return <select className={className} id={field.dataTag}>{options}</select>
        } else {
            return <input className={className} id={field.dataTag} type={field.type}></input>
        }
    }

    createLabelMarkup = (field) => {
        return (<label for={field.dataTag}>{field.label}</label>)
    }

    createFormGroup = (field) => {
        return (
        <div className="form-group">
            {this.createLabelMarkup(field)}
            {this.createInputMarkup(field)}
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
                formEntries.push(this.createFormGroup(fieldEntry))
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
                </form>
            </div>
        );
    }
}

export default FormView;
