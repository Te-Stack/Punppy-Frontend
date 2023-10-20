const AdsView = () => {
    return ( 
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4 col-xl-8 bg-light">
              <div class="cardHeader">
                  <div>
                      <h5>View Ads</h5>
                  </div>
                  <div class="d-flex input">
                      <select class="form-control" name="" id="">
                          <option value="">Action </option>
                      </select>
                  </div> 
              </div>

              <div class="profile-main">
                  <div class="pics">
                      <div class="d-flex">
                          <div class="ellipse">
                              <img src="/img/Adlogo.png"/>
                          </div>
                              <div class="d-flex flex-column" >
                                  <h6 class="mb-0 mt-2">Grammerly <span class="text-danger fw-light fs-6">. Sponsored</span></h6>
                                  <div class="d-flex">
                                     <p> <span> <img src="/img/divider.svg" /> 1h <img src="/img/divider.svg" /> <img src="/img/postVector.png" /></span></p>

                                  </div>
                                  
                              </div>
                          </div>                            
                      <div>
                          <img class="btn" src="/img/three dots.png" />
                          <a href="./"><img class="btn" src="/img/Cancel.png" /></a>
                          

                      </div>
                      
                  </div>
                  <div class="intro">
                      <h5 class="fw-bold">Write Something Important?</h5>
                          <p>Grammerly's writing app makes sure everything you type is easy to read, effective, and mistake-free</p>
                  </div>
                  <div class="highlight">
                      <img class="biden" src="/img/Grammarly Ads.png" />
                  </div>
                  <div>
                      <div class="d-flex justify-content-start align-items-start">
                          <p class="btn mx-2"><img src="/img/Thumps up.png"/><span class="text-danger">Thumps up <img src="/img/divider.svg" /></span>  35</p>
                          
                      </div>
                  </div>

              </div>

              {/* <!-- Button trigger modal for unrestrict account --> */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#unrestrictAccount">
                Approve Ad
              </button>
             {/* <!-- Button trigger modal for restrict account --> */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#restrictAccount">
                Disapprove Ad
              </button>
             {/* <!-- Button trigger modal for ban account --> */}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#banAccount">
                Suspend Ad
              </button>

              {/* <!--Unrestrict Account Modal --> */}
              <div class="modal fade" id="unrestrictAccount" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                      <div class="bg-primary text-center text-white p-2">
                        <img src="/img/Checkmark.png"/>
                        <p>Approve Ad</p>
                      </div>
                      <div >
                        <p>Are you sure you want to approve and publish ad?</p>
                      </div>
                      <div>
                        {/* <!-- Button trigger modal for unrestrict account --> */}
                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#unrestrictAccountSuccess">
                          Approve
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/* <!--Unrestrict Account Success Modal --> */}
              <div class="modal fade" id="unrestrictAccountSuccess" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                      <div class="bg-primary text-center text-white p-2">
                        <img src="/img/Checkmark.png"/>
                        <p>Success</p>
                      </div>
                      <div >
                        <p>Ad has been published!</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/* <!-- Disapprove Ad Modal --> */}
              <div class="modal fade" id="restrictAccount" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                      <div class="bg-danger text-center text-white p-2">
                        <img src="/img/BigCancel.png"/>
                        <p>Disapprove Ad</p>
                      </div>
                      <div >
                        <p>Are you sure you want to disapprove this ad?</p>
                      </div>
                      <div>
                        {/* <!-- Button trigger modal for restrict account --> */}
                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#restrictAccountSuccess">
                          Disapprove
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/* <!-- Restrict Account Success Modal --> */}
              <div class="modal fade" id="restrictAccountSuccess" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                      <div class="bg-danger text-center text-white p-2">
                        <img src="/img/BigCancel.png"/>
                        <p>Success</p>
                      </div>
                      <div >
                        <p>Ad has been disapproved</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/* <!-- Suspend Ad Modal --> */}
              <div class="modal fade" id="banAccount" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                      <div class="bg-danger text-center text-white p-2">
                        <img src="/img/BigCancel.png"/>
                        <p>Suspend Ad</p>
                      </div>
                      <div >
                        <p>Are you sure you want to suspend this active ad?</p>
                      </div>
                      <div>
                         {/* <!-- Button trigger modal for ban account success --> */}
                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#banAccountSuccess">
                          Suspend
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              {/* <!-- Ban Account Success Modal --> */}
              <div class="modal fade" id="banAccountSuccess" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                      <div class="bg-danger text-center text-white p-2">
                        <img src="/img/BigCancel.png"/>
                        <p>Success</p>
                      </div>
                      <div >
                        <p>Account has been suspended</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
        
              
              </main>
     );
}
 
export default AdsView;