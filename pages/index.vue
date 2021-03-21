<template>
  <div>
    <!-- mobile header     -->
    <section id="header-mob">
      <div class="container mt-3 mb-2 d-flex justify-content-between">
        <i class="fas fa-search mt-1"></i>
        <a href="index.html">
          <logo />
        </a>
        <i class="fas fa-bars mt-1"></i>
      </div>
    </section>

    <img src="~/assets/images/beba.jpg" alt="baby" class="baby" width="100%" height="100%">

    <!-- mobile content -->
    <section id="content-mob">
      <div class="container">
        <h1 class="text-center text-muted">Kërko emrin e</h1>
        <h1 class="text-center text-muted">femijut te arshem..</h1>
        <p class="small text-muted">femijuim.com është burimi më i madh në botë për
          emrat e fëmijëve, që përmban një bazë të dhënash prej
          70,000+ emra vajzash dhe emra djemsh (dhe emra asnjanës
          gjinorë), mijëra lista gjithëpërfshirëse dhe krijuese
          të emrave, forume miqësore, plus lajme dhe këshilla nga
          ekspertët për të ndihmuar ju gjeni emrin perfekt për foshnjën tuaj.</p>
      </div>

    </section>

    <!-- Desktop-Header -->
    <div class="container mt-4">
      <!-- nav bar -->
      <nav class="navbar navbar-expand-lg navbar-light mb-5">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#">Kërko Emër</a>
            <a class="nav-link" href="#">Këshilla</a>
            <a class="nav-link" href="#">Rreth nesh</a>
            <a class="nav-link" href="#">Kyqu</a>
            <div class="switcher-wrapper">
            </div>
          </div>
        </div>
      </nav>
      <!-- content -->
      <div class="row">
        <div class="col-lg-4 col-md-8 col-sm-10 filter-section">
          <logo />
          <h4 class="text-center mt-5">Si dëshironi të jet emri?</h4>
          <hr class="divider mt-2 mb-5">
          <filter-form />
        </div>
      </div>
    </div>
    <p class="copyright small text-muted fixed-bottom"> © 2021 femijuim.com</p>
  </div>
</template>

<script>
  export default {
  }
</script>
