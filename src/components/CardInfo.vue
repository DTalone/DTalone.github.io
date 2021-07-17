<template>
  <v-container class="container-box p-0" fluid>
    <v-card class="box m-0">
      <div class="icon">
        <v-icon class="fas" color="#C3F3FB">{{ data.icon }}</v-icon>
      </div>
      <div class="content">
        <h3>{{ data.title }}</h3>
        <p>
          {{ data.content }}
        </p>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.container-box {
  min-height: 300px;
}

.container-box .box {
  min-height: 270px;
  background-color: white;
  // margin: 15px;
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  // border: 1px solid yellow;
}

.container-box .box .icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  transition: 0.5s;
  z-index: 1;
}

.container-box .box:hover .icon {
  top: 20px;
  left: calc(50% - 40px);
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.container-box .box .icon .fas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  transition: 0.5s;
  color: white;
}

.container-box .box:hover .icon .fas {
  font-size: 40px;
}

.container-box .box .content {
  position: absolute;
  top: 100%;
  height: calc(100% - 100px);
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  transition: 0.5s;
  opacity: 0;
}

.container-box .box:hover .content {
  top: 100px;
  opacity: 1;
}

.container-box .box .content h3 {
  margin: 0 0 10px;
  padding: 0;
  color: #05445e;
  font-size: 24px;
}

.container-box .box .content p {
  margin: 0;
  padding: 0;
  color: #189ab4;
}

.container-box .box:nth-child(1) .icon {
  background-color: #1e1e1e;
}

.container-box .box:nth-child(1) {
  background-color: #b9b7bd;
}

.container-box .box:nth-child(2) .icon {
  background-color: #1e1e1e;
}

.container-box .box:nth-child(2) {
  background-color: #b9b7bd;
}
</style>
