import React from "react";
import { Table, Button } from "antd";
//import {getOrder} from "../../service/orderService";
import { getRealCartItems } from "../services/cartService";
import "../css/myorder.css";
import Navbar from "./NavBar";

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
];

class OrderTableX extends React.Component {
  state = {
    selectedRowKeys: [],
    loading: false,
    item: [],
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  //
  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

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
        bookId: data[i].bookId,
      });
    }
    this.setState({
      item: tmp,
    });
  };
  componentDidMount() {
    getRealCartItems(this.handleCartItems);
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    selectedRowKeys.length = 1;

    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div >
        <Navbar />
            <Table columns={columns} dataSource={this.state.item} />
      </div>
    );
  }
}

export default OrderTableX;
