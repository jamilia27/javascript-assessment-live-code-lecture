class Answer {
  constructor(content, questionId) {
    this.id = this.constructor.all.length
    this.content = content
    this.question = this.findQuestion(questionId)
    this.voteCount = 0
    this.constructor.all.push(this)
  }
  findQuestion(questionId) {
    const question = Question.all.find(question => (
      question.id === questionId
    ))
    question.answers.push(this)
    return question
  }
  answerEl() {
    return `
      <li>
        ${this.content} - votes: <span id="voteCount-${this.id}">${this.voteCount}</span>
        <form id="upvote-${this.id}" data-id=${this.id} action="#" method="post">
        <input type="submit" value="Upvote">
        </form>
      </li>
    `
  }
}

Answer.all = []
