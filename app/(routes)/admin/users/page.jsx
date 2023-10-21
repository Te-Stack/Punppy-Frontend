import Table from "../_components/table";

const Users = () => {
    return ( 
        <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-md-4 ">
              
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  </div>
                  <Table h3="New User" p="Recently Signed Up Users" href="./users/profile" />
                  <Table h3="Flagged Users" p="Recently Signed Up Users" href="./users/profile" />
                  <Table h3="All Users" p="Manage all users" href="./users/profile" />
                  
                

              </main>
     );
}
 
export default Users;