import { useState, useEffect } from "react";
export default function ReactDataBinding() {
    const [getnasa, setnasa] = useState({});
    useEffect(() => {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
            .then(response => response.json())
            .then(data => {
                setnasa(data);
            })
    }, [])
    return (<div >
        <h2>Nasa Photos</h2>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Photo Id</th>
                    <th>Full_name</th>
                    <th>Rover Name</th>
                    <th>Preview</th>
                </tr>
            </thead>
            <tbody>
                {
                    getnasa.photos.map(photo =>
                        <tr>
                            <td>{photo.id}</td>
                            <td>{photo.camera.full_name}</td>
                            <td>{photo.rover.name}</td>
                            <td><img src={photo.img_src} height="100" width="100"></img></td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>)


}