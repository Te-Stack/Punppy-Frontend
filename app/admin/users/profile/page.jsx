import Link from "next/link";


const Profile = () => {
    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 col-xl-8">
                <div className="cardHeader">
                    <div>
                        <h5>View Profile</h5>
                    </div>
                    <div className="d-flex input">
                        <select className="form-control" name="" id="">
                            <option value="">Action </option>
                            
                        </select>
                    </div> 
                </div>

                <div className="profile-main">
                    <div className="pics">
                        <div className="d-flex">
                            <div className="ellipse">
                                <img src="/img/ellipse-2.svg" />
                                <span className="profileonline"></span>


                            </div>
                                <div className="d-flex flex-column" >
                                    <h5 className="mb-0 mt-2 fw-bold">Theresa Webb <img src="/img/creator-badge.png"/></h5>
                                    <div className="d-flex">
                                        <div className="mx-2">
                                            <div><span className="fw-bold">12K</span> follower</div>
                                            <button className=" btn btn-primary">Follow</button>
                                        </div>
                                        <div>
                                            <div><span className="fw-bold">50</span> following</div>
                                            <button className="btn btn-outline-primary">Message</button>
                                            <img className="btn" src="/img/three dots.png" />
                          
                                        </div>   

                                    </div>
                                    
                                </div>
                            </div>                            
                        <div>
                            {/* <!-- <p>New York</p> --> */}
                            <Link href="./"><img className="btn" src="/img/Cancel.png" /></Link>
                            

                        </div>
                        
                    </div>
                    <div className="intro">
                        <p className="fw-bold">Intro</p>
                            <p>Hi, I am Theresa, single and love to play chess and read rare books. I am excited to connect with fellow book lovers and chess ethusiast on this platform</p>
                    </div>
                    <div className="highlight">
                        <h6 className="fw-bold">Highlights</h6>
                        <p><img src="/img/favorite-fill-1-wght-400-grad-200-opsz-481.svg" />Single</p>
                        <p><img src="/img/home-fill-1-wght-400-grad-200-opsz-481.svg" />Lives in <span className="fw-bold">New York</span></p>
                        <p><img src="/img/thumb-up-fill-1-wght-400-grad-200-opsz-483.svg" /><span className="fw-bold">120K</span> content Views <img src="/img/divider.svg" /> <span className="fw-bold">50</span> posts <img src="/img/divider.svg" /> <span className="fw-bold" >24</span> answers</p>
                        <p><img src="/img/calendar-today-fill-1-wght-400-grad-200-opsz-481.svg" />Joined <span className="fw-bold">Sept 2022</span></p>

                    </div>
                    <div>
                        <h6 className="fw-bold">Topics & Interests</h6>
                        <div className="topic">
                            <div className="part-1">
                                <div className="d-flex">
                                    <img src="/img/dating-relationships.png" />
                                    <div className=".div">
                                        <p>Dating and Relationships</p>
                                        <a className="p">Follow</a>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="/img/self-care-and-excercise.png" />
                                    <div className="div">
                                        <p>Self care & Wellness</p> 
                                        <a className="p">Follow</a>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="/img/pet-care.png" />
                                    <div className="div">
                                        <p>Pets</p>
                                        <a className="p">Follow</a>
                                    </div>
                                </div>
                            </div>
                            <div className="part-2">
                                <div className="d-flex">
                                    <img src="/img/food-1.png" />
                                    <div className="div">
                                        <p>Foods</p>
                                        <a className="p">Follow</a>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="/img/sports-fitness.png" />
                                    <div className="div">
                                        <p>Sports</p>
                                        <a className="p">Follow</a>
                                    </div>
                                   
                                </div>
                                <div className="d-flex">
                                    <img src="/img/technology-and-gadgets.png" />
                                    <div className="div">
                                        <p>Technology & Gadgets</p>
                                        <a className="p">Follow</a>
                                    </div>
                                    
                                </div>
    
                            </div>

                        </div>
                       

                    </div>

                </div>
               {/* <!-- Button trigger modal for unrestrict account --> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#unrestrictAccount">
                  Unrestrict Account
                </button>
               {/* <!-- Button trigger modal for restrict account --> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#restrictAccount">
                  Restrict Account
                </button>
               {/* <!-- Button trigger modal for ban account --> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#banAccount">
                  Ban Account
                </button>
               

                {/* <!--Unrestrict Account Modal --> */}
                <div className="modal fade" id="unrestrictAccount" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <div className="bg-primary text-center text-white p-2">
                          <img src="/img/Checkmark.png"/>
                          <p>Approve Ad</p>
                        </div>
                        <div >
                          <p>Are you sure you want to approve and publish ad?</p>
                        </div>
                        <div>
                          {/* <!-- Button trigger modal for unrestrict account --> */}
                          <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#unrestrictAccountSuccess">
                            Approve
                          </button>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                {/* <!--Unrestrict Account Success Modal --> */}
                <div className="modal fade" id="unrestrictAccountSuccess" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <div className="bg-primary text-center text-white p-2">
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
                {/* <!-- Restrict Account Modal --> */}
                <div className="modal fade" id="restrictAccount" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <div className="bg-danger text-center text-white p-2">
                          <img src="/img/BigCancel.png"/>
                          <p>Restrict Account</p>
                        </div>
                        <div >
                          <p>Are you sure you want to restrict this account?</p>
                        </div>
                        <div>
                          {/* <!-- Button trigger modal for restrict account --> */}
                          <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#restrictAccountSuccess">
                            Restrict
                          </button>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                {/* <!-- Restrict Account Success Modal --> */}
                <div className="modal fade" id="restrictAccountSuccess" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <div className="bg-danger text-center text-white p-2">
                          <img src="/img/BigCancel.png" />
                          <p>Success</p>
                        </div>
                        <div >
                          <p>Account has been restricted</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                {/* <!-- Ban Account Modal --> */}
                <div className="modal fade" id="banAccount" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <div className="bg-danger text-center text-white p-2">
                          <img src="/img/BigCancel.png"/>
                          <p>Ban Account</p>
                        </div>
                        <div >
                          <p>Are you sure you want to delete this account?</p>
                        </div>
                        <div>
                           {/* <!-- Button trigger modal for ban account success --> */}
                          <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#banAccountSuccess">
                            Ban
                          </button>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                {/* <!-- Ban Account Success Modal --> */}
                <div className="modal fade" id="banAccountSuccess" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <div className="bg-danger text-center text-white p-2">
                          <img src="/img/BigCancel.png"/>
                          <p>Success</p>
                        </div>
                        <div >
                          <p>Account has been deleted</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                </main>
      );
}
 
export default Profile;