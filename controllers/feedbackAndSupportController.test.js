const feedbackAndSupportController = require('./feedbackAndSupportController')

describe('Feedback and support controller', () => {
  let req
  let res

  beforeEach(() => {
    req = { body: {} }
    res = { redirect: jest.fn(), render: jest.fn() }
  })

  describe('selectServicePost', () => {
    it('should render with an error if there is no service selected', () => {
      feedbackAndSupportController.selectServicePost(req, res)

      expect(res.render).toHaveBeenCalledWith('feedbackAndSupport', {
        errors: [{ href: '#service', text: 'Select a service' }],
      })
    })

    it('should redirect to the selected service page', () => {
      req.body = { service: 'digital-prison-services' }
      feedbackAndSupportController.selectServicePost(req, res)

      expect(res.redirect).toHaveBeenCalledWith('/feedback-and-support/digital-prison-services')
    })
  })
})
