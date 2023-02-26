/* eslint-disable no-multi-str */
export const MonsterJSON = [
    {
        "name": "Stairs, not the stairs",
        "type": "Activities of Daily Living (ADL)",
        "id": 1,
        "level": 1,
        "modifiers": "+1 to Monster against grandmas with mobility limitations",
        "text": 
            {"body": "1 in 4 seniors fall every year",
            "source": "dailycaring.com, Douglas & Zavotka 2006"
            },
        "win": "gain 1 mobility point",
        "loose": "Grandma falls and goes up one level",
    },
    {
        "name": "Storage Garage, Hoarders Edition",
        "id": 2,
        "type": "Activities of Daily Living (ADL)",
        "level": 1,
        "modifiers":"-X to families with a Deadbeat",
        "text": 
            {"body": "",
            "source": "Douglas & Zavotka 2006"
            },
        "win": "Sell off vintage assets, remove X negative points",
        "loose": "Gain X points of unresolved anger"
    },
    {
        "name": "Nigeria Prince",
        "type": "Fraud",
        "id": 3,
        "level": 4,
        "modifiers": "-X grandmas with demententia",
        "text": 
            {"body": "Financial scams targeting seniors have become so prevelent that they're now considered the 'crime of the 21st centry'",
            "source": "https://consumer.georgia.gov/top-10-scams-targeting-seniors"
            },
        "win": "",
        "loose": ""
    },
    {
        "name": "Health Insurance Fraudster",
        "type": "Fraud",
        "id": 5,
        "level": 4,
        "modifiers": "-X grandmas with demententia",
        "text": 
            {"body": "",
            "source": "https://consumer.georgia.gov/top-10-scams-targeting-seniors"
            },
        "win": "",
        "loose": ""
    },
    {
        "name": "Fake Debt Collector",
        "type": "Fraud",
        "id": 6,
        "level": 4,
        "modifiers": "-X grandmas with demententia",
        "text": 
            {"body": "Perpetrators may pose as a Medicare representative to get older people to give them their personal information, or they will provide bogus services for elderly people at makeshift mobile clinics, then use the personal information they provide to bill Medicare and pocket the money.",
            "source": "https://consumer.georgia.gov/top-10-scams-targeting-seniors"
            },
        "win": "",
        "loose": ""
    },
    {
        "name": "The Fake Accident Ploy",
        "type": "Fraud",
        "id": 7,
        "level": 4,
        "modifiers": "-X grandmas with demententia",
        "text": 
            {"body": "The con artist gets the victim to wire or send money on the pretext that the person’s child or another relative is in the hospital and needs the money.",
            "source": "https://consumer.georgia.gov/top-10-scams-targeting-seniors"
            },
        "win": "",
        "loose": ""
    },
    {
        "name": "The Fake Grandkid",
        "type": "Fraud",
        "id": 8,
        "level": 4,
        "modifiers": "-X grandmas with demententia",
        "text": 
            {"body": "Hi grandma, do you kno who this is? My car broke down and I can't afford to fix it. If I don't get 9 thousand dollars by tomorrow I'll lose my job and my house!",
            "source": "https://consumer.georgia.gov/top-10-scams-targeting-seniors"
            },
        "win": "",
        "loose": ""
    },
    {
        "name": "English-Only Doctor",
        "type": "Healthcare Professional",
        "id": 9,
        "level": 10,
        "modifiers": "-X to grandparent who doesn't speak english as a first language",
        "text": 
            {"body": "Doctor: You won’t need an interpreter, will you?",
            "source": "https://www.ceh.org.au/resource-hub/assessing-the-need-for-an-interpreter/",
            "insight": "Whenever possible, the need for an interpreter should be decided before an appointment. This may be determined from information contained in a referral, when the client requests an interpreter, when you are assessing the need for an interpreter or by asking the client."
            },
        "win": "Gain 1 Asset",
        "loose": "Grandparent advances an additional level"
    },
    {
        "name": "The Faulty Medical Device",
        "type": "Malpractice",
        "id": 10,
        "level": 11,
        "modifiers": "-X to grandparent who doesn't speak english as a first language \
            Only gradparents with a DME may face Faulty Device.",
        "text": 
            {"body": "Reporting a faulty medical device can be a complicated and scary process. \
                Not to mention the health related risks of the faulty medical device.",
            "source": "https://www.fda.gov/medical-devices/medical-device-safety/medical-device-reporting-mdr-how-report-medical-device-problems",
            "insight": "The FDA encourages healthcare professionals, patients, caregivers and consumers to submit voluntary reports of significant adverse events or product problems with medical products to MedWatch, the FDA's Safety Information and Adverse Event Reporting Program."
            },
        "win": "",
        "loose": "Grandparent advances additional level"
    },
    {
        "name": "The problem is all in your head",
        "type": "Health care Professional",
        "id": 11,
        "level": 5,
        "modifiers": "-X to female grandparent",
        "text": 
            {"body": "Female patients are often gaslighted about the physical symptoms they are experiences.",
            "source": "https://www.northwell.edu/katz-institute-for-womens-health/articles/gaslighting-in-womens-health",
            "insight": "Female patients should be empowered to push back, speak up for themselves, and not simply be 'good patients'."
            },
        "win": "Gain 1 asset and the family gains and additional level",
        "loose": "Gain 1 pain point and 1 resentment point"
    },
    {
        "name": "Chronic Pain",
        "type": "Medical Condition",
        "id": 12,
        "level": 5,
        "modifiers": "-X to female grandparent",
        "text": 
            {"body": "Are you sure you aren't just being hysterical?",
            "source": "https://www.northwell.edu/katz-institute-for-womens-health/articles/gaslighting-in-womens-health",
            "insight": "Female patients should be empowered to push back, speak up for themselves, and not simply be 'good patients'."
            },
        "win": "",
        "loose": "Gain 1 pain point and 1 resentment point"
    },
    {
        "name": "Everyday Experiences of Discrimination",
        "type": "Discrimination",
        "id": 13,
        "level": 10,
        "modifiers": [
            "+X against all non-white or asian races",
            "+X against female grandparent",
            "+X agianst grandparents who do not speak english as a first langauage"
        ],
        "text": 
            {"body": "The day to day hassles and stress with perceived discrimination",
            "source": "Leong 2022",
            "insight": "Leong found no difference between white and asian \
                aging populations in regard to the perceived negative affects of daily discrimination"
            },
        "win": "",
        "loose": ""
    },
    {
        "name": "COVID-19",
        "type": "Medical Condition",
        "id": 14,
        "modifiers": ["+X against grandparent with any medical condition.",
            "+X against non-whites"],
        "text": {
            "body": "Older people and those with underlying medical conditions \
                like cardiovascular disease, diabetes, chronic respiratory disease \
                , or cancer are more likely to develop serious illness",
            "source": "World Health Organization, Cokley 2022"
        },
        "win": "Congrats! Family may level up 1",
        "loose": "Grandparent advances an additional level. Gain 1 negative emotion."
    },
    {
        "name": "Influenza",
        "type": "Medical Condition",
        "id": 14,
        "modifiers": ["+X against grandparent with any medical condition.",
            "+X against grandparents level 5 and above"],
        "text": {
            "body": "Older people and those with underlying medical conditions \
            like cardiovascular disease, diabetes, chronic respiratory disease \
            , or cancer are more likely to develop serious illness",
        "source": "World Health Organization, Cokley 2022"
        },
        "win": "Congrats! Family may level up 1",
        "loose": "Grandparent advances an additional level. Gain 1 negative emotion."
    }
    
    
];