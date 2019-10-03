<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="bg-light border-right">
          <div class="text-center">
            <b-card>
              <img src="@/assets/profile.png" alt class="border rounded-circle" id="profile">
            </b-card>
            <div class="card-header">{{ name }}</div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Background</h5>
            <div class="card-text">
              <p>Age: {{age}} years old</p>
              <p>Gender: {{ gender }}</p>
              <p>Occupation: {{occupation}}</p>
              <p>Experience: {{ years }} years of work experience</p>
              <p>Address: {{address}}</p>
            </div>
          </div>
        </b-col>
        <b-col cols="8" class="bg-light">
          <b-card class="text-left">
            <b-row class="justify-content-md-center">
              <b-col cols="4">
                <img src="@/assets/image.png" class="border-right">
              </b-col>
              <b-col class="bg-light border-left">
                <p>{{ badgename }}</p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      name: "Redgie Gravador",
      age: 22,
      gender: "Male",
      occupation: "Web Developer",
      years: 10,
      address: "Talamban, Cebu",
      badgename: "Medical Mission"
    };
  },
  created() {
    let uri = `http://localhost:4000/posts/edit/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.post = response.data;
    });
  },
  methods: {
    updatePost() {
      let uri = `http://localhost:4000/posts/update/${this.$route.params.id}`;
      this.axios.post(uri, this.post).then(() => {
        this.$router.push({ name: "posts" });
      });
    }
  }
};
</script>
<style scoped>
#profile {
  height: 200px;
}
</style>
