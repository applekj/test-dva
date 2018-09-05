import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
    const columns = [
        {
            title: '产品名',
            dataIndex: 'name',
        },
        {
            title:'操作',
            render:(text,record) => {
                return(
                    <Popconfirm title="删除" onConfirm={() => onDelete(record.id)}>
                        <Button>删除</Button>
                    </Popconfirm>
                )
            }
        }
    ];

    return (
        <Table
            rowKey={record => record.name}
            dataSource={products}
            columns={columns}
        />
    )
}


export default ProductList;
