<template>
<div class="component-main-container">
  <base-container title="Feedback" class="container ">
  <div class="feedback-container">

   <div class="question-container" v-for="(question, key) in feedback.questions" :key=key>
    <div class="question">{{question}}</div>
    <input class="input-feedback default-input"></input>
   </div>
   <button class="send-feedback default-btn">Send Feedback</button>
   </div>
  </base-container>
  </div>
</template>

<script>
import BaseContainer from "../components/BaseContainer.vue";

export default {
  components: { BaseContainer },
  data() {return {
    feedback :{
        questions :[
            "During the dismantling process, did you find that certain components were susceptible to damage? If so, what were they and what were the reasons for this?",
            "Are there any recommendations for future product developments to facilitate or improve the disassembly of components? For example, in terms of design, fastening methods or material selection.",
            "Are there any recommendations for future product developments to facilitate or improve the disassembly of components? For example, in terms of design, fastening methods or material selection."
        ]
    }
  }

  }
};
</script>

<style scoped>
.question-container{
    padding: 20px;
    color: black;
}
.question{
    margin-bottom: 10px;
}
.component-main-container{
    display: flex;
    justify-content: center;
}
.feedback-container{
    align-self: center;
    display: flex;
    flex-direction: column;
    
}

.send-feedback{
    max-width: 15rem;
    align-self: center;
}
</style>