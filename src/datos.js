const imagen = require('./IMG/mi_imagen1.jpg'), 
      nombre = "Ortega Zacarias Miguel Angel";

export const icons = 0, text = 1;

export const Datos =
{
    'name&image' : 
    [
        imagen,
        nombre
    ], 
    'data' : 
    {
        'address' : 
        [
            <i className = 'fa-sharp fa-solid fa-location-dot'></i>, //icono
            'Mexico, Querétaro.'
        ],
        'cel' :
        [
            <i className = 'fa-solid fa-mobile-screen'></i>, 
            ''
        ],
        'mail' : 
        [
            <i className = 'fa-solid fa-envelope'></i>, 
            'miguel-011998@hotmail.com'
        ],
        'born' :
        [
            <i className = 'fa-solid fa-cake-candles'></i>,
            '30/01/98'
        ],
        'country' :
        [
            <i className = 'fa-solid fa-globe'></i>,
            'Mexican'
        ],
        'civil_state' :
        [
            <i className = 'fa-solid fa-ring'></i>,
            'Single'
        ],
        'linkedin' :
        [
            <i id = 'icon_profile' className = 'fa-brands fa-linkedin-in'></i>,
            <a id = 'link_profile' className = 'white-text' href = 'https://www.linkedin.com/in/miguelangelortegazacarias' target = '_blank'>www.linkedin.com/in/miguelangelortegazacarias</a>
        ],
        'google_cloud':
        [
            <i id = 'icon_profile' className = 'fa-brands fa-google'></i>,
            <a id = 'link_profile' className = 'white-text' href = 'https://www.cloudskillsboost.google/public_profiles/a0a3bcdb-4b48-4a76-b57a-8e25c9337bc6' target = '_blank'>www.cloudskillsboost.google/public_profiles/a0a3bcdb-4b48-4a76-b57a-8e25c9337bc6</a>
        ],
        'github':
        [
            <i id = 'icon_profile' className = 'fa-brands fa-github'></i>,
            <a id = 'link_profile' className = 'white-text' href = 'https://github.com/FierSet' target = '_blank'>github.com/FierSet </a>
        ],
        'freecodecamp':
        [
            <i id = 'icon_profile' className = 'fa-brands fa-free-code-camp'></i>,
            <a id = 'link_profile' className = 'white-text' href = 'https://www.freecodecamp.org/fcc93669d3d-8380-4264-a147-14e64c2c4e7f' target = '_blank'>www.freecodecamp.org/fcc93669d3d-8380-4264-a147-14e64c2c4e7f</a>
        ]
    },
    'Work history' :
    [
        'Independent custom computer assembly work.',
        'Independent work of low voltage domestic electrical installation.'
    ],
    'Recognition' :
    [
        'ITQ recognition for smart home project',
        'ITQ Recognition for Automatic Filling Conveyor Belt',
        'ITQ recognition for Hire-Now project'
    ],
    'Training' :
    {
        'Scholl' :
        {
            'ITQ, Mexico, Querétaro' : 'Bachelor of Computer Systems Engineering | Distributed information systems.',
            'CeCyTEC #5, Mexico, Querétaro' : 'Electronics Technician.'
        },
        'Languaje' :
        [
            'B1 English.'
        ],
        'Knowledge' :
        [
            'Knowledge in C, C++, C#, Python, Java, JavaScript, Kotlin, PHP, HTML5, Front End, Linux, SQL, oracle Linux, oracle database 11-19c, phpMyAdmin, Window Server, Android Studio, Google Cloud, Electronics circuit.'
        ]
    },
    'Skill' :
    [
        'self learning.',
        'Project planning and development.',
        'Project following.',
        'project delivery.'
    ],
    'Certificate' :
    [
        'Linux Essentials',
        'Programming Essentials in C',
        'Mobile App Development',
        'Introduction to Networks',
        'Switching, Routing, and Wireless Essentials',
        'Google Cloud Computing Foundations ACADEMY',
        'Perform Foundational Data, ML, and AI Tasks in Google Cloud (2022)',
        'Create and Manage Cloud Resources (2022)',
        'Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud (2022)',
        'Perform Foundational Infrastructure Tasks in Google Cloud (2022)',
        'Build and Secure Networks in Google Cloud (2022)',
        'Google Cloud Computing Foundations: Networking & Security in Google Cloud (2022)',
        'Google Cloud Computing Foundations: Infrastructure in Google Cloud (2022)',
        'Google Cloud Computing Foundations: Cloud Computing Fundamentals (2022)',
        'Google Cloud Fundamentals for Azure Professionals: Core Infrastructure(2022)',
        'Google Cloud Fundamentals for AWS Professionals (2022)',
        'Google Cloud Fundamentals: Core Infrastructure (2022)',
        'Google Cloud Big Data and Machine Learning Fundamentals (2022)',
        'Google Cloud Fundamentals: Core Infrastructure (2022)',
        'JavaScript Algorithms and Data Structures.',
        'Front End Development Libraries',
        'Responsive Web Design'
    ]
};
