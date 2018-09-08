import React, { Component } from 'react';
import { Table, Popconfirm, Button } from 'antd';
import withHeader from './common/publicHeader';

// const ProductList = ({ onDelete, products }) => {
//     const columns = [
//         {
//             title: '产品名',
//             dataIndex: 'name',
//         },
//         {
//             title: '操作',
//             render: (text, record) => {
//                 return (
//                     <Popconfirm title="删除" onConfirm={() => onDelete(record.id)}>
//                         <Button>删除</Button>
//                     </Popconfirm>
//                 )
//             }
//         }
//     ];

//     return (
//         <Table
//             rowKey={record => record.name}
//             dataSource={products}
//             columns={columns}
//         />
//     );
// }

// export default ProductList;

@withHeader
export default class ProductList extends Component {
    columns = [
        {
            title: '产品名',
            dataIndex: 'name',
        },
        {
            title: '操作',
            render: (text, record) => {
                return (
                    <Popconfirm title="删除" onConfirm={() => this.props.onDelete(record.id)}>
                        <Button>删除</Button>
                    </Popconfirm>
                )
            }
        }
    ];

    render() {
        console.log(this.props,'result')
        return (
            <Table
                rowKey={record => record.name}
                columns={this.columns}
                dataSource={this.props.products}
            />
        )
    }
}
