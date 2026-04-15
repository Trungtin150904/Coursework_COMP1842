<template>
  <div>
    <!-- Progress bar -->
    <div class="card progress-wrap">
      <div class="progress-header">
        <span class="progress-label">Progress</span>
        <span class="progress-count">{{ helpdesks.length - randWords.length }}/{{ helpdesks.length }}</span>
      </div>
      <div class="progress-bar-wrap">
        <div
          class="progress-bar-fill"
          :style="{ width: ((helpdesks.length - randWords.length) / helpdesks.length * 100) + '%' }"
        ></div>
      </div>
    </div>

    <!-- Score -->
    <div class="score-grid" v-if="testOver">
      <div class="card score-card">
        <div class="score-correct">{{ score }}</div>
        <div class="score-label">Correct</div>
      </div>
      <div class="card score-card">
        <div class="score-incorrect">{{ incorrectGuesses.length }}</div>
        <div class="score-label">Incorrect</div>
      </div>
      <div class="card score-card">
        <div class="score-remaining">{{ randWords.length }}</div>
        <div class="score-label">Remaining</div>
      </div>
    </div>

  <!-- Quiz -->
  <div class="card quiz-card" v-if="!testOver">
    <p class="issue-label">Issue Code</p>
    <p class="issue-code">{{ currWord.issue }}</p>

    <p class="choices-label">Select the correct response:</p>

    <div class="choices">
      <button
        v-for="(choice, i) in currentChoices"
        :key="i"
        :class="['choice-btn', getChoiceClass(choice)]"
        @click="selectAnswer(choice)"
        :disabled="answered"
      >
        <span class="choice-letter">{{ ['A','B','C','D'][i] }}</span>
        <span class="choice-text">{{ choice.response }}</span>
      </button>
    </div>

    <div v-if="answered" class="feedback" :class="lastCorrect ? 'feedback-correct' : 'feedback-wrong'">
      {{ lastCorrect ? '✅ Correct!' : `❌ Wrong!` }}
    </div>

    <button v-if="answered" class="btn btn-primary" style="margin-top:1rem" @click="nextQuestion">
      {{ randWords.length > 1 ? 'Next Question →' : 'See Results →' }}
    </button>
  </div>

    <!-- Results -->
    <div class="card results-wrap" v-else>
      <p class="results-emoji">
        {{ score === helpdesks.length ? '🏆' : score >= helpdesks.length / 2 ? '👍' : '📚' }}
      </p>
      <h2 class="results-title">
        {{ score === helpdesks.length ? 'Perfect Score!' : score >= helpdesks.length / 2 ? 'Good Job!' : 'Keep Practising!' }}
      </h2>
      <p class="results-score">
        You scored <span>{{ score }}</span> out of <strong>{{ helpdesks.length }}</strong>
      </p>

      <div class="wrong-list" v-if="incorrectGuesses.length > 0">
        <p class="wrong-list-title">❌ The questions you got wrong:</p>
        <ul>
          <li v-for="g in incorrectGuesses" :key="g">{{ g }}</li>
        </ul>
      </div>

      <button class="btn btn-primary" @click="restart">🔄 Try Again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'helpdesk-test',
  props: {
    helpdesks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      randWords: [...this.helpdesks].sort(() => 0.5 - Math.random()),
      incorrectGuesses: [],
      score: 0,
      testOver: false,
      answered: false,
      lastCorrect: false,
      selectedChoice: null,
      currentChoices: []
    };
  },
  computed: {
    currWord() {
      return this.randWords.length ? this.randWords[0] : {};
    }
  },
  mounted() {
    this.generateChoices();
  },
  methods: {
    generateChoices() {
      if (!this.randWords.length) return;
      const correct = this.randWords[0];
      const wrong = this.helpdesks
        .filter(h => h._id !== correct._id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      this.currentChoices = [...wrong, correct].sort(() => 0.5 - Math.random());
    },
    getChoiceClass(choice) {
      if (!this.answered) return '';
      if (choice._id === this.currWord._id) return 'choice-correct';
      if (choice._id === this.selectedChoice?._id) return 'choice-wrong';
      return 'choice-dim';
    },
    selectAnswer(choice) {
      if (this.answered) return;
      this.selectedChoice = choice;
      this.answered = true;
      this.lastCorrect = choice._id === this.currWord._id;
      if (this.lastCorrect) {
        this.score++;
      } else {
        this.incorrectGuesses.push(this.currWord.issue);
      }
    },
    nextQuestion() {
      this.randWords.shift();
      this.answered = false;
      this.selectedChoice = null;
      if (this.randWords.length === 0) {
        this.testOver = true;
      } else {
        this.generateChoices();
      }
    },
    restart() {
      this.randWords = [...this.helpdesks].sort(() => 0.5 - Math.random());
      this.score = 0;
      this.incorrectGuesses = [];
      this.testOver = false;
      this.answered = false;
      this.selectedChoice = null;
      this.generateChoices();
    }
  }
};
</script>

<style scoped src="../assets/test.css"></style>