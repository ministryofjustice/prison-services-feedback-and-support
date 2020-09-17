exports.selectServicePost = (req, res) => {
  const { service } = req.body
  res.redirect(`/feedback-and-support/${service}`)
}
