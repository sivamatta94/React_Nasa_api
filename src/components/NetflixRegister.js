export default function NetflixRegister() {
    return (<div >
        <p className="text-center">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="input-group input-group-lg ">
            <input type="email" className="form-control" placeholder="Email address"></input>
            <button className="btn btn-danger" >Get Started<i class="bi bi-chevron-right"></i></button>
        </div>
    </div>
    );
}