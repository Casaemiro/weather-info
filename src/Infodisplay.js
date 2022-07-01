import './Infodisplay.css'
const Infodisplay = () => {
    return (
        <div className="container border containerb" style={{
            backgroundColor: "#43a7ff07"
        }} onclick="cartModal">
            <div className="cart" data-bs-toggle="modal" data-bs-target="#exampleModal" color="#071D29">
                <div className="subt subt1 cityName">Bamenda</div>
                <div className="subt">temp 27C</div>
                <div className="subt">Humidity</div>
                <div className="subt">Humidity</div>
                <div className="subt">400mmHg</div>
            </div>
            <div className="cart" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="subt subt1 cityName">Buea</div>
                <div className="subt">tempp 30C</div>
                <div className="subt">200gcm3</div>
                <div className="subt">Humidity</div>
                <div className="subt">Rainfall</div>
            </div>
            <div className="cart" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="subt subt1 cityName">Limbe</div>
                <div className="subt">temp 20C</div>
                <div className="subt">Humidity</div>
                <div className="subt">Humidity</div>
                <div className="subt">Rainfall</div>
            </div>
            <div className="cart" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="subt subt1 cityName">Kumba</div>
                <div className="subt">temp 26C</div>
                <div className="subt">hum 300gcm3</div>
                <div className="subt">Humidity</div>
                <div className="subt">Rainfall</div>
            </div>
            <div className="cart" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div className="subt subt1 cityName">Kumba</div>
                <div className="subt">temp 26C</div>
                <div className="subt">hum 300gcm3</div>
                <div className="subt">Humidity</div>
                <div className="subt">Rainfall</div>
            </div>
        </div>
    );
}

export default Infodisplay;