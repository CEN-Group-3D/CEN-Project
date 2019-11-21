

export let personalAndFamily = {
    title: "Personal and Family",
    fields: [
        {
            formRow: true,
            fields: [
                // Length (within a formRow entry) relates to how much space the input
                // will take up. An length of -1 means that the length will be auto
                // generated to fit.
                // Lengths should add up to 12 or less
                {
                    label: "First Name",
                    dataTag: "fname",
                    type: "text",
                    length: 5,
                },
                {
                    label: "Middle Initial",
                    dataTag: "mname",
                    type: "text",
                    length: 1,
                },
                {
                    label: "Last Name",
                    dataTag: "lname",
                    type: "text",
                    length: 6,
                },
            ]
        },
        {
            label: "Date of Birth",
            dataTag: "dob",
            type: "date",
        },
	    {
            label: "Social Security Number",
            dataTag: "ssn",
            type: "text",
        },
	    {
            label: "What gender do you identify as?",
            dataTag: "gender",
            type: "option",
            options: [
                {name: "Male", value: "male"},
                {name: "Female", value: "female"},
                {name: "Transgender", value: "transgender"},
                {name: "Gender Neutral", value: "gender-neutral"}
            ]
        },
        {
            label: "What is your marital status?",
            dataTag: "marital-status",
            type: "option",
            options: [
                {name: "Single", value: "single"},
                {name: "Married", value: "married"},
                {name: "Divorced", value: "divorced"},
                {name: "Widowed", value: "widowed"}
            ]
        },
        {
            label: "Address Line 1",
            dataTag: "address1",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2",
            type: "text",
        },
        {
            label: "City",
            dataTag: "city",
            type: "text",
        },
        {
            label: "State",
            dataTag: "state",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zip",
            type: "number"
        },
        {
            label: "Religious Affiliation",
            dataTag: "religious-affiliation",
            type: "text"
        },
        {
            label: "Have you served in the military?",
            dataTag: "military-service",
            type: "checkbox"
        },
        {
            label: "What is your highest level of education attained?",
            dataTag: "education",
            type: "option",
            options: [
                {
                    name: "Primary School",
                    value: "primary-school"
                },
                {
                    name: "Secondary School",
                    value: "secondary-school",
                },
                {
                    name: "College",
                    value: "college"
                }
            ]
        },
        {
            label: "Organization Membership Date", // ?????
            dataTag: "org-date",
            type: "date"
        },
        {
            label: "What are your hobbies, if any?",
            dataTag: "hobbies",
            type: "textarea"
        },
        {
            label: "What are your interests, if any?",
            dataTag: "interests",
            type: "textarea",
        },
    ]
}

export let survivorAndBeneficiary = {
    title: "Survivor and Beneficiary",
    fields: [
        {
            label: "First Name of Spouse",
            dataTag: "fnameSp",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mnameSp",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lnameSp",
            type: "text",
        },
	    {
            label: "Relationship to Spouse",
            dataTag: "relatSp",
            type: "text",
        },
        {
            label: "Telephone",
            dataTag: "teleSp",
            type: "tel",
        },
        {
            label: "Address Line 1",
            dataTag: "address1Sp",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2Sp",
            type: "text",
        },
        {
            label: "City",
            dataTag: "citySp",
            type: "text",
        },
        {
            label: "State",
            dataTag: "stateSp",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zipSp",
            type: "number"
        },
        {
            label: "First Name of Domestic Partner",
            dataTag: "fnameDP",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mnameDP",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lnameDP",
            type: "text",
        },
	    {
            label: "Relationship to Domestic Partner",
            dataTag: "relatDP",
            type: "text",
        },
        {
            label: "Telephone",
            dataTag: "teleDP",
            type: "tel",
        },
        {
            label: "Address Line 1",
            dataTag: "address1DP",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2DP",
            type: "text",
        },
        {
            label: "City",
            dataTag: "cityDP",
            type: "text",
        },
        {
            label: "State",
            dataTag: "stateDP",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zipDP",
            type: "number"
        },
        {
            label: "First Name of Children",
            dataTag: "fnameCh",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mnameCh",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lnameCh",
            type: "text",
        },
	    {
            label: "Relationship to Child",
            dataTag: "relatCh",
            type: "text",
        },
        {
            label: "Telephone",
            dataTag: "teleCh",
            type: "tel",
        },
        {
            label: "Address Line 1",
            dataTag: "address1Ch",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2Ch",
            type: "text",
        },
        {
            label: "City",
            dataTag: "cityCh",
            type: "text",
        },
        {
            label: "State",
            dataTag: "stateCh",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zipCh",
            type: "number"
        },
        {
            label: "First Name of Step Child",
            dataTag: "fnameStCh",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mnameStCh",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lnameStCh",
            type: "text",
        },
	    {
            label: "Relationship to Step Child",
            dataTag: "relatStCh",
            type: "text",
        },
        {
            label: "Telephone",
            dataTag: "teleStCh",
            type: "tel",
        },
        {
            label: "Address Line 1",
            dataTag: "address1StCh",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2StCh",
            type: "text",
        },
        {
            label: "City",
            dataTag: "cityStCh",
            type: "text",
        },
        {
            label: "State",
            dataTag: "stateStCh",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zipStCh",
            type: "number"
        },
        {
            label: "Are any children under the age of 18?",
            dataTag: "underaged-children",
            type: "checkbox"
        },
        {
            label: "Are any children special needs?",
            dataTag: "special-needs-children",
            type: "checkbox"
        },
        //if yes, 
        {
            label: "First Name of Guardian",
            dataTag: "fname-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mname-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lname-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
	    {
            label: "Relationship to Child",
            dataTag: "relat-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "Telephone",
            dataTag: "tele-gaurdian-SpNeeds-UnderA",
            type: "tel",
        },
        {
            label: "Address Line 1",
            dataTag: "address1-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "City",
            dataTag: "city-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "State",
            dataTag: "state-gaurdian-SpNeeds-UnderA",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zip-gaurdian-SpNeeds-UnderA",
            type: "number"
        },
        //others

    
    ]
}



export let Assets = {
    title: "Assets",
    fields: [
        {
            label: "First Name of Spouse",
            dataTag: "fnameSp",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mnameSp",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lnameSp",
            type: "text",
        },
	    {
            label: "Relationship to Spouse",
            dataTag: "relatSp",
            type: "text",
        },
        {
            label: "Telephone",
            dataTag: "teleSp",
            type: "tel",
        },
        {
            label: "Address Line 1",
            dataTag: "address1Sp",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2Sp",
            type: "text",
        },
        {
            label: "City",
            dataTag: "citySp",
            type: "text",
        },
        {
            label: "State",
            dataTag: "stateSp",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zipSp",
            type: "number"
        },
        {
            label: "First Name of Domestic Partner",
            dataTag: "fnameDP",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mnameDP",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lnameDP",
            type: "text",
        },
	    {
            label: "Relationship to Domestic Partner",
            dataTag: "relatDP",
            type: "text",
        },
        {
            label: "Telephone",
            dataTag: "teleDP",
            type: "tel",
        },
        {
            label: "Address Line 1",
            dataTag: "address1DP",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2DP",
            type: "text",
        },
        {
            label: "City",
            dataTag: "cityDP",
            type: "text",
        },
        {
            label: "State",
            dataTag: "stateDP",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zipDP",
            type: "number"
        },
        {
            label: "First Name of Children",
            dataTag: "fnameCh",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mnameCh",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lnameCh",
            type: "text",
        },
	    {
            label: "Relationship to Child",
            dataTag: "relatCh",
            type: "text",
        },
        {
            label: "Telephone",
            dataTag: "teleCh",
            type: "tel",
        },
        {
            label: "Address Line 1",
            dataTag: "address1Ch",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2Ch",
            type: "text",
        },
        {
            label: "City",
            dataTag: "cityCh",
            type: "text",
        },
        {
            label: "State",
            dataTag: "stateCh",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zipCh",
            type: "number"
        },
        {
            label: "First Name of Step Child",
            dataTag: "fnameStCh",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mnameStCh",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lnameStCh",
            type: "text",
        },
	    {
            label: "Relationship to Step Child",
            dataTag: "relatStCh",
            type: "text",
        },
        {
            label: "Telephone",
            dataTag: "teleStCh",
            type: "tel",
        },
        {
            label: "Address Line 1",
            dataTag: "address1StCh",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2StCh",
            type: "text",
        },
        {
            label: "City",
            dataTag: "cityStCh",
            type: "text",
        },
        {
            label: "State",
            dataTag: "stateStCh",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zipStCh",
            type: "number"
        },
        {
            label: "Are any children under the age of 18?",
            dataTag: "underaged-children",
            type: "checkbox"
        },
        {
            label: "Are any children special needs?",
            dataTag: "special-needs-children",
            type: "checkbox"
        },
        //if yes, 
        {
            label: "First Name of Guardian",
            dataTag: "fname-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mname-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lname-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
	    {
            label: "Relationship to Child",
            dataTag: "relat-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "Telephone",
            dataTag: "tele-gaurdian-SpNeeds-UnderA",
            type: "tel",
        },
        {
            label: "Address Line 1",
            dataTag: "address1-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "Address Line 2",
            dataTag: "address2-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "City",
            dataTag: "city-gaurdian-SpNeeds-UnderA",
            type: "text",
        },
        {
            label: "State",
            dataTag: "state-gaurdian-SpNeeds-UnderA",
            type: "option",
            options: [
                {
                    name: "Alabama",
                    value: "AL"
                },
                {
                    name: "Alaska",
                    value: "AK"
                },
                {
                    name: "American Samoa",
                    value: "AS"
                },
                {
                    name: "Arizona",
                    value: "AZ"
                },
                {
                    name: "Arkansas",
                    value: "AR"
                },
                {
                    name: "California",
                    value: "CA"
                },
                {
                    name: "Colorado",
                    value: "CO"
                },
                {
                    name: "Connecticut",
                    value: "CT"
                },
                {
                    name: "Delaware",
                    value: "DE"
                },
                {
                    name: "District Of Columbia",
                    value: "DC"
                },
                {
                    name: "Federated States Of Micronesia",
                    value: "FM"
                },
                {
                    name: "Florida",
                    value: "FL"
                },
                {
                    name: "Georgia",
                    value: "GA"
                },
                {
                    name: "Guam",
                    value: "GU"
                },
                {
                    name: "Hawaii",
                    value: "HI"
                },
                {
                    name: "Idaho",
                    value: "ID"
                },
                {
                    name: "Illinois",
                    value: "IL"
                },
                {
                    name: "Indiana",
                    value: "IN"
                },
                {
                    name: "Iowa",
                    value: "IA"
                },
                {
                    name: "Kansas",
                    value: "KS"
                },
                {
                    name: "Kentucky",
                    value: "KY"
                },
                {
                    name: "Louisiana",
                    value: "LA"
                },
                {
                    name: "Maine",
                    value: "ME"
                },
                {
                    name: "Marshall Islands",
                    value: "MH"
                },
                {
                    name: "Maryland",
                    value: "MD"
                },
                {
                    name: "Massachusetts",
                    value: "MA"
                },
                {
                    name: "Michigan",
                    value: "MI"
                },
                {
                    name: "Minnesota",
                    value: "MN"
                },
                {
                    name: "Mississippi",
                    value: "MS"
                },
                {
                    name: "Missouri",
                    value: "MO"
                },
                {
                    name: "Montana",
                    value: "MT"
                },
                {
                    name: "Nebraska",
                    value: "NE"
                },
                {
                    name: "Nevada",
                    value: "NV"
                },
                {
                    name: "New Hampshire",
                    value: "NH"
                },
                {
                    name: "New Jersey",
                    value: "NJ"
                },
                {
                    name: "New Mexico",
                    value: "NM"
                },
                {
                    name: "New York",
                    value: "NY"
                },
                {
                    name: "North Carolina",
                    value: "NC"
                },
                {
                    name: "North Dakota",
                    value: "ND"
                },
                {
                    name: "Northern Mariana Islands",
                    value: "MP"
                },
                {
                    name: "Ohio",
                    value: "OH"
                },
                {
                    name: "Oklahoma",
                    value: "OK"
                },
                {
                    name: "Oregon",
                    value: "OR"
                },
                {
                    name: "Palau",
                    value: "PW"
                },
                {
                    name: "Pennsylvania",
                    value: "PA"
                },
                {
                    name: "Puerto Rico",
                    value: "PR"
                },
                {
                    name: "Rhode Island",
                    value: "RI"
                },
                {
                    name: "South Carolina",
                    value: "SC"
                },
                {
                    name: "South Dakota",
                    value: "SD"
                },
                {
                    name: "Tennessee",
                    value: "TN"
                },
                {
                    name: "Texas",
                    value: "TX"
                },
                {
                    name: "Utah",
                    value: "UT"
                },
                {
                    name: "Vermont",
                    value: "VT"
                },
                {
                    name: "Virgin Islands",
                    value: "VI"
                },
                {
                    name: "Virginia",
                    value: "VA"
                },
                {
                    name: "Washington",
                    value: "WA"
                },
                {
                    name: "West Virginia",
                    value: "WV"
                },
                {
                    name: "Wisconsin",
                    value: "WI"
                },
                {
                    name: "Wyoming",
                    value: "WY"
                }
            ]
        },
        {
            label: "Postal Code",
            dataTag: "zip-gaurdian-SpNeeds-UnderA",
            type: "number"
        },
        //others

    
    ]
}

