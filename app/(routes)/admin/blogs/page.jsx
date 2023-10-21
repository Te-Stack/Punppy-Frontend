import PostTable from "../_components/postTable";


const Blogs = () => {
    return ( 
        <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-md-4 ">
              
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            </div>
            <PostTable h3="Manage Blog Posts" p="Create, delete blog posts" href="./blogs/view" />
            
            
          

        </main>
     );
}
 
export default Blogs;