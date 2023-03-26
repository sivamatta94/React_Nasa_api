export default function SingleWayBinding() {
    var username = "siva";
    return (
        <div>
            User name:
            <input type="text" value={username}></input>
            <br></br>
            Hello!{username}
        </div>
    )
}