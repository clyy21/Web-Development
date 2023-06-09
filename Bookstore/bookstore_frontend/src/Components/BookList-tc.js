import React from 'react';
import {List} from 'antd'
// import {Book} from './Book'
import {getBooks} from "../services/bookService";
import { Booktc } from './Book-tc';


export class BookListtc extends React.Component{

    constructor(props) {
        super(props);
        this.state = {books:[]};
    }

    componentDidMount() {

        const callback =  (data) => {
           this.setState({books:data});
           console.log("check",data)
           console.log("checkbooks",{books:data})
        };

        getBooks({"search":null}, callback);
    }

    render() {
        return (
            <List
                grid={{gutter: 10, column: 4}}
                dataSource={this.state.books}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 16,
                }}

                renderItem={item => (
                    <List.Item>
                        <Booktc info={item} />
                    </List.Item>
                )}
            />
        );
    }

}