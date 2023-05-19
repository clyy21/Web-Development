import React from "react";
import { Table, Button, ImportNumber } from "antd";
import {
  getCartItems,
  deleteCartItem,
  setCartItem,
} from "../services/cartService";
import "../css/cart.css";

const columns = [
  {
    title: "Book Title",
    dataIndex: "name",
  },
  {
    title: "Price (¥)",
    dataIndex: "price",
  },
  {
    title: "Quantity",
    dataIndex: "number",
  },
  {
    title: "Total",
    dataIndex: "total",
  },
  {
    title: "Operation",
    dataIndex: "operation",
  },
];

class CartTableX extends React.Component {
  state = {
    selectedRowKeys: [],
    loading: false,
    cart: [],
  };

  start = () => {
    this.setState({ loading: true }); // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  handleDelete(data, event) {
    console.log(data);
    deleteCartItem(data);
    this.setState({ data: data });
    window.location.reload();
  }

  handleCartItems = (data) => {
    console.log("handleCartItems:");
    console.log(data);
    let tmp = [];
    for (let i in data) {
      tmp.push({
        id: i, // must add id in order to apply rowSelection
        name: data[i].book.name,
        price: data[i].book.price.toFixed(2),
        number: data[i].amount,
        total: (data[i].book.price * data[i].amount).toFixed(2),
        operation: (
          <a onClick={this.handleDelete.bind(this, data[i].bookId)}>Delete</a>
        ),
        bookId: data[i].bookId,
      });
    }
    this.setState({
      cart: tmp,
    });
  };

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
    for (let i in this.state.cart) {
      if (this.state.selectedRowKeys.includes(i)) {
        console.log("setCartItem: " + this.state.cart[i].bookId + " 1");
        setCartItem(this.state.cart[i].bookId, 1);
      } else {
        console.log("setCartItem: " + this.state.cart[i].bookId + " 0");
        setCartItem(this.state.cart[i].bookId, 0);
      }
    }
  };

  handleClick = (e) => {
    this.onSelectChange(this.state.selectedRowKeys);
    window.location.href = "/ordertable";
  };

  componentDidMount() {
    getCartItems(this.handleCartItems);
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    console.log("cart=", this.state.cart);
    return (
      <div className="container topblankspace">
        <div className="cart-title">My Cart</div>
        <div className="carttable-container">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={this.state.cart}
          />
          <div className="cartfoot-container" style={{ marginBottom: 16 }}>
            <span style={{ marginLeft: 8 }} className="cartspan-container">
              {hasSelected ? (
                <span>
                  {" "}
                  Selected{" "}
                  <span class="cart-totalcount">
                    {" "}
                    {selectedRowKeys.length}
                  </span>{" "}
                  products{" "}
                </span>
              ) : (
                ""
              )}
            </span>
            <Button
              type="primary"
              className="cartbutton-container"
              onClick={this.handleClick}
              disabled={!hasSelected}
              loading={loading}
            >
              Payment
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartTableX;
