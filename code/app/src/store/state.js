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
      { id: 0, title: 'Task 1', text: 'This is the text for Task 1', isActive: true, isComplete: false, isArchived: false },
      { id: 1, title: 'Task 2', text: 'This is the text for Task 2', isActive: false, isComplete: false, isArchived: false },
      { id: 2, title: 'Task 3', text: 'This is the text for Task 3', isActive: false, isComplete: true, isArchived: false },
      { id: 3, title: 'Task 4', text: 'This is the text for Task 4', isActive: true, isComplete: false, isArchived: false },
      { id: 4, title: 'Task 5', text: 'This is the text for Task 5', isActive: false, isComplete: true, isArchived: true },
      { id: 5, title: 'Task 6', text: 'This is the text for Task 6', isActive: false, isComplete: false, isArchived: false }
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
