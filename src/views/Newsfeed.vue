<template>
  <div>
    <!-- <div v-for="(badge, index) in this.badgelist" :key="index"> -->
      <div class="bv-example-row pd-side">
        <b-card>
          <b-row class="justify-content-md-center">
            <b-col cols="4" class="text-center">
              <img src="@/assets/image.png" class>
            </b-col>
            <b-col class="border-left">
              <h4>{{ badgename }}</h4>
              <p>{{ descriptions }}</p>
              <p>Venue: {{ venue }}</p>
              <p>Date: {{ date }} at {{ time }}</p>
              <p>Issued by: {{ organization }}</p>
              <p></p>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Newsfeed",
  props: {
    dadgename: String,
    descriptions: String,
    venue: String,
    date: String,
    time: String,
    organization: String
  }
};
</script>
<style scoped>
#profile {
  height: 200px;
}
.pd-side {
  padding-left: 20px;
  padding-right: 20px;
}

div {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
