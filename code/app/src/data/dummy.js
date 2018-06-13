
// Example data for frontend rendering

// challengeId in the solutions model may be better as an ['Array']
// due to having a many-to-one relationship from solution to challenges

let _solutions = [
  {
    'solutionId': 0,
    'solutionTitle': 'Renewable Energy',
    'challengeId': 0
  },
  {
    'solutionId': 1,
    'solutionTitle': 'Low-Carbon Technologies',
    'challengeId': 13
  },
  {
    'solutionId': 2,
    'solutionTitle': 'Sustainable Food Systems',
    'challengeId': 13
  },
  {
    'solutionId': 3,
    'solutionTitle': 'Food Distribution Models',
    'challengeId': 13
  },
  {
    'solutionId': 4,
    'solutionTitle': 'Decentralised Technologies',
    'challengeId': 13
  },
  {
    'solutionId': 5,
    'solutionTitle': 'Smart Contracts',
    'challengeId': 6
  },
  {
    'solutionId': 6,
    'solutionTitle': 'Irrigation Systems',
    'challengeId': 1
  },
  {
    'solutionId': 7,
    'solutionTitle': 'Water Filtration Systems',
    'challengeId': 2
  },
  {
    'solutionId': 8,
    'solutionTitle': 'Resilient Housing',
    'challengeId': 0
  },
  {
    'solutionId': 9,
    'solutionTitle': 'Recycled Clothing',
    'challengeId': [ 0, 1, 2, 8, 9, 10 ]
  }
]

let _challenges = [
  {
    'challengeId': 0,
    'challengeTitle': 'Climate Disruption',
    'domainId': 0
  },
  {
    'challengeId': 1,
    'challengeTitle': 'Food and Agriculture',
    'domainId': 0
  },
  {
    'challengeId': 2,
    'challengeTitle': 'Water and Sanitation',
    'domainId': 0
  },
  {
    'challengeId': 3,
    'challengeTitle': 'Inequality',
    'domainId': 1
  },
  {
    'challengeId': 4,
    'challengeTitle': 'Anti-Corruption',
    'domainId': 2
  },
  {
    'challengeId': 5,
    'challengeTitle': 'Peace',
    'domainId': 2
  },
  {
    'challengeId': 6,
    'challengeTitle': 'Political Freedom',
    'domainId': 2
  },
  {
    'challengeId': 7,
    'challengeTitle': 'Common Law',
    'domainId': 2
  },
  {
    'challengeId': 8,
    'challengeTitle': 'Transparency',
    'domainId': 2
  },
  {
    'challengeId': 9,
    'challengeTitle': 'Labour Rights',
    'domainId': 3
  },
  {
    'challengeId': 10,
    'challengeTitle': 'Poverty',
    'domainId': 4
  },
  {
    'challengeId': 11,
    'challengeTitle': 'Education',
    'domainId': 4
  },
  {
    'challengeId': 12,
    'challengeTitle': 'Gender Equality',
    'domainId': 4
  },
  {
    'challengeId': 13,
    'challengeTitle': 'Human Rights',
    'domainId': 4
  }
]

let _domains = [
  {
    'domainId': 0,
    'domainTitle': 'Environment'
  },
  {
    'domainId': 1,
    'domainTitle': 'Financial Markets'
  },
  {
    'domainId': 2,
    'domainTitle': 'Governance'
  },
  {
    'domainId': 3,
    'domainTitle': 'Industry'
  },
  {
    'domainId': 4,
    'domainTitle': 'Society'
  },
  {
    'domainId': 5,
    'domainTitle': 'Sustainability'
  },
  {
    'domainId': 6,
    'domainTitle': 'Local Development'
  },
  {
    'domainId': 7,
    'domainTitle': 'Global Emergency'
  },
  {
    'domainId': 8,
    'domainTitle': 'Energy'
  }
]
