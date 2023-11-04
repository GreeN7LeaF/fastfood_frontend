import React from "react";

export default function OrderDetails({orderItem, removeFromOrder}) {
  return (
    <tr className="alert">
      <td className="product-item-img">
        <img src={require("../../../images/product/thumb/item1.jpg")} alt="" />
      </td>
      <td className="product-item-name">Pizza</td>
      <td className="product-item-price">$28.00</td>
      <td className="product-item-quantity">
        <div className="quantity btn-quantity max-w80">
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>
      </td>
      <td className="product-item-totle">$28.00</td>
      <td className="product-item-close">
        <NavLink
          to={""}
          data-dismiss="alert"
          aria-label="close"
          className="ti-close"
        ></NavLink>
      </td>
    </tr>
  );
}
