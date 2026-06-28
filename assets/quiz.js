/* Shared quiz widget — attach via <script src="../assets/quiz.js"></script> */
(function () {
  function initQuiz(quizEl) {
    const questions = quizEl.querySelectorAll('.question');
    let answered = 0;
    let correct = 0;

    questions.forEach(function (q) {
      const options = q.querySelectorAll('.option');
      const feedback = q.querySelector('.feedback');
      let done = false;

      options.forEach(function (opt) {
        opt.addEventListener('click', function () {
          if (done) return;
          done = true;
          answered++;

          const isCorrect = opt.dataset.correct === 'true';
          if (isCorrect) {
            opt.classList.add('correct');
            correct++;
          } else {
            opt.classList.add('incorrect');
            // reveal the right answer
            options.forEach(function (o) {
              if (o.dataset.correct === 'true') o.classList.add('reveal');
            });
          }

          if (feedback) {
            feedback.classList.add('show');
            feedback.classList.add(isCorrect ? 'good' : 'bad');
          }

          // show score when all answered
          if (answered === questions.length) {
            const scoreEl = quizEl.querySelector('.quiz-score');
            if (scoreEl) {
              scoreEl.style.display = 'block';
              scoreEl.textContent = 'Score: ' + correct + ' / ' + questions.length +
                (correct === questions.length ? ' — Perfect!' :
                 correct >= Math.ceil(questions.length / 2) ? ' — Good effort, review the misses.' :
                 ' — Worth revisiting this lesson.');
            }
          }
        });
      });
    });
  }

  document.querySelectorAll('.quiz').forEach(initQuiz);
})();
