<template>
  <div>
    <div class="container">
      <div class="container-heading">
        <h3>High Value Parts</h3>
      </div>
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
    </div>
  </div>
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
.container {
  border: 1px solid #ccc;
  border-radius: 20px;
  width: 100%;
}

.container-heading {
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.container-heading h3 {
  font-weight: bold;
  font-size: 12px;
  padding: 5px 2px 5px 15px;
}
.custom-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 11px; /* Set font size */
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
