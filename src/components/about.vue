<template>
  <div class="main">
    <h1 class="lg-heading">About <span class="text-secondary">Me</span></h1>
    <div class="about-info">
      <div class="bio-image">
        <div class="portrait"></div>
      </div>
      <div class="bio">
        <h3 class="text-secondary">BIO</h3>
        <p>My name is Marius. I am currently 23 years old and studying computer science at <a href="http://www.uis.no" target="_blank">The University of Stavanger</a>. I am also workng as a Project Leader and Web developer at <a href="http://www.smartstudy.no" target="_blank">Smartstudy AS</a>. In my spare time I am engaged in several student initiatives and as an entrepreneur. You can read a bit more about some of these ventures below! 
        </p>
      </div>

      <div class="job job1">
        <h3>LED</h3>
        <h6>Deputy leader</h6>
        <h6>Feb. 2019 - Mar. 2020</h6>
        <p>LED (Linjeforeningen for elektro og data) serves as a link between our students (computer science and electrical engineering) and businesses in these industries. Additionally we aspire to be a social hub for all CS and EE students </p>
      </div>

      <div class="job job2">
        <h3>Avium</h3>
        <h6>Deputy leader & Co-founder</h6>
        <h6>Oct. 2018 - present</h6>
        <p>Avium is a newly founded student organisation in which students build and operate an advanced, autonomous UAV. The goal of this org. is to give students a project in which they can utilize their knowledge in a fun yet challenging environment.</p>
      </div>

      <div class="job job3">
        <h3>Drovee</h3>
        <h6>Co-founder</h6>
        <h6>2018 - present</h6>
        <p>Drovee is a software startup that aims to build a scalable plug and play solution for autonomous UAVs. For more info head over to <a href="http://www.drov.ee" target="_blank">drov.ee</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>
<style lang="scss">
@import "../css/about.scss";
@import '../css/config';
@import '../css/mobile';

a {
  color: white;
}

h6 {
  margin: 0;
}
</style>