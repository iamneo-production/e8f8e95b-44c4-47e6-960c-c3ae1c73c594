import "./style.css";

function Order(){
    return(
        <div class="mobileOrderBody center">
            <table >
                <tr class="greenbox">
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
                <tr class="tablecontent">
                  <td class="tc">Product</td>
                  <td class="tc">Product Price</td>
                  <td class="tc">2</td>
                  <td class="tc">Total Price Amount</td>
                </tr>
            </table>

        </div>

    )
}

export default Order;