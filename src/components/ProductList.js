import React, { Component } from 'react';
import { Table, Popconfirm, Button, Select, Form } from 'antd';
import withHeader from './common/publicHeader';
const Option = Select.Option;
const FormItem = Form.Item;

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

@Form.create()
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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps, 'hello')
    }

    render() {
        console.log(this.props, 'result')
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    label='表格数据:'
                >
                    {getFieldDecorator('tableData', {
                        rules: [{ required: false, message: 'Please input your username!' }],
                    })(
                        <Table
                            rowKey={record => record.name}
                            columns={this.columns}
                            dataSource={this.props.products}
                        />
                    )}
                </FormItem>
                <FormItem
                    label='选择框:'
                >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        initialValue: 'lucy'
                    })(
                        <Select style={{ width: 120 }} onChange={value => { console.log(value) }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>Disabled</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    )}
                </FormItem>
            </Form >
        )
    }
}
