import Nav from "./nav"
import Sidebar from "./sidebar"


// import './admin.css'




export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Nav/>
        <div className="container-fluid">
            <div className="row">
            <Sidebar/>
                

                <div className="col-md-3 col-lg-2">

                  </div>

                  {children}


                    </div>
                  

                  
            
           
                  
          
            

          
            
          
          
            </div>
        
   
        
      </section>
    )
  }