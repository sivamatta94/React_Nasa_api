export default function DataTable() {
    var products = [
        { Name: "samsung Tv", price: 25600 },
        { Name: "Nike casulas", price: 4200 }
    ]
    return (
        <div className="container">
            <h2>Product Deatils</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => <tr>
                            <td>{product.Name}</td>
                            <td>{product.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}