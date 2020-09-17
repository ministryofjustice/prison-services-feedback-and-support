exports.selectServicePost = async (req, res) => {
  const { service } = req.body

  if (!service) {
    res.render('feedbackAndSupport', {
      errors: [
        {
          text: 'Select a service',
          href: '#service',
        },
      ],
    })
  } else {
    res.redirect(`/feedback-and-support/${service}`)
  }
}
