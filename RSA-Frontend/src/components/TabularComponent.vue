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
        <td v-for="(header, index) in Object.keys(data)" :key="index">
          {{ data[header][rowIndex] || "" }}
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
</style>
