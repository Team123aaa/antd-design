import React,{Component} from 'react'
import { Form, Input, Card, Button, message, Checkbox,Switch,Radio, Select,} from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option

class Reg extends Component {

    handleSubmit = () => {
        const formValue =  this.props.form.getFieldsValue();
        this.props.form.validateFields( (err,values) => {
            if(!err){
                console.log(values)
                message.success(`${formValue.username},恭喜你，成功进入react高级教程,密码是${formValue.password}`)
            }
        })
    }

    render () {
        const { getFieldDecorator } = this.props.form
        const FormItemLayout = {
            labelCol : {
                xs:24,
                sm:4,
                
            },
            wrapperCol : {
                xs:24,
                sm:12,
                
            }
        }

        const offsetLayout = {
            wrapperCol : {
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form>
                        <FormItem label="用户名" {...FormItemLayout}>
                            {
                                getFieldDecorator('username',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required: true,
                                            message:'用户名不能为空',
                                        },
                                        {
                                            min:5,max:10,
                                            message:'长度不符合'
                                        },
                                        {
                                            pattern:/^\w+$/g,
                                            message:'数字或者字母组成'
                                        }
                                    ],
                                    
                                })(
                                    <Input placeholder="请输入用户名" />
                                )
                            }
                            
                        </FormItem>
                        <FormItem label="密码" {...FormItemLayout}>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'',
                                    rules:[{
                                        required:true,
                                        message:'密码不能为空'
                                    }]
                                })(
                                    <Input type="password" placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...FormItemLayout}>
                            {
                                getFieldDecorator('isMrried',{
                                    initialValue:true,
                                    valuePropName:'checked'
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...FormItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1',
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...FormItemLayout}>
                            {
                                getFieldDecorator('status',{
                                    initialValue:'1',
                                })(
                                    <Select>
                                        <Option value="1">咸鱼一条</Option>
                                        <Option value="2">北大才子</Option>
                                        <Option value="3">IT</Option>
                                        <Option value="4">诗人</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...FormItemLayout}>
                            {
                                getFieldDecorator('hobby',{
                                    initialValue:['1','2'],
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">足球</Option>
                                        <Option value="2">篮球</Option>
                                        <Option value="3">IT</Option>
                                        <Option value="4">诗人</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                    <Checkbox>记住密码</Checkbox>

                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(Reg)