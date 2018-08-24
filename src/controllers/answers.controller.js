class AnswersController {
  init() {
    this.answerFormListener()
  }

  render(answer, questionId) {
    $(`#answers-${questionId}`).append(answer.answerEl())
    $(`#answer-content-${questionId}`).val("")
    this.upvoteFormListener(answer)
  }
  answerFormListener() {
    $(".add-answer").on("submit", event => {
      event.preventDefault()
      const questionId = parseInt(event.target.dataset.id)
      const content = $(`#answer-content-${questionId}`).val()
      const answer = new Answer(content, questionId)
      this.render(answer, questionId)
    })
  }

  upvoteFormListener(answer) {
    $(`#upvote-${answer.id}`).on("submit", event => {
      event.preventDefault()
      const $voteCount = $(`#voteCount-${answer.id}`)
      const updatedCount = parseInt($voteCount.text()) + 1
      $voteCount.text(updatedCount)
    })
  }
}
