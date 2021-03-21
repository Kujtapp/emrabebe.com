<template>
<<<<<<< HEAD
  <div>
    <!-- mobile header     -->
    <section id="header-mob">
      <div class="container mt-3 mb-2 d-flex justify-content-between">
        <i class="fas fa-search mt-1"></i>
        <a href="index.html"><img  src="logo.png" alt="logo" width="120px"></a>
        <i class="fas fa-bars mt-1"></i>
      </div>
    </section>

=======
    <div>
           <!-- mobile header     -->
        <section id="header-mob">
          <div class="container mt-3 mb-2 d-flex justify-content-between"> 
          <i class="fas fa-search mt-1"></i>   
          <a href="index.html"><img  src="logo.png" alt="logo" width="120px"></a>
          <i class="fas fa-bars mt-1"></i>        
          </div>  
        </section> 
    
>>>>>>> 9268d71bb8f6aa63fd5725fa962a804e25fca53d
    <div class="container mt-4">
      <!-- Result Bar -->
      <div id="rez-bar">
        <div class="row justify-content-center">
          <div class="col-1">
<<<<<<< HEAD
            <i class="arrow fas fa-angle-left fa-2x"></i>
          </div>
          <div class="col-4">
            <h2 class="text-muted">Rezultate</h2>
          </div>
          <div class="col-5">
            <a type="button" class="btn btn-brand">Propozo emër</a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 col-sm-10">
          <img src="logo.png" alt="Logo" width="100%" class="logo mb-5">
          <h6 class="mb-4 text-muted choice-text">Keni zgjedhur</h6>
          <filter-form />
          <!-- articles -->
          <!-- first article -->
          <h4 class="article-head text-muted fw-light">Artikuj</h4>
          <div class="articles row">
            <div class="col-5">
              <img src="babyfoot.jpg" alt="babyfoot" width="110%">
            </div>
            <div class="col-7">
              <p class="titletext mb-0 text-uppercase small">Fëmiu im</p>
              <hr class="mt-0 mb-0" width="40%">
              <p class="small-text mt-0 mb-0">Titulli I artikullit per beba lirem
                ipshum something...</p>
              <p class="small-date">15.10.21</p>
            </div>
          </div>
          <!-- second article -->
          <div class="row mt-4">
            <div class="col-5">
              <img src="babyfoot.jpg" alt="babyfoot" width="110%">
            </div>
            <div class="col-7">
              <p class="titletext mb-0 text-uppercase small">Fëmiu im</p>
              <hr class="mt-0 mb-0" width="40%">
              <p class="small-text mt-0 mb-0">Titulli I artikullit per beba lirem
                ipshum something...</p>
              <p class="small-date">15.10.21</p>
            </div>
          </div>
          <!-- third article -->
          <div class="row mt-4">
            <div class="col-5">
              <img src="babyfoot.jpg" alt="babyfoot" width="110%">
            </div>
            <div class="col-7">
              <p class="titletext mb-0 text-uppercase small">Fëmiu im</p>
              <hr class="mt-0 mb-0" width="40%">
              <p class="small-text mt-0 mb-0">Titulli I artikullit per beba lirem
                ipshum something...</p>
              <p class="small-date">15.10.21</p>
            </div>
          </div>

          <!-- four article -->
          <div class="row mt-4">
            <div class="col-5">
              <img src="babyfoot.jpg" alt="babyfoot" width="110%">
            </div>
            <div class="col-7">
              <p class=" titletext mb-0 text-uppercase small">Fëmiu im</p>
              <hr class="mt-0 mb-0" width="40%">
              <p class="small-text mt-0 mb-0">Titulli I artikullit per beba lirem
                ipshum something...</p>
              <p class="small-date">15.10.21</p>
            </div>
          </div>
        </div>


        <div class="col-lg-9 col-sm-12">
          <div class="form-group">
            <textarea class="form-control" rows="5" id="comment"></textarea>
            <div class="row">
              <div class="col-lg-4 col-sm-12">

                <div class="row justify-content-between mt-4">

                  <div class=" col-5 d-flex align-items-center">
                    <h5 class="names text-muted fw-light">Emra</h5>
                  </div>
                  <div class="rez-button col-7">
                    <a type="button" class="btn btn-brand">Propozo emër</a>
                  </div>
                </div>
                <!-- Cards -->
                <!-- First Card -->
                <div class="card m-auto mt-3" style="width: 100%;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-2 d-flex justify-content-center align-items-center">
                        <i class="far fa-heart fa-lg"></i>
                      </div>
                      <div class="col-8 align-items-center">
                        <h2 class="mb-0">Zana</h2>
                        <p class="small-text mb-0">Origjina: Trojet Shqiptare</p>
                      </div>
                      <div class="col-1 d-flex align-items-center">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Second Card -->
                <div class="card m-auto mt-3" style="width: 100%;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-2 d-flex justify-content-center align-items-center">
                        <i class="far fa-heart fa-lg"></i>
                      </div>
                      <div class="col-8 align-items-center">
                        <h2 class="mb-0">Ana</h2>
                        <p class="small-text mb-0">Origjina: Trojet Shqiptare</p>
                      </div>
                      <div class="col-1 d-flex align-items-center">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Third Card -->
                <div class="card m-auto mt-3" style="width: 100%;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-2 d-flex justify-content-center align-items-center">
                        <i class="far fa-heart fa-lg"></i>
                      </div>
                      <div class="col-8 align-items-center">
                        <h2 class="mb-0">Nana</h2>
                        <p class="small-text mb-0">Origjina: Trojet Shqiptare</p>
                      </div>
                      <div class="col-1 d-flex align-items-center">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Fourth Card -->
                <div class="card m-auto mt-3" style="width: 100%;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-2 d-flex justify-content-center align-items-center">
                        <i class="far fa-heart fa-lg"></i>
                      </div>
                      <div class="col-8 align-items-center">
                        <h2 class="mb-0">Ganja</h2>
                        <p class="small-text mb-0">Origjina: Trojet Shqiptare</p>
                      </div>
                      <div class="col-1 d-flex align-items-center">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Five Card -->
                <div class="card m-auto mt-3" style="width: 100%;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-2 d-flex justify-content-center align-items-center">
                        <i class="far fa-heart fa-lg"></i>
                      </div>
                      <div class="col-8 align-items-center">
                        <h2 class="mb-0">Alma</h2>
                        <p class="small-text mb-0">Origjina: Trojet Shqiptare</p>
                      </div>
                      <div class="col-1 d-flex align-items-center">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="empty col-4">

              </div>

              <div class="col-4">
                <!-- filter -->
                <h5 class="fav-names text-muted fw-light">
                  Emrat të preferuarit
                </h5>
                <div class="right-field card main-card m-auto mt-3" style="width: 90%;">
                  <div class="card-body">
                    <div class="row mt-2">
                      <div class="col-2 d-flex align-items-center">
                        <i class="fa-x far fa-times-circle mt-2"></i>
                      </div>
                      <div class="col-7">
                        <h2 class="mb-0">Zana</h2>
                      </div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-2 d-flex align-items-center">
                        <i class="fa-x far fa-times-circle mt-2"></i>
                      </div>
                      <div class="col-7">
                        <h2 class="mb-0">Ana</h2>
                      </div>
                    </div>

                    <div class="row mt-3">
                      <div class="col-2 d-flex align-items-center">
                        <i class="fa-x far fa-times-circle mt-2"></i>
                      </div>
                      <div class="col-7">
                        <h2 class="mb-0">Zaa</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ad -->
                <div class="main-add card mt-4">
                  <div class="card-body">
                    <h2 class="text-center text-muted">AD</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
=======
              <i class="arrow fas fa-angle-left fa-2x"></i>
          </div>   
          <div class="col-4"> 
              <h2 class="text-muted">Rezultate</h2>
          </div>
            <div class="col-5">    
              <a type="button" class="btn btn-brand">Propozo emër</a>
            </div>
        </div>   
      </div> 

      <div class="row">
            <div class="col-lg-3 col-sm-10">
                <img src="logo.png" alt="Logo" width="100%" class="logo mb-5">
                <h6 class="mb-4 text-muted choice-text">Keni zgjedhur</h6>
                         <!-- Checks -->
              <div class="container d-flex justify-content-center mt-4">
                  <div class="checks form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                    <label class="form-check-label" for="inlineRadio1">Vajzë</label>
                  </div>
                  <div class="checks form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                    <label class="form-check-label" for="inlineRadio2">Djalë</label>
                  </div>        
              </div>   
              <!-- Select Fields -->    
                <div class="choices mt-3 p-0">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Shkronja e parë</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                        <option value="3">C</option>
                      </select>

                      <select class="form-select mt-4" aria-label="Default select example">
                        <option selected>Origjina</option>
                        <option value="1">Shqiperi</option>
                        <option value="2">Kosovë</option>
                        <option value="3">Maqeodni</option>
                      </select>

                      <div class="d-grid gap-2 mt-4">
                        <a class="btn btn-brand" type="button">Kërko</a>
                      </div>
                  </div>    
              <!-- articles -->
            <!-- first article -->
                  <h4 class="article-head text-muted fw-light">Artikuj</h4>
                <div class="articles row">
                    <div class="col-5">
                      <img src="babyfoot.jpg" alt="babyfoot" width="110%">
                    </div>
                    <div class="col-7">
                      <p class="titletext mb-0 text-uppercase small">Fëmiu im</p>
                      <hr class="mt-0 mb-0" width="40%">
                      <p class="small-text mt-0 mb-0">Titulli I artikullit per beba lirem 
                        ipshum something...</p>
                      <p class="small-date">15.10.21</p>
                    </div>
                </div>
               <!-- second article -->
                <div class="row mt-4">
                    <div class="col-5">
                      <img src="babyfoot.jpg" alt="babyfoot" width="110%">
                    </div>
                    <div class="col-7">
                      <p class="titletext mb-0 text-uppercase small">Fëmiu im</p>
                      <hr class="mt-0 mb-0" width="40%">
                      <p class="small-text mt-0 mb-0">Titulli I artikullit per beba lirem 
                        ipshum something...</p>
                      <p class="small-date">15.10.21</p>
                    </div>
                </div>
               <!-- third article -->
                <div class="row mt-4">
                    <div class="col-5">
                      <img src="babyfoot.jpg" alt="babyfoot" width="110%">
                    </div>
                    <div class="col-7">
                      <p class="titletext mb-0 text-uppercase small">Fëmiu im</p>
                      <hr class="mt-0 mb-0" width="40%">
                      <p class="small-text mt-0 mb-0">Titulli I artikullit per beba lirem 
                        ipshum something...</p>
                      <p class="small-date">15.10.21</p>
                    </div>
                </div>

               <!-- four article -->
                <div class="row mt-4">
                      <div class="col-5">
                        <img src="babyfoot.jpg" alt="babyfoot" width="110%">
                      </div>
                      <div class="col-7">
                        <p class=" titletext mb-0 text-uppercase small">Fëmiu im</p>
                        <hr class="mt-0 mb-0" width="40%">
                        <p class="small-text mt-0 mb-0">Titulli I artikullit per beba lirem 
                          ipshum something...</p>
                        <p class="small-date">15.10.21</p>
                      </div>
            </div>
        </div>        


              <div class="col-lg-9 col-sm-12">
                <div class="form-group">
                  <textarea class="form-control" rows="5" id="comment"></textarea>
                    <div class="row">
                      <div class="col-lg-4 col-sm-12">

                        <div class="row justify-content-between mt-4">
            
                          <div class=" col-5 d-flex align-items-center"> 
                            <h5 class="names text-muted fw-light">Emra</h5>
                          </div>
                            <div class="rez-button col-7">    
                              <a type="button" class="btn btn-brand">Propozo emër</a>
                            </div>
                        </div>    
                            <!-- Cards -->  
                            <!-- First Card -->
                            <div class="card m-auto mt-3" style="width: 100%;">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-2 d-flex justify-content-center align-items-center">
                                    <i class="far fa-heart fa-lg"></i>
                                  </div>
                                  <div class="col-8 align-items-center">
                                    <h2 class="mb-0">Zana</h2>
                                    <p class="small-text mb-0">Origjina: Trojet Shqiptare</p>
                                  </div>
                                  <div class="col-1 d-flex align-items-center">
                                    <i class="fas fa-chevron-right"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Second Card -->
                            <div class="card m-auto mt-3" style="width: 100%;">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-2 d-flex justify-content-center align-items-center">
                                    <i class="far fa-heart fa-lg"></i>
                                  </div>
                                  <div class="col-8 align-items-center">
                                    <h2 class="mb-0">Ana</h2>
                                    <p class="small-text mb-0">Origjina: Trojet Shqiptare</p>
                                  </div>
                                  <div class="col-1 d-flex align-items-center">
                                    <i class="fas fa-chevron-right"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <!-- Third Card -->
                            <div class="card m-auto mt-3" style="width: 100%;">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-2 d-flex justify-content-center align-items-center">
                                    <i class="far fa-heart fa-lg"></i>
                                  </div>
                                  <div class="col-8 align-items-center">
                                    <h2 class="mb-0">Nana</h2>
                                    <p class="small-text mb-0">Origjina: Trojet Shqiptare</p>
                                  </div>
                                  <div class="col-1 d-flex align-items-center">
                                    <i class="fas fa-chevron-right"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          
                            <!-- Fourth Card -->
                            <div class="card m-auto mt-3" style="width: 100%;">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-2 d-flex justify-content-center align-items-center">
                                    <i class="far fa-heart fa-lg"></i>
                                  </div>
                                  <div class="col-8 align-items-center">
                                    <h2 class="mb-0">Ganja</h2>
                                    <p class="small-text mb-0">Origjina: Trojet Shqiptare</p>
                                  </div>
                                  <div class="col-1 d-flex align-items-center">
                                    <i class="fas fa-chevron-right"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- Five Card -->
                            <div class="card m-auto mt-3" style="width: 100%;">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-2 d-flex justify-content-center align-items-center">
                                    <i class="far fa-heart fa-lg"></i>
                                  </div>
                                  <div class="col-8 align-items-center">
                                    <h2 class="mb-0">Alma</h2>
                                    <p class="small-text mb-0">Origjina: Trojet Shqiptare</p>
                                  </div>
                                  <div class="col-1 d-flex align-items-center">
                                    <i class="fas fa-chevron-right"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                      </div>
                      
                      <div class="empty col-4">
                       
                      </div>

                      <div class="col-4">
                        <!-- filter -->
                        <h5 class="fav-names text-muted fw-light">
                          Emrat të preferuarit
                        </h5>
                        <div class="right-field card main-card m-auto mt-3" style="width: 90%;">
                          <div class="card-body">
                              <div class="row mt-2">
                                  <div class="col-2 d-flex align-items-center">
                                    <i class="fa-x far fa-times-circle mt-2"></i>
                                  </div>
                                  <div class="col-7">
                                    <h2 class="mb-0">Zana</h2>
                                  </div>
                              </div>
            
                              <div class="row mt-3">
                                <div class="col-2 d-flex align-items-center">
                                  <i class="fa-x far fa-times-circle mt-2"></i>
                                </div>
                                <div class="col-7">
                                  <h2 class="mb-0">Ana</h2>
                                </div>
                            </div>
            
                            <div class="row mt-3">
                                <div class="col-2 d-flex align-items-center">
                                  <i class="fa-x far fa-times-circle mt-2"></i>
                                </div>
                                <div class="col-7">
                                  <h2 class="mb-0">Zaa</h2>
                                </div>
                            </div> 
                          </div>
                        </div>
                           <!-- ad -->
                           <div class="main-add card mt-4">
                            <div class="card-body">
                                <h2 class="text-center text-muted">AD</h2>
                            </div>
                          </div>  
                      </div>
                    </div>
                </div>
              </div>
      </div>
    </div>
    </div>
</template>
>>>>>>> 9268d71bb8f6aa63fd5725fa962a804e25fca53d
