const { assertSucceeds } = require('@firebase/rules-unit-testing')
const { setup, teardown } = require('./helpers')

const mockUser = {
  uid: 'tester'
}

const mockData = {
  'messages/message-1': {
    message: 'Test message'
  },
  'messages/message-2': {
    message: 'Test message'
  }
}

describe('Message collection rules', () => {
  let db

  beforeAll(async () => {
    db = await setup(mockUser, mockData)
  })

  afterAll(async () => {
    await teardown()
  })

  it('should ALLOW logged in users to submit messages', async () => {
    const messagesRef = db.collection('messages')

    await assertSucceeds(
      messagesRef.add({
        message: 'Added message'
      })
    )
  })

  it('should ALLOW logged in users to query messages', async () => {
    const messagesRef = db.collection('messages')

    await assertSucceeds(messagesRef.get())
  })
})
