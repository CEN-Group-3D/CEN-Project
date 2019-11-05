export let personalAndFamily = {
    title: "Personal and Family",
    fields: [
        {
            label: "First Name",
            dataTag: "fname",
            type: "text",
        },
        {
            label: "Middle Initial",
            dataTag: "mname",
            type: "text",
        },
        {
            label: "Last Name",
            dataTag: "lname",
            type: "text",
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
