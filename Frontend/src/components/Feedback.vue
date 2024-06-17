<template>
  <div class="component-main-container">
    <base-container title="Feedback" class="container">
      <template #content>
        <div v-if="sendingFeedback" class="loading-container">
          <half-circle-spinner></half-circle-spinner>
        </div>
        <div v-else-if="feedbackSent" class="sent-container">
          <p>You feedback has been sent to the manufacturer.</p>
          <button class="send-feedback default-btn" @click="resetFeedback">
            Send New Feedback
          </button>
        </div>
        <div class="feedback-container" v-else>
          <div
            class="question-container"
            v-for="(question, key) in feedback.questions"
            :key="key"
          >
            <div class="question">{{ question }}</div>
            <textarea
              class="input-feedback default-input"
              placeholder="Answer"
            ></textarea>
          </div>
          <button class="send-feedback default-btn" @click="sendFeedback">
            Send Feedback
          </button>
        </div>
      </template>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "../components/BaseContainer.vue";
import HalfCircleSpinner from "../components/LoadingSpinner.vue";
export default {
  components: { BaseContainer, HalfCircleSpinner },
  data() {
    return {
      feedbackSent: true,
      sendingFeedback: false,
      feedback: {
        questions: [
          "During the dismantling process, did you find that certain components were susceptible to damage? If so, what were they and what were the reasons for this?",
          "Are there any recommendations for future product developments to facilitate or improve the disassembly of components? For example, in terms of design, fastening methods or material selection.",
          "Are there any recommendations for future product developments to facilitate or improve the disassembly of components? For example, in terms of design, fastening methods or material selection.",
          "What tools or equipment did you use during dismantling? Were there any specific tools that were particularly effective or ineffective?",
          "Did you find that certain components were difficult to access or inaccessible? Are there any suggestions on how this accessibility could be improved?",
          "Were there any problems with identifying or labeling individual components during dismantling? If so, how could they be better labeled or identified?",
          "Did you have access to all necessary information or instructions during disassembly? Are there any suggestions for improving the provision of disassembly instructions or documentation?",
          "Do you have any additional comments or feedback that could be relevant to product development?",
        ],
      },
    };
  },
  methods: {
    sendFeedback() {
      this.sendingFeedback = true;
      setTimeout(() => {
        this.feedbackSent = true;
        this.sendingFeedback = false;
      }, 2000);
    },
    resetFeedback() {
      this.feedbackSent = false;
    },
  },
};
</script>

<style scoped>
.loading-container,
.sent-container {
  padding: 20px;
  min-width: 50vw;
  display: flex;
  justify-content: center;
}
.sent-container {
  gap: 20px;
  align-items: center;
  flex-direction: column;
}
.question-container {
  width: 100%;
  padding: 20px;
  color: black;
}
.question {
  margin-bottom: 10px;
}
.component-main-container {
  display: flex;
  justify-content: center;
}
.feedback-container {
  align-self: center;
  display: flex;
  flex-direction: column;
}

.send-feedback {
  max-width: 15rem;
  align-self: center;
}
.input-feedback {
  border: 1px solid rgba(0, 0, 0, 0.357);
  min-height: 80px;
}
</style>
