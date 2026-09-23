import Navbar from "./_components/navbar";

const LandingPageLayout = (
    {children}:{children: React.ReactNode;}

) => {
    return ( 
        <div className="h-full [--navbar-height:88px] pt-[var(--navbar-height)]">
            <Navbar />
            {children}
        </div>
     );
}
 
export default LandingPageLayout;
