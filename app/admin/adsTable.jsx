import Link from "next/link";


const AdsTable = ({h3, p, href}) => {
    return ( 
        <div className="details">
                    <div className="recentOrders">
                      <div className="cardHeader">
                          <div>
                              <h3>{h3}</h3>
                              <p>{p}</p>
                          </div>
                          <div className="d-flex input">
                              <span><img src="/icons/Search.png"/></span>
                              <input type="search" name="" id="" placeholder="              Search"/>
                              <select className="form-control" name="" id="">
                                  <option value="">Action <img src="/icons/Arrow down.png"/></option>
                              </select>
                          </div>
                        
                      </div>
                      
                      <div className="table-responsive">
                        <table className="table table-striped table-sm">
                          <thead>
                            <tr>
                              <th><input type="checkbox" className="form-check-input" id="exampleCheck1"/> id</th>
                              <th>Content</th>
                              <th>Name</th>
                              <th>Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td> <input type="checkbox" className="form-check-input" id="exampleCheck1"/> 1000</td>
                              <td><Link href={`${href}`}>Write something important?</Link></td>
                              <td>Robert Fox</td>
                              <td>5/5/2023</td>
                              <td><span className=" delivered">Active</span></td>
                            </tr>
                            <tr>
                              <td> <input type="checkbox" className="form-check-input" id="exampleCheck1"/> 1001</td>
                              <td><Link href={`${href}`}>Write something important?</Link></td>
                              <td>Robert Fox</td>
                              <td>5/5/2023</td>
                              <td><span className="offline">Offline</span></td>
                            </tr>
                            <tr>
                              <td> <input type="checkbox" className="form-check-input" id="exampleCheck1"/>1002</td>
                              <td><Link href={`${href}`}>Write something important?</Link></td>
                              <td>Robert Fox</td>
                              <td>5/5/2023</td>
                              <td><span className="restricted">Restricted</span></td>
                            </tr>
                            
                          </tbody>
                        </table>
                      </div>
                      
                  </div>
                  </div>
     );
}
 
export default AdsTable;