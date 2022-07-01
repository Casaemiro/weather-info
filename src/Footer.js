import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper" id="footer-wrapper">
                <div className="footer-mid" id="footer-mid" name="footer-mid">
                    <h3>More On Weather Info</h3>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>About Us</p>
                    <p>Contributors and Scientists</p>
                </div>
                <div className="footer-right" id="footer-right" name="footer-right">
                    <h3>More On Iknite Trainees</h3>
                    <p>The Team</p>
                    <p>Jobs</p>
                    <p>Press</p>
                </div>
                <div className="footer-right" id="footer-right" name="footer-right">
                    <h3>More On Iknite Trainees</h3>
                    <p>The Team</p>
                    <p>Jobs</p>
                    <p>Press</p>
                </div>
            </div>
            <div className="copyright">
                <p>copyright 2022 WeatherInfo, Inc, POWERED by iknite.space trainees</p>
            </div>
        </footer>
    );
}

export default Footer;