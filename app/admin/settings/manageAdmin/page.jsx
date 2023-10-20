import Link from "next/link";

const ManageAdmin = () => {
    return ( 
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 col-xl-8">
        <div className="d-flex">
            <div>
                <h3 className="h3">Manage Admin</h3>
                

            </div>
          
        </div>
  
        <div className="d-flex flex-column flex-lg-row ">
            <div className="slot1">
                <div className="settingsbox">
                  <a href="addNewAdmin.html"  >
                    
                    <h6><span><img src="/icons/Add new admin icon.png" /></span> Add New Admin</h6>  
                  </a>                          
                </div>
                <div className="settingsbox ">
                    <h6> <span><img src="/icons/creator_badge.png" /></span> Manage Ad Partners</h6>
                  
                </div>
            </div>
            <div className="slot2">
                <div className="settingsbox">
                  
                  <a href="Manage.html">
                    
                      <h6> <span><img src="/icons/Manage Admin icon.png" /></span>Manage Admins</h6>
                    </a>
                    
                    
                </div>
                <div className="settingsbox">
                    <h6> <span><img src="/icons/Campaign icon.png" /></span>Ad Partnership Requests</h6>
                </div>
            </div>
        </div>
        </main>
     );
}
 
export default ManageAdmin;