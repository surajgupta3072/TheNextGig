function RedirectPage() {
    window.location.href = localStorage.getItem("lastLastURL");
    return(
        <div>
            <h1 style={{marginTop:"20%", textAlign:"center", color:"#f26c4f"}}>Loading....</h1>
        </div>
    );
}
export default RedirectPage;