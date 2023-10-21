import PostTable from "../_components/postTable";

const Posts = () => {
    return ( 
        <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-md-4 ">
              
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  </div>
                  <PostTable h3="New Posts" p="Recently Signed Up Users" href="./posts/view" />
                  <PostTable h3="Flagged Posts" p="Recently Signed Up Users" href="./posts/view" />
                  <PostTable h3="All Posts" p="Manage all users" href="./posts/view" />
                  
                

              </main>
     );
}
 
export default Posts;