const serverless = require('../lib/serverless')
const createProbot = require('../lib')
const plugin = require('./fixtures/plugin/stub-plugin')

describe('Serverless', function () {
  let probot
  let provider
  let lambdaInstance

  beforeEach(function () {
    probot = createProbot()
  })

  describe('providers', function () {
    it('Responds with Lambda function signature when \'aws\' is specified', function () {
      lambdaInstance = (event, context, callback) => {}
      expect(serverless(plugin, 'aws')).toBeInstanceOf(lambdaInstance)
    })

    it('Responds with GCF function signature when \'gcf\' is specified', function () {
      gcfInstance = (request, response) => {}
      expect(serverless(plugin, 'gcf')).toBeInstanceOf(gcfInstance)
    })

    it('Throw an error when no provider is specified', function () {
      expect(() => {
        serverless(plugin)
      }).toThrow()
    })
  })
})