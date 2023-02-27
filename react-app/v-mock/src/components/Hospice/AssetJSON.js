/* eslint-disable no-multi-str */
export const AssetJSON = [
    {
        "name": "Connection and Conversation with Family",
        "id": 1,
        "type": "Experience",
        "text": 
            "Have an everyday conversation with family \
            about disability, especially in \
            long-standing places of disconnection, offer opportunities to \
            experiment with an alternative \
            lens, encourage critical questions, and learn to listen for \
            deeper stories.",
        "benefit": "+1 to family (One Time Use Only)",
        "source": "Schnell, 2018"
    },
    {
        "name": "Rose Colored Glasses (Affective Balance)",
        "id": 2,
        "type": "Perspective",
        "text": "Having more positive emotions than negative emotions in the \
            last 30 days",
        "benefit": "+1 to family (One Time Use Only)",
        "source" : "Leong 2022"

    },
    {
        "name": "I Got This! (Mastery)",
        "id": 3,
        "type": "Perspective",
        "text": "Example perspective: \
            What happens to me in the future mostly depends on me.",
        "benefit": "+1 to family (One Time Use Only)",
        "source" : "Leong 2022"
    },
    {
        "name": "I Have the Power! (Decreased Perceived Constraints)",
        "id": 4,
        "type": "Perspective",
        "text": "Opposite perspective: \
            What happens in my life is often beyond my control.",
        "benefit": "+1 to family (One Time Use Only)",
        "source" : "Leong 2022"
    },
    {
        "name": "Bottled Sunshine (Optimism)",
        "id": 5,
        "type": "Perspective",
        "text": "Example perspective: \
            In uncertain times, I usually expect the best.",
        "benefit": "+1 to Grandparent (One Time Use Only)",
        "source" : "Leong 2022"
    },
    {
        "name": "Less than High School Diploma",
        "id": 6,
        "type": "Education",
        "text": "Lower education level reduces lifelong earnings. \
            Lower lifelong earnings reduce Social Security and Retirement Benefits.",
        "benefit": "-2 to Grandparent income",
        "source" : "Economic Development Guide 2021"
    },
    {
        "name": "Only a High School Diploma",
        "id": 7,
        "type": "Education",
        "text": "Lower education level reduce lifelong earnings. \
            Lower lifelong earnings reduce Social Security and Retirement Benefits.",
        "benefit": "-1 to Grandparent income",
        "source" : "Economic Development Guide 2021"
    },
    {
        "name": "Some College",
        "id": 8,
        "type": "Education",
        "text": "Some opportunties open with some college level achievment.",
        "benefit": "No impact on income (relative to others)",
        "source" : "Economic Development Guide 2021"
    },
    {
        "name": "Bachelor's of Arts Degree (highest degree)",
        "id": 9,
        "type": "Education",
        "text": "Increased education levels increase income opportunities",
        "benefit": "+1 to Grandparent income",
        "source" : "Economic Development Guide 2021"
    },
    {
        "name": "Bachelors of Science Degree (highest degree)",
        "id": 10,
        "type": "Education",
        "text": "STEM degrees often earn considerably more than Arts degrees",
        "benefit": "+2 to Grandparent income",
        "source" : "Economic Development Guide 2021"
    },
    {
        "name": "Master's Degree (highest degree)",
        "id": 11,
        "type": "Education",
        "text": "Higher degrees tend to increase opportunities and income.",
        "benefit": "+3 to Grandparent income",
        "source" : "Economic Development Guide 2021"
    },
    {
        "name": "Doctoral Degree (highest degree)",
        "id": 12,
        "type": "Education",
        "text": "Non medical Doctoral Degree",
        "benefit": "+3 to Grandparent income",
        "source" : "Economic Development Guide 2021"
    },
    {
        "name": "Professional Degree",
        "id": 13,
        "type": "Education",
        "text": "Computer Science, Math, Health Practice, and engineering are \
            the highest paying occupations",
        "benefit": "+4 to Grandparent income",
        "source" : "Economic Development Guide 2021"
    },
    {
        "name": "John Deer Mobility Scooter 4x4. Yee Haw!",
        "id": 14,
        "type": "Durable Medical Equipment (DME)",
        "text": "Medicare part B will only cover powered wheelchairs \
            if they are deemed medically necessary. You will need prior \
            authorization, and will likely pay 20% once you meet your deductable",
        "benefit": "+2 to Grandparent. Only available to grandparent level 7 or above.",
        "source" : "https://www.medicare.gov/coverage/wheelchairs-scooters"
    },
    {
        "name": "Prada Walker (carbon fiber)",
        "id": 15,
        "type": "Durable Medical Equipment (DME)",
        "text": "Medicare part B will only cover walkers \
            if they are deemed medically necessary. Your doctor must perscribe \
            it for use in your home.",
        "benefit": "+1 to Grandparent. Only available to grandparent level 7 or above.",
        "source" : "https://www.medicare.gov/coverage/walkers"
    },
    {
        "name": "Portable Oxygen Tank of Very High Pressure",
        "id": 16,
        "type": "Durable Medical Equipment (DME)",
        "text": "Medicare part B will only cover oxygen tanks once all criteria have been met \
            Doctor perscription with severe lung disease, \
            Your health might improve from oxygen therapy, \
            Your test results are within a specific range, \
            Other methods you tried in the past have failed.",
        "benefit": "+1 to Grandparent. Only available to grandparent level 7 or above, \
            Or to any grandparent with lung disease",
        "source" : "https://www.medicare.gov/coverage/oxygen-equipment-accessories"
    },
    {
        "name": "Blood Sugar Monitor of Invasive Proportion",
        "id": 17,
        "type": "Durable Medical Equipment (DME)",
        "text": "Medicare part B will cover with doctor perscription \
            After you meet the Part B deductable you will still need \
            to pay 20%.",
        "benefit": "+1 to Grandparent. Only available to grandparent with diabetes.",
        "source" : "https://www.medicare.gov/coverage/oxygen-equipment-accessories"
    }, 
    {
        "name": "Diabetes Type One",
        "id": 18,
        "type": "Medical Condition",
        "text": "A chronic condition with onset in childhood or adolescence \
            where the pancreas makes little to no insulin. No known cure.",
        "benefit": "-3 to grandparent vs any medical condition.",
        "source": "Mayo Clinic 2023"
    }, 
    {
        "name": "HIV",
        "id": 19,
        "type": "Medical Condition",
        "text": "HIV attacks cells in the body’s immune system \
            called CD4 cells and, if untreated, gradually destroys the \
            body’s ability to fight infection and certain cancers. \
            CDC estimates that nearly 1.2 million people in the \
            United States 13 years and older were living with \
            HIV at the end of 2019",
        "benefit": "-2 to grandparent against any medical condition or medical professional",
        "source": "CDC 2023"
    }, 
    {
        "name": "Alcoholism? Its just 4 glasses every night",
        "id": 20,
        "type": "Lifestyle & Medical Condition",
        "text": "",
        "benefit": "-1 to LGBTQ grandparent. -1 agianst any medical conditions",
        "source": "CDC "
    }, 
    {
        "name": "Stop Smoking Grandma!",
        "id": 21,
        "type": "Lifestyle & Medical Condition",
        "text": "Smoking is a major cause of heart disease and stroke \
            and causes 1 in every 4 deaths from these conditions",
        "benefit": "-1 against Cardiovascular Disease and Stroke",
        "source": "CDC 2023 Heart Disease and Stroke Monsters"
    }, 
    {
        "name": "LGBTQ Grandparent",
        "id": 22,
        "type": "Identity",
        "text": "LGBT elders face discrimination in health care, \
            and as a result face higher rates of chronic conditions",
        "benefit": "-X against Cancer, Mental Health, and Cardiovascular Disease. \
            -1 against Discrimination Monsters.",
        "source": "Cameron 2017"
    }, 
    {
        "name": "First-generation Asian American Grandparent",
        "id": 23,
        "type": "Identity",
        "text": "Asian American Immigrants (AIs) are not monolithic. Depending on \
            country of origin, education, and when then immigrated, AIs \
            experience discrimination differently",
        "benefit": "-1 against Medical Professionals. Limitted English",
        "source": "Nandan 2007"
    }, 
    {
        "name": "African American Grandparent",
        "id": 24,
        "type": "Identity",
        "text": "Black middle-aged adults tend to provide more support to their \
            aging parents than while middle-aged adults",
        "benefit": "+1 against any Activities of Daily Living \
            -1 against all medical contidtions \
            -1 against Dementia related Monsters \
            -1 against Discrimination Monsters",
        "source": "Kornblith 2022"
    }, 
    {
        "name": "Veteran Grandparent",
        "id": 25,
        "type": "Identity",
        "text": "Veterans have specialized access to additional care options \
            through the VA. But these benefits are poorly offered and inconsistenly \
            administrated resulting in diverse care experiences to veterans.",
        "benefit": "-1 against all medical contidtions \
            -1 against Dementia related Monsters. \
            Roll a 6 sided dice. 1=(-2), 2=(-1), 3=(0), 4=(+1), 5=(+2), 6=(+3) \
             against Medical Professionals",
        "source": "Kornblith 2022"
    }, 
    {
        "name": "LatinX Grandparent",
        "id": 26,
        "type": "Identity",
        "text": "Latinx grandparents have diverse experiences and cannot simply \
            be lumped and treated universally. But there are some general statistical \
            trends that can be applied to this broad identity group.",
        "benefit": "-1 against Dementia related Monsters \
            -1 against Cardovascular Disease & Diabetes II",
        "source": "Kornblith 2022"
    }, 
    {
        "name": "Osteoporosis",
        "id": 26,
        "type": "Mobility Limitation",
        "text": "Osteoporosis is a common problem, especially for older women. \
            Bones break more easily. Compression fractures of the vertebrae \
            can cause pain and reduce mobility.",
        "benefit": "-1 to female grandparent.",
        "source": "Mount Sinai 2023"
    }

]