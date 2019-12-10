let awcNutritionData = {
    "kpi": [
        [
            {
                "label": "Underweight (Weight-for-Age)",
                "help_text": "Of the total children weighed, the percentage of children between 0-5 years who were moderately/severely underweight in the current month. Children who are moderately or severely underweight have a higher risk of mortality. ",
                "percent": -14.285714285714295,
                "color": "green",
                "value": 6,
                "all": 50,
                "format": "percent_and_div",
                "frequency": "month"
            },
            {
                "label": "Wasting (Weight-for-Height)",
                "help_text": "Of the children enrolled for Anganwadi services, whose weight and height was measured, the percentage of children between 0 - 5 years who were moderately/severely wasted in the current month. <br/><br/>Severe Acute Malnutrition (SAM) or wasting in children is a symptom of acute undernutrition usually as a consequence of insufficient food intake or a high incidence of infectious diseases.",
                "percent": 2.500000000000002,
                "color": "red",
                "value": 1,
                "all": 40,
                "format": "percent_and_div",
                "frequency": "month"
            }
        ],
        [
            {
                "label": "Stunting (Height-for-Age)",
                "help_text": "Of the children whose height was measured, the percentage of children between 0 - 5 years who were moderately/severely stunted in the current month.<br/><br/>Stunting is a sign of chronic undernutrition and has long lasting harmful consequences on the growth of a child",
                "percent": 43.5,
                "color": "red",
                "value": 21,
                "all": 40,
                "format": "percent_and_div",
                "frequency": "month"
            },
            {
                "label": "Weighing Efficiency",
                "help_text": "Of the children between the ages of 0-5 years who are enrolled for Anganwadi Services, the percentage who were weighed in the given month. ",
                "percent": -1.886792452830193,
                "color": "red",
                "value": 50,
                "all": 53,
                "format": "percent_and_div",
                "frequency": "month"
            }
        ],
        [
            {
                "label": "Newborns with Low Birth Weight",
                "help_text": "Of all the children born and weighed in the current month and enrolled for Anganwadi services, the percentage that had a birth weight less than 2500 grams. Newborns with Low Birth Weight are closely associated with fetal and neonatal mortality and morbidity, inhibited growth and cognitive development, and chronic diseases later in life. ",
                "percent": "Data in the previous reporting period was 0",
                "color": "red",
                "value": 0,
                "all": 0,
                "format": "percent_and_div",
                "frequency": "month"
            },
            {
                "label": "Early Initiation of Breastfeeding",
                "help_text": "Of the children born in the last month and enrolled for Anganwadi services, the percentage whose breastfeeding was initiated within 1 hour of delivery. Early initiation of breastfeeding ensure the newborn recieves the \"first milk\" rich in nutrients and encourages exclusive breastfeeding practice",
                "percent": -100,
                "color": "red",
                "value": 0,
                "all": 0,
                "format": "percent_and_div",
                "frequency": "month"
            }
        ],
        [
            {
                "label": "Exclusive breastfeeding",
                "help_text": "Of the total children enrolled for Anganwadi services between the ages of 0 to 6 months, the percentage that was exclusively fed with breast milk. An infant is exclusively breastfed if they receive only breastmilk with no additional food or liquids (even water), ensuring optimal nutrition and growth between 0 - 6 months",
                "percent": -38.88888888888889,
                "color": "red",
                "value": 5,
                "all": 10,
                "format": "percent_and_div",
                "frequency": "month"
            },
            {
                "label": "Children initiated appropriate Complementary Feeding",
                "help_text": "Of the total children enrolled for Anganwadi services between the ages of 6 to 8 months, the percentage that was given a timely introduction to solid, semi-solid or soft food. Timely intiation of complementary feeding in addition to breastmilk at 6 months of age is a key feeding practice to reduce malnutrition",
                "percent": -33.33333333333334,
                "color": "red",
                "value": 2,
                "all": 3,
                "format": "percent_and_div",
                "frequency": "month"
            }
        ],
        [
            {
                "label": "Immunization Coverage (at age 1 year)",
                "help_text": "Of the total number of children enrolled for Anganwadi Services who are over a year old, the percentage of children who have received the complete immunization as per the National Immunization Schedule of India that is required by age 1.<br/><br/> This includes the following immunizations:<br/> If Pentavalent path: Penta1/2/3, OPV1/2/3, BCG, Measles, VitA1<br/> If DPT/HepB path: DPT1/2/3, HepB1/2/3, OPV1/2/3, BCG, Measles, VitA1",
                "percent": 2.923976608187135,
                "color": "green",
                "value": 20,
                "all": 45,
                "format": "percent_and_div",
                "frequency": "month"
            },
            {
                "label": "Institutional Deliveries",
                "help_text": "Of the total number of women enrolled for Anganwadi services who gave birth in the last month, the percentage who delivered in a public or private medical facility. Delivery in medical instituitions is associated with a decrease in maternal mortality rate",
                "percent": -100,
                "color": "red",
                "value": 0,
                "all": 0,
                "format": "percent_and_div",
                "frequency": "month"
            }
        ]
    ]
};

let awcDemographicData = {
    "chart": [
        {
            "key": "Children (0-6 years)",
            "values": [
                [
                    "0-1 month",
                    0
                ],
                [
                    "1-6 months",
                    10
                ],
                [
                    "6-12 months",
                    5
                ],
                [
                    "1-3 years",
                    18
                ],
                [
                    "3-6 years",
                    27
                ]
            ],
            "classed": "dashed"
        }
    ],
    "kpi": [
        [
            {
                "label": "Registered Households",
                "help_text": "Total number of households registered",
                "percent": 0,
                "color": "red",
                "value": 226,
                "all": "",
                "format": "number",
                "frequency": "day"
            },
            {
                "label": "Aadhaar-seeded Beneficiaries",
                "help_text": "Of the total number of ICDS beneficiaries, the percentage whose Aadhaar identification has been captured. ",
                "percent": 0,
                "color": "red",
                "value": 31,
                "all": 78,
                "format": "percent_and_div",
                "frequency": "day"
            }
        ],
        [
            {
                "label": "Children enrolled for Anganwadi Services",
                "help_text": "Of the total number of children between 0-6 years, the percentage of children who are enrolled for Anganwadi Services",
                "percent": 0,
                "color": "red",
                "value": 60,
                "all": 62,
                "format": "percent_and_div",
                "frequency": "day"
            },
            {
                "label": "Pregnant women enrolled for Anganwadi Services",
                "help_text": "Of the total number of pregnant women, the percentage of pregnant women enrolled for Anganwadi Services",
                "percent": 0,
                "color": "red",
                "value": 8,
                "all": 8,
                "format": "percent_and_div",
                "frequency": "day"
            }
        ],
        [
            {
                "label": "Lactating women enrolled for Anganwadi Services",
                "help_text": "Of the total number of lactating women, the percentage of lactating women enrolled for Anganwadi Services",
                "percent": 0,
                "color": "red",
                "value": 10,
                "all": 10,
                "format": "percent_and_div",
                "frequency": "day"
            },
            {
                "label": "Adolescent girls enrolled for Anganwadi Services",
                "help_text": "Of the total number of adolescent girls (aged 11-14 years), the percentage of girls enrolled for Anganwadi Services",
                "percent": 0,
                "color": "red",
                "value": 22,
                "all": 22,
                "format": "percent_and_div",
                "frequency": "day"
            }
        ]
    ]
};

let awcInfrastructureData = {
    "kpi": [
        [
            {
                "label": "Clean Drinking Water",
                "help_text": null,
                "value": "Available",
                "all": "",
                "format": "string",
                "show_percent": false,
                "frequency": "month"
            },
            {
                "label": "Functional Toilet",
                "help_text": null,
                "value": "Available",
                "all": "",
                "format": "string",
                "show_percent": false,
                "frequency": "month"
            }
        ],
        [
            {
                "label": "Weighing Scale: Infants",
                "help_text": null,
                "value": "Available",
                "all": "",
                "format": "string",
                "show_percent": false,
                "frequency": "month"
            },
            {
                "label": "AWCs with Weighing Scale: Mother and Child",
                "help_text": null,
                "value": "Available",
                "all": "",
                "format": "string",
                "show_percent": false,
                "frequency": "month"
            }
        ],
        [
            {
                "label": "Medicine Kit",
                "help_text": null,
                "value": "Data Not Entered",
                "all": "",
                "format": "string",
                "show_percent": false,
                "frequency": "month"
            },
            {
                "label": "Infantometer",
                "help_text": null,
                "value": "Available",
                "all": "",
                "format": "string",
                "show_percent": false,
                "frequency": "month"
            }
        ],
        [
            {
                "label": "Stadiometer",
                "help_text": null,
                "value": "Available",
                "all": "",
                "format": "string",
                "show_percent": false,
                "frequency": "month"
            }
        ]
    ]
};
