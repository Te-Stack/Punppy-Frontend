const Newsletter = () => {
    return ( 
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 ">
                  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  </div>
                  <div className="details">
                    <div className="recentOrders">
                      <div className="cardHeader">
                          <div>
                              <h3>Send Newsletter</h3>
                              <p>Send targeted email</p>
                          </div>
                          <div className="d-flex input text-center">
                              <img className="btn" src="/icons/Search.png" />
                              <input type="search" className="form-control text-center" name="" id="" placeholder="              Search"/>
                          </div>
                        
                      </div>
                      
                      <div className="table-responsive">
                        <table className="table table-striped table-sm">
                          <thead>
                            <tr>
                              <th><input type="checkbox" className="form-check-input" id="exampleCheck1"/> id</th>
                              <th>Email</th>
                              <th>Name</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> <input type="checkbox" className="form-check-input" id="exampleCheck1"/> 1000</td>
                              <td>hello.user@gmail.com</td>
                              <td>Robert Fox</td>
                              <td>5/5/2023</td>
                            </tr>
                            <tr>
                              <td> <input type="checkbox" className="form-check-input" id="exampleCheck1"/> 1001</td>
                              <td>hello.user@gmail.com</td>
                              <td>Robert Fox</td>
                              <td>5/5/2023</td>
                            </tr>
                            <tr>
                              <td> <input type="checkbox" className="form-check-input" id="exampleCheck1"/> 1002</td>
                              <td>hello.user@gmail.com</td>
                              <td>Robert Fox</td>
                              <td>5/5/2023</td>
                            </tr>
                            
                            
                          </tbody>
                        </table>
                      </div>
                      
                  </div>
                  </div>

                  <div>
                    <div className="d-flex">
                      <input type="text" name="Subject" className="form-control" placeholder="Subject"/>
                      <input type="text" name="To" className="form-control" placeholder="To:"/>
                    </div>
                    <textarea name="Write Something" className="form-control" placeholder="Write something" id="" cols="30" rows="10" ></textarea>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex copies">
                        <h4>H1</h4>
                        <img src="/img/Copy.png" />
                        <img src="/img/Photo Library.png" />
                      </div>
                      <div>
                        <button className="btn btn-primary">Send</button>
                      </div>
                      
                    </div>
                    
                  </div>
           </main>
     );
}
 
export default Newsletter;