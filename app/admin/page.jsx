"use client"
import "./admin.css"

import { useState, useEffect } from 'react';
import Table from "./components/table";
import loadingPage from "./components/loading";




const Admin = () => {
  const [loading, setLoading] = useState(true)



    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
        setLoading(false)
      }, []);

      if (loading){
        return (<loadingPage/>)
      }
      else{
        return ( 
        
            <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-md-4 ">
              
              <div className="d-flex">
                  <div>
                      <img src="./icons/user icon.png"/>
                  </div>
                  <div>
                      <h3 className="h3">Admin Dashboard</h3>
                      <p>You are now logged in as an admin</p>

                  </div>
                
              </div>
        
              <div className="d-flex flex-column flex-lg-row ">
                  <div className="slot1">
                      <div className="box card1">
                          <h1>42</h1>
                          <p>posts</p>
                          
                      </div>
                      <div className="box card3">
                        <h1>10,000</h1>
                        <p>active users</p>
                        
                    </div>
                     
                  </div>
                  <div className="slot2">
                    <div className="box card2">
                      <h1>42</h1>
                      <p>pending ads</p>

                  </div>
                      <div className="box card4">
                          <h1>10,000</h1>
                          <p>total users</p>

                      </div>
                  </div>
              </div>

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                </div>
                <Table h3="News Users" p ="Recently signed up" />
                
                
                

              </main>
                  

                  
            
           
                  
          
      

     );
        }
}
 
export default Admin;