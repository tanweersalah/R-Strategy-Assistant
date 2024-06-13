<template>
  <div class="component-main-container">
    <base-container title="Feedback" class="container">
      <template #content>
        <div class="feedback-container">
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
          <button class="send-feedback default-btn">Send Feedback</button>
        </div>
      </template>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from "../components/BaseContainer.vue";

export default {
  components: { BaseContainer },
  data() {
    return {
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
};
</script>

<style scoped>
.question-container {
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
