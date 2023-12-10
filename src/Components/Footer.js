import React from 'react'
// import '../CSS/style.css';
function Footer() {
  return (
    <div>
       <section className="footer">
        <div className="box-container">
            <div className="box">
                
                <h3>quick links</h3>
                <a href="/"><i className="fas fa-chevron-right"></i>Home</a>
        <a href="/Services"><i className="fas fa-chevron-right"></i>Services</a>
        
        <a href="/Book"><i className="fas fa-chevron-right"></i>Book</a>
        <a href="/Review"><i className="fas fa-chevron-right"></i>Review</a>
        <a href="/Blogs"><i className="fas fa-chevron-right"></i>Blogs</a>
        <a href="/Login"><i className="fas fa-chevron-right"></i>Login</a>
            </div>
            {/* <div className="box">
                <h3>our services</h3>
                <a href="#"> <i className="fas fa-chevron-right"></i> dental care</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> message therapy</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> cardioloty</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> diagnosis</a>
                <a href="#"> <i className="fas fa-chevron-right"></i> ambulance service</a>
            </div> */}
            <div className="box">
                <h3>contact info</h3>
                <a href="#"> <i className="fas fa-phone"></i> +123-456-7859</a>
                <a href="#"> <i className="fas fa-phone"></i> +356-481-0286</a>
                <a href="#"> <i className="fas fa-envelope"></i> EVacc.info.com</a>
                <a href="#"> <i className="fas fa-envelope"></i> EVacc.@gmail.com</a>
                <a href="#"> <i className="fas fa-map-marker-alt"></i>  Bhopal,India - 1000</a>
            </div>
            <div className="box">
                <h3>follow us</h3>

                <a href="#"> <i className="fab fa-facebook-f"></i> facebook</a>
                <a href="#"> <i className="fab fa-twitter"></i> twitter</a>
                <a href="#"> <i className="fab fa-linkedin"></i> linkedin</a>
                <a href="#"> <i className="fab fa-instagram"></i> instagram</a>
                <a href="#"> <i className="fab fa-youtube"></i> youtube</a>
                <a href="#"> <i className="fab fa-pinterest"></i> pinterest</a>
            </div>
        </div>
        <div className="credit">created by <span>Group 102</span> | all right reserved</div>
    </section>
    </div>
  )
}

export default Footer
