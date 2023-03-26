export default function NestedComponents() {
    var menu = [
        { Category: "Electronics", Products: ["Samsung Tv", "Mobile"] },
        { Category: "Footwear", Products: ["Nike casuals", "Lee Boot"] }
    ]
    return (
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    menu.map(item =>
                        <li>{item.Category}
                            <ul>
                                {
                                    item.Products.map(
                                        product =>
                                            <li>{product}</li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <h2>Select a Product</h2>
            <select>
                {
                    menu.map(item =>
                        <optgroup label={item.Category}>
                            {
                                item.Products.map(
                                    product => <option key={product}>{product}</option>

                                )
                            }
                        </optgroup>)
                }
            </select>
        </div>
    )
}
