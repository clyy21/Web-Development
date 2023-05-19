import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Descriptions, InputNumber, message } from "antd";
import React from "react";
import { getBookById } from "../../services/bookService";
import { addCartItem } from "../../services/cartService";
import "../../css/bookdetails.css"

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: null,
      amount: 1,
      success: false,
    };
  }

  handleDetail = (data) => {
    this.setState({
      detail: data,
    });
  };

  componentDidMount() {
    let user = localStorage.getItem("user");
    this.setState({ user: user });

    console.log("check4", user);

    console.log("check5", this.props);
    let bookId = Number(this.props.bookId);
    console.log("check6", bookId);

    getBookById(bookId, this.handleDetail);
  }

  handleDetail = (data) => {
    this.setState({
      detail: data,
    });
  };

  onChange_input = (value) => {
    console.log("value");
    this.state.amount = value;
  };

  onAddCartItem = (e) => {
    message
      .loading("Adding into cart...")
      .then(() => {
        console.log(
          "addCartItem: " + this.props.bookId + " " + this.state.amount
        );
        addCartItem(this.props.bookId, this.state.amount, 1);
      })
      .then(() => {
        message.success("Added to cart!");
      });
  };

  render() {
    console.log("check7", this.state);
    if (this.state.detail == null) return null;
    console.log("check8", this.state.detail);

    return (
      <div className="topblankspace bottomblankspace">
      <div className="content container card  align-items-center flex-1">
        <div className={"book-detail"} style={{ display: "inline-block" }}>
          <div className={"book-image"} style={{ display: "inline-block" }}>
            <img
              alt="image"
              src={this.state.detail.image}
              style={{ width: "400px", height: "400px" }}
            />
          </div>
          <div
            className={"descriptions"}
            style={{ display: "inline-block", left: 500 }}
          >
            <Descriptions>
              <Descriptions.Item
                contentStyle={{ fontSize: 100 }}
                className={"title"}
                span={3}
              >
                {this.state.detail.name}{" "}
              </Descriptions.Item>
              <Descriptions.Item className={"book-brief"} span={3}>
                {this.state.detail.brief}
              </Descriptions.Item>
              <Descriptions.Item label={"Author"} span={3}>
                {this.state.detail.author}
              </Descriptions.Item>
              <Descriptions.Item label={"Type"} span={3}>
                {this.state.detail.type}
              </Descriptions.Item>
              <Descriptions.Item
                className={"price"}
                label={"Price"}
                span={3}
              >
                {"¥" + this.state.detail.price.toFixed(2)}
                {/* <div className={"original-price"}>¥158.00</div> */}
              </Descriptions.Item>
              <Descriptions.Item
                label={"State"}
                className={"book-condition"}
                span={3}
              >
                {this.state.detail.inventory !== 0 ? (
                  <span>
                    Available{" "}
                    <span className={"inventory"}>
                      Stock {this.state.detail.inventory}
                    </span>
                  </span>
                ) : (
                  <span className={"status"}>Out of Stock</span>
                )}
              </Descriptions.Item>
              <Descriptions.Item label={"ISBN"} span={3}>
                {this.state.detail.isbn}
              </Descriptions.Item>
              <Descriptions.Item label={"Description"} span={3}>
                {this.state.detail.description}
              </Descriptions.Item>
              <Descriptions.Item
                className={"input-button"}
                style={{ display: "block" }}
              >
                <div> Quantity：</div>
                <InputNumber
                  min={1}
                  max={this.state.detail.inventory}
                  defaultValue={1}
                  onChange={this.onChange_input}
                  className={"input-button"}
                />
              </Descriptions.Item>
              <Descriptions.Item
                className={"button-groups"}
                style={{ display: "block" }}
              >
                <Button
                  type="primary"
                  danger
                  icon={<ShoppingCartOutlined />}
                  size={"large"}
                  className={"cart-button"}
                  onClick={this.onAddCartItem}
                >
                  Add to Cart
                </Button>
                {/*<Button danger size={"large"} className={"buy-button"}>*/}
                {/*  立即购买*/}
                {/*</Button>*/}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default BookDetails;
// export default BookDetails
