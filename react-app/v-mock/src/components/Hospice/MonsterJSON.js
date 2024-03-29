/* eslint-disable no-multi-str */
export const MonsterJSON = [
    {
        "name": "Stairs, Not The Stairs!",
        "type": "Activities of Daily Living (ADL)",
        "id": 1,
        "level": 3,
        "modifiers": "+1 to Monster against grandmas with mobility limitations",
        "text": 
            {"body": "1 in 4 seniors fall every year",
            "source": "dailycaring.com, Douglas & Zavotka 2006"
            },
        "win": "Grandparent does not advance a level",
        "lose": "Grandma falls and goes up 2 levels",
    },
    {
        "name": "Storage Garage, Hoarders Edition",
        "id": 2,
        "type": "Activities of Daily Living (ADL)",
        "level": 3,
        "modifiers":"-2 to families with a Deadbeat. \
            -1 to grandma with Mobility Limitations \
            -1 to grandma with History of Poverty",
        "text": 
            {"body": "As parents age, families must cope with selling off assets \
                and downsize. This can be a stressfull experience for all.",
            "source": "Douglas & Zavotka 2006"
            },
        "win": "Sell off vintage assets. Family advances a level",
        "lose": "Family loses a level"
    },
    {
        "name": "Nigerian Prince",
        "type": "Fraud",
        "id": 3,
        "level": 4,
        "modifiers": "",
        "text": 
            {"body": "Financial scams targeting elderly have become so prevelent that \
            they're now considered the 'crime of the 21st centry'. Families can \
            reduce their aging parents risks to fraud by being activily involved in their\
            daily lives and finances.",
            "source": "https://consumer.georgia.gov/top-10-scams-targeting-seniors"
            },
        "win": "Family advances a level",
        "lose": "Grandparent advances a level and loses a positive Asset."
    },
    {
        "name": "Health Insurance Fraudster",
        "type": "Fraud",
        "id": 5,
        "level": 4,
        "modifiers": "+2 against grandparents with Demententia",
        "text": 
            {"body": "Fraudsters pretent to be Medicare reps and get aging parents\
                to reveal their personal information.",
            "source": "https://consumer.georgia.gov/top-10-scams-targeting-seniors"
            },
        "win": "Family advances 1 level",
        "lose": "Grandparent advances 1 level and family loses 1 beneficial Asset."
    },
    {
        "name": "Fake Anti-Aging Serum",
        "type": "Fraud",
        "id": 6,
        "level": 4,
        "modifiers": "+2 against grandparent with Demententia",
        "text": 
            {"body": "A fake botox scheme in Arizona frauded over $1.5 million \
                from seniors.",
            "source": "https://consumer.georgia.gov/top-10-scams-targeting-seniors"
            },
        "win": "Family advances a level",
        "lose": "Family loses 1 beneficial Asset"
    },
    {
        "name": "The Fake Accident Ploy",
        "type": "Fraud",
        "id": 7,
        "level": 6,
        "modifiers": "+1 against grandmas with Demententia",
        "text": 
            {"body": "The con artist gets the victim to wire or send money on the pretext that the person’s child or another relative is in the hospital and needs the money.",
            "source": "https://consumer.georgia.gov/top-10-scams-targeting-seniors"
            },
        "win": "Family advances a level",
        "lose": "Grandma advances a level"
    },
    {
        "name": "The Fake Grandkid",
        "type": "Fraud",
        "id": 8,
        "level": 4,
        "modifiers": "+1 against grandmas with Demententia",
        "text": 
            {"body": "Hi grandma, do you kno who this is? My car broke down and I can't afford to fix it. If I don't get 9 thousand dollars by tomorrow I'll lose my job and my house!",
            "source": "https://consumer.georgia.gov/top-10-scams-targeting-seniors"
            },
        "win": "Family advances a level",
        "lose": "Grandma advances a level"
    },
    {
        "name": "English-Only Doctor",
        "type": "Healthcare Professional",
        "id": 9,
        "level": 10,
        "modifiers": "+2 against to grandparent who doesn't speak english as a first language",
        "text": 
            {"body": "Doctor: You won’t need an interpreter, will you?",
            "source": "https://www.ceh.org.au/resource-hub/assessing-the-need-for-an-interpreter/",
            "insight": "Whenever possible, the need for an interpreter should be decided before an appointment. This may be determined from information contained in a referral, when the client requests an interpreter, when you are assessing the need for an interpreter or by asking the client."
            },
        "win": "Family advances a level",
        "lose": "Grandparent advances 2 levels"
    },
    {
        "name": "The Faulty Medical Device",
        "type": "Malpractice",
        "id": 10,
        "level": 11,
        "modifiers": "-1 to grandparent who doesn't speak english as a first language \
            Only gradparents with a DME may face Faulty Device.",
        "text": 
            {"body": "Reporting a faulty medical device can be a complicated and scary process. \
                Not to mention the health related risks of the faulty medical device.",
            "source": "https://www.fda.gov/medical-devices/medical-device-safety/medical-device-reporting-mdr-how-report-medical-device-problems",
            "insight": "The FDA encourages healthcare professionals, patients, caregivers and consumers to submit voluntary reports of significant adverse events or product problems with medical products to MedWatch, the FDA's Safety Information and Adverse Event Reporting Program."
            },
        "win": "Family & grandparent advances 1 level",
        "lose": "Grandparent advances 2 levels"
    },
    {
        "name": "The problem is all in your head",
        "type": "Health care Professional",
        "id": 11,
        "level": 5,
        "modifiers": "+2 against female grandparents",
        "text": 
            {"body": "Female patients are often gaslighted about the physical symptoms they are experiences.",
            "source": "https://www.northwell.edu/katz-institute-for-womens-health/articles/gaslighting-in-womens-health",
            "insight": "Female patients should be empowered to push back, speak up for themselves, and not simply be 'good patients'."
            },
        "win": "Family advances a level",
        "lose": "Grandparent advances a level"
    },
    {
        "name": "Chronic Pain",
        "type": "Medical Condition",
        "id": 12,
        "level": 5,
        "modifiers": "+2 agianst to female grandparents",
        "text": 
            {"body": "'Doctor': 'Are you sure you aren't just being hysterical?'",
            "source": "https://www.northwell.edu/katz-institute-for-womens-health/articles/gaslighting-in-womens-health",
            "insight": "Female patients should be empowered to push back, speak up for themselves, and not simply be 'good patients'."
            },
        "win": "Grandma and family advances 1 level",
        "lose": "Grandma advances 2 levels"
    },
    {
        "name": "Everyday Experiences of Discrimination",
        "type": "Discrimination",
        "id": 13,
        "level": 5,
        "modifiers": "+1 against all non-white grandparents\
            +1 against female grandparent \
            +2 agianst grandparents who do not speak english as a first langauage",
        "text": 
            {"body": "The day to day hassles and stress with perceived discrimination",
            "source": "Leong 2022",
            "insight": "Leong found no difference between white and asian \
                aging populations in regard to the perceived negative affects of daily discrimination"
            },
        "win": "Family advances 1 level",
        "lose": "Family loses one level"
    },
    {
        "name": "COVID-19",
        "type": "Medical Condition",
        "id": 14,
        "level": 12,
        "modifiers": "+3 against grandparent with any medical condition. \
            +1 against non-whites",
        "text": {
            "body": "Older people and those with underlying medical conditions \
                like cardiovascular disease, diabetes, chronic respiratory disease \
                , or cancer are more likely to develop serious illness",
            "source": "World Health Organization, Cokley 2022"
        },
        "win": "Congrats! Family may level up 1. Grandma still levels up 1",
        "lose": "Grandparent advances 2 levels."
    },
    {
        "name": "Influenza, 'I love visting every year'",
        "type": "Medical Condition",
        "id": 15,
        "level": 8,
        "modifiers": "+1 against grandparent with any medical condition. \
            +1 against grandparents level 5 and above \
            +1 against any non-white grandparents.",
        "text": {
            "body": "Older people and those with underlying medical conditions \
            like cardiovascular disease, diabetes, chronic respiratory disease \
            , or cancer are more likely to develop serious illness",
        "source": "CDC 2023"
        },
        "win": "Grandparent and Family advance 1 level",
        "lose": "Grandparent advances 2 levels."
    },
    {
        "name": "Cardiovascular Disease",
        "type": "Medical Condition",
        "id": 16,
        "level": 12,
        "modifiers": "+1 against grandparent with any medical condition. \
            +1 against grandparents level 6 and above \
            +1 against any non-white or non-asian grandparents.",
        "text": {
            "body": "Older people and those with underlying medical conditions \
            like cardiovascular disease, diabetes, chronic respiratory disease \
            , or cancer are more likely to develop serious illness",
        "source": "CDC 2023, Heart Disease and Stroke"
        },
        "win": "Grandparent advances 1 level",
        "lose": "Grandparent advances 2 levels"
    },
    {
        "name": "Stroke",
        "type": "Medical Condition",
        "id": 17,
        "level": 15,
        "modifiers": "+1 against grandparent with any medical condition. \
            +1 against grandparents level 7 and above \
            +1 agains African American grandparent",
        "text": {
            "body": "Stoke is the number one cause of death in America. The risk for \
                stroke is twice as high for African Americans than for Whites",
        "source": "CDC 2023, Heart Disease and Stroke"
        },
        "win": "Grandparent and family advances 1 level",
        "lose": "Grandparent advances 2 levels. Grandparent gains Mobility Disability."
    }
    
    
];