import Link from "next/link";



const View = () => {
    return ( 
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 col-xl-8 bg-light">
                <div className="cardHeader">
                    <div>
                        <h5>View Posts</h5>
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
                                <img src="/img/postman.png"/>
                                <span className="postonline"></span>


                            </div>
                                <div className="d-flex flex-column" >
                                    <h5 className="mb-0 mt-2 fw-bold">Robert Fox <span className="text-danger fw-light fs-6">. Follow</span></h5>
                                    <div className="d-flex">
                                       <p>Hi there, I'm Roberts and... <span> . 1h . <img src="/img/postVector.png" /></span></p>

                                    </div>
                                    
                                </div>
                            </div>                            
                        <div>
                            <img className="btn" src="/img/three dots.png" />
                            <Link href="./"><img className="btn" src="/img/Cancel.png"/></Link>
                            

                        </div>
                        
                    </div>
                    <div className="intro">
                        <h5 className="fw-bold">Just Adopted a Puppy!</h5>
                            <p>Hey fam! I 'm excited to annouce that I just adopted a new poppy named max! He 's a 3-month-old golden retriever and has already stolen my heart..<a href="">Read more</a></p>
                    </div>
                    <div className="highlight">
                        <img className="biden" src="/img/dog_4by3 1.png" />
                    </div>
                    <div>
                        <div className="d-flex justify-content-evenly align-items-start">
                            <p className="btn"><img src="/img/Thumps up.png"/><span className="text-danger">Thumps up <img src="/img/divider.svg" /></span> 35</p>
                            <p className="btn"> <img src="/img/CommentVector.png"/>   10</p>
                            <p className="btn"><img src="/img/Retweet vector.png"/>    2</p>
                            
                        </div>
                        <div>
                            <div>
                                <img src="/img/Commentpics.png"/>
                            </div>
                            <div className="comment">
                                <input type="text" name="Write a comment..." className="form-control" placeholder="Write a comment..." id=""/>
                                <span className="btn"> <img src="/img/SendVector.png" /></span>
                               
                            </div>
                            <div>
                                
                            </div>

                        </div>
                       

                    </div>

                </div>
                {/* <!-- Button trigger modal for delete post --> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deletePost">
                  Delete
                </button>

                {/* <!-- Delete post Modal --> */}
                <div className="modal fade" id="deletePost" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <div className="bg-danger text-center text-white p-2">
                          <img src="/img/Delete.png"/>
                          <p>Delete post</p>
                        </div>
                        <div >
                          <p>Are you sure you want to delete this post?</p>
                        </div>
                        <div>
                          {/* <!-- Button trigger modal for delete post success --> */}
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#deletePostSuccess">
                            Delete
                          </button>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="modal fade" id="deletePostSuccess" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body text-center">
                        <div className="bg-danger text-center text-white p-2">
                          <img src="/img/Delete.png"/>
                          <p>Success</p>
                        </div>
                        <div >
                          <p>Post has been deleted</p>
                        </div>
                        
                      </div>
                      
                    </div>
                  </div>
                </div>
          
                
                </main>
     );
}
 
export default View;