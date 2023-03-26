import "./NetflixComponent.css";
import NetflixHeader from "./NetflixHeader";
import NetflixMain from "./NetflixMain";
import NetflixRegister from "./NetflixRegister";
import Netflixfooter from "./Netflixfooter";
export default function NetflixIndex() {
    return (
        <div className="container-fluid">

            <div className="box">
                <header>
                    <NetflixHeader></NetflixHeader>
                </header>
                <section className="d-flex justify-content-center align-items-center">
                    <main>
                        <NetflixMain> </NetflixMain>
                        <NetflixRegister></NetflixRegister>
                    </main>
                </section>
                <footer>
                    <Netflixfooter></Netflixfooter>
                </footer>
            </div>

        </div>
    )
} 