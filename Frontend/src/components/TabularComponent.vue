<template>
  <table class="custom-table">
    <thead>
      <tr>
        <th v-for="(header, index) in Object.keys(data)" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rowCount" :key="rowIndex">
        <td  v-for="(header, index) in Object.keys(data)" :key="index">
          <div v-if="data[header][rowIndex] === 'Engine'" class="clickable-component" @click="openDataProvisioning()">
          {{ data[header][rowIndex] || "" }}</div>
          <div v-else>
          {{ data[header][rowIndex] || "" }}</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    rowCount() {
      const headers = Object.keys(this.data);
      return Math.max(...headers.map((header) => this.data[header].length));
    },
  },
  methods:{
    openDataProvisioning(){
      this.$emit("dataProvissiong");
    }
  }
};
</script>

<style scoped>
.custom-table {
  width: 100%;
  border-collapse: collapse;

  font-size: 0.8rem;
}

th,
td {
  padding: 5px 0px 5px 12px;
  text-align: left;
}

th {
  font-weight: bold; /* Make header bold */
}

/* Remove borders */
.custom-table th,
.custom-table td {
  border: none;
}


.clickable-component:hover{
  width: fit-content;
  padding: 0 3px 0 3px;
  cursor:pointer;
  background-color: rgba(38, 32, 32, 0.39);
  color: aliceblue;
  border-radius: 10px;
  
}
</style>
