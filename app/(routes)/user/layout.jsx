

export const metadata = {
  title: "User",
  description:"This is the User page for the Punppy app "
};




export default function UserLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
       {children}
        
   
        
      </section>
    )
  }