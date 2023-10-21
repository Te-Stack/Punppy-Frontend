import Link from "next/link";



const BlogView = () => {
    return ( 
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 col-xl-8 bg-light">
                <div className="cardHeader">
                    <div>
                        <h5>View Blog Post</h5>
                    </div>
                    <div className="d-flex input">
                        <select className="form-control" name="" id="">
                            <option value="">Action </option>
                        </select>
                    </div> 
                </div>

                <div className="profile-main">
                    <div className="intro d-flex justify-content-between">
                        <div>
                          <h5 className="fw-bold">BREAKING: US Pesident Joe Biden declares to run for second term</h5>
                          <small>1hr</small>

                        </div>
                        
                        <div>
                          <Link href="./"><img src="/img/Cancel.png" alt=""/></Link>
                          
                        </div>
                    </div>
                    <div className="highlight">
                        <img className="biden" src="/img/biden.png" />
                    </div>
                    <div>
                        <div>
                            <p>
                                <li>
                                    President Joe Biden of the United States has made his intentions to run for a second term at the White House known
                                </li>
                            </p>
                            
                                
                            <p>
                                <li>
                                    The 80-year-old defied criticism of his age and health status, noting that he has unfinished business as President
                                </li>
                            </p>
                            
                            <p>
                                <li>
                                    Four years ago, Biden became the oldest president-elect in the history of the United States, and he is on course to be the oldest to leave office

                                </li>
                                
                            </p>
                        </div>
                       
                       

                    </div>

                </div>
          
                
                </main>

     );
}
 
export default BlogView;