import './Navbar.css'
const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg" style={{
                backgroundColor: "#43A8FF"
            }}>
                <div className="container">
                    <a className="navbar-brand logo-area text-light" href="/"><b>WeatherInfo</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="mx-auto d-flex w-50">
                            <input className="form-control w-100 " type="search" id="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light mx-2 text-dark" id="btn" type="submit" >Search</button>
                        </form>
                        <select id="opt">
                            <option>search by city</option>
                            <option>search by country</option>
                        </select>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
