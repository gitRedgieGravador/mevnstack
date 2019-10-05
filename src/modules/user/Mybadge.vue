<template>
  <div>
    <div id="Newsfeed">
      <div v-for="(badge, index) in this.badgelist" :key="index">
        <b-card>
          <b-row class="justify-content-md-center">
            <b-col class="text-center">
              <img src="@/assets/image.png" class>
            </b-col>
            <b-col cols="8" class="border-left">
              <h4>{{ badge.badgename }}</h4>
              <p>{{ badge.descriptions }}</p>
              <p>Venue: {{ badge.venue }}</p>
              <p>Date: {{ badge.date }} at {{ time }}</p>
              <p>Issued by: {{ badge.organization }}</p>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newsfeed",
  data() {
    return {
      badgelist: [],
    };
  },
  created() {
    this.badgelist = [
      {
          badgename: "Medical Mission",
          description:
            "This certificate is issue upon the active voluntarism offered during the medical mission for free vacination",
          venue: "Talamban health center",
          date: new Date().toDateString(),
          time: "9 AM",
          organization: "Passerelles Numeriques"
        },
        {
          badgename: "Medical Mission",
          description:
            "This certificate is issue upon the active voluntarism offered during the medical mission for free vacination",
          venue: "Talamban health center",
          date: new Date().toDateString(),
          time: "9 AM",
          organization: "Passerelles Numeriques"
        }
    ]
    let uri_badgelist = `http://localhost:4000/user/regular/`;
    this.axios.post(uri_badgelist).then(response => {
      this.badgelist = response.data;
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
