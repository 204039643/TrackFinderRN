import {ObjectId} from 'bson'

class Track {
  /**
   *
   * @param {string} name The name of the track
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor ({
    name,
    partition,
    streetAddress,
    city,
    state,
    zipCode,
    availability,
    id = new ObjectId(),
  }) {
    this._partition = partition
    this._id = id
    this.name = name
    this.streetAddress = streetAddress
    this.city = city
    this.state = state
    this.zipCode = zipCode
    this.availability = availability
  }
  static schema = {
    name: 'Track',
    properties: {
      _id: 'objectId',
      _partition: 'string?',
      name: 'string',
      streetAddress: 'string',
      city: 'string',
      state: 'string',
      zipCode: 'int',
      availability: 'array',
    },
    primaryKey: '_id',
  }
}

export {Track}

class User {
  /**
   *
   * @param {string} name The name of the task
   * @param {string status The status of the task. Default value is "Open"
   * @param {ObjectId} id The ObjectId to create this task with
   */
  constructor ({
    username,
    partition,
    password,
    email,
    homeCity,
    state,
    id = new ObjectId(),
  }) {
    this._partition = partition
    this._id = id
    this.username = username
    this.password = password
    this.email = email
    this.homeCity = homeCity
    this.state = state
  }
  static schema = {
    name: 'User',
    properties: {
      _id: 'objectId',
      _partition: 'string?',
      username: 'string',
      password: 'string',
      email: 'string',
      homeCity: 'string',
      state: 'string',
    },
    primaryKey: '_id',
  }
}

export {User}
