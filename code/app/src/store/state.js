// Example data for frontend rendering

export default {
  data: {
    dappTitle: 'truegift',

    user: {
      id: 0,
      fName: 'user',
      lName: 'default'
    },

    tests: [
      { id: 0, title: 'test1' },
      { id: 1, title: 'test2' },
      { id: 2, title: 'test3' }
    ],

    tasks: [
      {
        id: 0,
        domainId: 0,
        title: 'Task 1',
        spec: 'This is the Specification for Task 1',
        deliverable: 'UI Development',
        dueDate: '24062018',
        payout: { 'worker': 4, 'manager': 1, 'evaluator': 3 },
        status: 'cancelled'
      },
      {
        id: 1,
        domainId: 0,
        title: 'Task 2',
        spec: 'This is the Specification for Task 2',
        deliverable: 'Design Architecture',
        dueDate: '24062018',
        payout: { 'worker': 3, 'manager': 1, 'evaluator': 1 },
        status: 'open'
      },
      {
        id: 2,
        domainId: 1,
        title: 'Task 3',
        spec: 'This is the Specification for Task 3',
        deliverable: 'Database Modelling',
        dueDate: '24062018',
        payout: { 'worker': 7, 'manager': 1, 'evaluator': 6 },
        status: 'modified'
      },
      {
        id: 3,
        domainId: 1,
        title: 'Task 4',
        spec: 'This is the Specification for Task 4',
        deliverable: 'Logo Design',
        dueDate: '24062018',
        payout: { 'worker': 2, 'manager': 1, 'evaluator': 1 },
        status: 'approved'
      },
      {
        id: 4,
        domainId: 2,
        title: 'Task 5',
        spec: 'This is the Specification for Task 5',
        deliverable: 'Enterprise Architecture',
        dueDate: '24062018',
        payout: { 'worker': 8, 'manager': 2, 'evaluator': 4 },
        status: 'rating'
      },
      {
        id: 5,
        domainId: 3,
        title: 'Task 6',
        spec: 'This is the Specification for Task 6',
        deliverable: 'Blockchain Design',
        dueDate: '24062018',
        payout: { 'worker': 7, 'manager': 3, 'evaluator': 4 },
        status: 'commit'
      },
      {
        id: 6,
        domainId: 4,
        title: 'Task 7',
        spec: 'This is the Specification for Task 7',
        deliverable: 'ColonyJS Integration',
        dueDate: '24062018',
        payout: { 'worker': 6, 'manager': 3, 'evaluator': 4 },
        status: 'reveal'
      },
      {
        id: 7,
        domainId: 4,
        title: 'Task 8',
        spec: 'This is the Specification for Task 8',
        deliverable: 'UI Design',
        dueDate: '24062018',
        payout: { 'worker': 4, 'manager': 2, 'evaluator': 3 },
        status: 'finalised'
      }
    ],

    items: [
      { id: 0, title: 'Item 1' },
      { id: 1, title: 'Item 2' },
      { id: 2, title: 'Item 3' },
      { id: 3, title: 'Item 4' },
      { id: 4, title: 'Item 5' }
    ],

    // challengeId in the solutions model may be better as an ['Array']
    // due to having a many-to-one relationship from solution to challenges

    solutions: [
      {
        'id': 0,
        'title': 'Renewable Energy',
        'challengeId': 0
      },
      {
        'id': 1,
        'title': 'Low-Carbon Technologies',
        'challengeId': 0
      },
      {
        'id': 2,
        'title': 'Sustainable Food Systems',
        'challengeId': 1
      },
      {
        'id': 3,
        'title': 'Food Distribution Models',
        'challengeId': 1
      },
      {
        'id': 4,
        'title': 'Decentralised Technologies',
        'challengeId': 2
      },
      {
        'id': 5,
        'title': 'Smart Contracts',
        'challengeId': 2
      }
    ],

    projects: [
      {
        'id': 0,
        'title': 'Renewable Energy',
        'challengeId': 0
      },
      {
        'id': 1,
        'title': 'Low-Carbon Technologies',
        'challengeId': 0
      },
      {
        'id': 2,
        'title': 'Sustainable Food Systems',
        'challengeId': 1
      },
      {
        'id': 3,
        'title': 'Food Distribution Models',
        'challengeId': 1
      },
      {
        'id': 4,
        'title': 'Decentralised Technologies',
        'challengeId': 2
      },
      {
        'id': 5,
        'title': 'Smart Contracts',
        'challengeId': 2
      }
    ],

    challenges: [
      {
        'id': 0,
        'title': 'Climate Disruption'
      },
      {
        'id': 1,
        'title': 'Food and Agriculture'
      },
      {
        'id': 2,
        'title': 'Collaborative Work'
      }
    ]
  }
}
