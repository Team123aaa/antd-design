import React,{Component} from 'react'
import { Form, Input, Card, Button, message, Checkbox} from 'antd'

const FormItem = Form.Item

class FormLogin extends Component {

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
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>

                <Card title="登录水平表单" style={{marginTop:20}}>
                    <Form style={{width:300}}>
                        <FormItem>
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
                        <FormItem>
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
                        <FormItem>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                    <Checkbox>记住密码</Checkbox>

                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                
            </div>
        )
    }
}

export default Form.create()(FormLogin)