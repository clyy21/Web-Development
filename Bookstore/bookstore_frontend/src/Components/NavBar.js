import React, { Component } from "react";
import { Layout, BackTop } from "antd";
import HeadInfo from "../layout/HeadInfo";
import { Link } from "react-router-dom";
const { Header, Content } = Layout;

export class Navbar extends Component {
  state = {
    admin: false,
    customer: false,
  };

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.userType === 1) {
      this.setState({ admin: true });
    }
    if (user && user.userType === 0) {
      this.setState({ customer: true });
    }
  }

  render() {
    // const show = (this.state.menu) ? "show" : "" ;

    return (
      <>
        <section id="header">
          <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <div className="container">
              {/* <a className="navbar-brand text-black" onClick={() => changePage("/login")} >Bookstore</a> */}
              <a className="navbar-brand text-black">Bookstore</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="ti-align-justify navbar-toggler-icon"></span>
                {/* <span className="navbar-toggler-icon"></span> */}
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/books">
                      Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/booklist">
                      Book List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      My Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/order">
                      My Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      My Records
                    </Link>
                  </li>
                  {this.state.admin ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">
                        Admin
                      </Link>
                    </li>
                  ) : (
                    <div />
                  )}
                  {/* {this.state.admin ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/booklist">
                        AdminBookList
                      </Link>
                    </li>
                  ) : (
                    <div />
                  )}
                  {this.state.admin ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/manageusers">
                        ManageUsers
                      </Link>
                    </li>
                  ) : (
                    <div />
                  )}
                  {this.state.admin ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/userorderlist">
                        UserOrder
                      </Link>
                    </li>
                  ) : (
                    <div />
                  )}
                  {this.state.admin ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/bookstat">
                        BookStat
                      </Link>
                    </li>
                  ) : (
                    <div />
                  )}
                  {this.state.admin ? (
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/userstat">
                        UserStat
                      </Link>
                    </li>
                  ) : (
                    <div />
                  )} */}
                </ul>
              </div>
              <div className="ml-5">
                <Layout className="layout">
                  <Header>
                    <HeadInfo />
                  </Header>
                </Layout>
              </div>
            </div>
          </nav>
        </section>
      </>
    );
  }
}

export default Navbar;
