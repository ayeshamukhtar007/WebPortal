import "./paymentTb.css";

export default function paymentTb() {
  const Button = ({ type }) => {
    return <button className={"paymentTbButton " + type}>{type}</button>;
  };
  return (
    <div className="paymentTb">
      <div className="paymentTbTitle">
      <h3>Payment</h3>
      <button type="button" class="btn paymentbtn">Do Payment</button>


      </div>
      <div className="scrolldiv">
      <table className="paymentTbTable">
        <tr className="paymentTbTr">
          <th className="paymentTbTh">Customer</th>
          <th className="paymentTbTh">Date</th>
          <th className="paymentTbTh">Amount</th>
          <th className="paymentTbTh">Status</th>
        </tr>
        <tr className="paymentTbTr">
          <td className="paymentTbUser">
           
            <span className="paymentTbName">Susan Carol</span>
          </td>
          <td className="paymentTbDate">2 Jun 2021</td>
          <td className="paymentTbAmount">$122.00</td>
          <td className="paymentTbStatus">
            <Button type="Approved" />
          </td>
        </tr>
        
      </table>
      </div>
    </div>
  );
}
