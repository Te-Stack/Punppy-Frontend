import AdsTable from "../adsTable";



const Ads = () => {
    return ( 
        <main role="main" className=" col-md-9 ml-sm-auto col-lg-10 px-md-4 ">
              
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  </div>
                  <AdsTable h3="Pending ads" p="Approve, review active ads" href="./ads/view" />
                  <AdsTable h3="All ads" p="Approve, review active ads" href="./ads/view" />
                  
                  
                

              </main>
     );
}
 
export default Ads;