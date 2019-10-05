<template>
  <div>
    <div id="Newsfeed">
      <b-row>
        <div v-for="(badge, index) in this.upcoming_list1" :key="index">
          <b-col class="text-center">
            <b-card>
              <img src="@/assets/image.png" class>
              <h5>{{badge.name}}</h5>
              <p>{{badge.venue}}</p>
            </b-card>
          </b-col>
        </div>
      </b-row>
      <br>
      <b-row>
        <div v-for="(badge, index) in this.upcoming_list2" :key="index">
          <b-col class="text-center">
            <b-card>
              <img src="@/assets/image.png" class>
              <h5>{{badge.name}}</h5>
              <p>{{badge.venue}}</p>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newsfeed",
  props:{
    username: String
  },
  data() {
    return {
      upcoming_list1: [],
      upcoming_list2: []
    };
  },
  created() {
    this.upcoming_list1 = [
      { name: "Programming Workshop", venue: "J Center Mall Mandaue" },
      { name: "Programming Workshop", venue: "J Center Mall Mandaue" },
      { name: "Programming Workshop", venue: "J Center Mall Mandaue" }
    ];
    this.upcoming_list2 = [
      { name: "Programming Workshop", venue: "J Center Mall Mandaue" },
      { name: "Programming Workshop", venue: "J Center Mall Mandaue" },
      { name: "Programming Workshop", venue: "J Center Mall Mandaue" }
    ];

    let uri_upcomingbadge = `http://localhost:4000/user/regular/`;
    this.axios.post(uri_upcomingbadge).then(response => {
      for (let i = 0; i <= 6; ++i) {
        if (i <= 3) {
          this.upcoming_list1 = response.data[i];
        } else {
          this.upcoming_list2 = response.data[i];
        }
      }
    });
  }
};
</script>
<style scoped>
div {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
