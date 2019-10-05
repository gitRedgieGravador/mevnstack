<template>
  <div id="userpage">
    <div class="bv-example-row pd-side">
      <b-row>
        <b-col class="border-right">
          <Profile v-on:InsideMethod="gotoUpdateProfile"></Profile>
        </b-col>
        <b-col cols="9" class>
          <div class="bg-light text-center">
            <div>
              <b-tabs>
                <b-tab v-on:click="gotoNewsfeed" title="News feed" active align="left"></b-tab>
                <b-tab v-on:click="gotoBadgeList" title="Badge List" align="right"></b-tab>
              </b-tabs>
            </div>
          </div>
          <div v-if="isBadgeList">
            <div id="divBabge">
              <Mybadge></Mybadge>
            </div>
          </div>
          <div v-if="isUpdateProfile">
            <Updateinfo></Updateinfo>
          </div>
          <div v-if="isNewsfeed">
            <Newsfeed></Newsfeed>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>

import Mybadge from "@/modules/user/Mybadge.vue";
import Newsfeed from "@/modules/user/Newsfeed.vue";
import Updateinfo from "@/modules/user/Updateinfo.vue";
import Profile from "@/modules/user/Profile.vue";
export default {
  name: "userpage",
  components: {
    Mybadge,
    Newsfeed,
    Updateinfo,
    Profile
  },
  data() {
    return {
      isBadgeList: false,
      isNewsfeed: true,
      isUpdateProfile: false
    };
  },
  created() {
     //this.$root.$emit('method_emit')
  },
  methods: {
    gotoNewsfeed() {
      this.isNewsfeed = true;
      this.isBadgeList = false;
      this.isUpdateProfile = false;
    },
    gotoBadgeList() {
      this.isBadgeList = true;
      this.isNewsfeed = false;
      this.isUpdateProfile = false;
    },
    gotoUpdateProfile() {
      this.isUpdateProfile = true;
      this.isBadgeList = false;
      this.isNewsfeed = false;
    }
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
