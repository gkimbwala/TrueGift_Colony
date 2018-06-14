<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Commits',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        },
        {
          label: 'Commits',
          backgroundColor: '#979',
          data: [12, 35, 26, 17, 19, 20, 62, 72, 12, 37, 18, 13]
        }
      ]
    })
  }
}
</script>

<style lang="css">
</style>
