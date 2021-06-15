import React, { Component } from "react";
import { View, Text, Image, StatusBar } from "react-native"
import { Input } from "react-native-elements/dist/input/Input";
import { pxToDp } from "../../../utils/stylesKits";
import validator from "../../../utils/validator"

import request from "../../../utils/request";
import { ACCOUNT_LOGIN } from "../../../utils/pathMap";

export default class index extends Component {
    state = {
        //手机号
        phoneNumber: "13963906447",
        //手机号是否合法   
        phoneValid: false,
        // 是否显示登录页面 
        showLogin: true,
        // 验证码输入框的值
        vcodeTxt: "",
        // 倒计时按钮的文本
        btnText: "重新获取",
        // 是否在倒计时中
        isCountDowning:false
        
    } 
    //手机号输入
    phoneNumberChangeText = (phoneNumber) => { 
        this.setState({ phoneNumber })
    } 
    //手机号完成
    phoneNumberSubmitEditing = async () => {
        /**
         * 1.手机号校验  正则
         *   1.不通过 提示
         * 2.将手机号发给后台，获取验证码
         * 3.将登录页面切换成 填写验证码界面
         * 
         */
        const { phoneNumber } = this.state
        const phoneValid = validator.validatePhone(phoneNumber)
        if (!phoneValid) {
            this.setState({ phoneValid })
            return
        }
        const res = await request.post(ACCOUNT_LOGIN, { phone: phoneNumber });
        if(res.code ==="10000"){
            this.setState({showLogin:false})
        }
    }
    //渲染登录页面
    renderLogin = ()=>{ 
        const { phoneNumber, phoneValid } = this.state;
        return <View style={{ padding: pxToDp(20) }}>
                    {/* 标题 */}
                    <View>
                        <Text style={{ fontSize: pxToDp(25), color: "#888", fontWeight: "bold" }}>手机号登陆注册</Text>
                    </View>
                    {/* 输入框 */}
                    <Input placeholder="请输入手机号" onSubmitEditing={this.phoneNumberSubmitEditing} value={phoneNumber} errorMessage={!phoneValid ? "" : "请输入正确的手机号"} onChangeText={this.phoneNumberChangeText} maxLength={11} inputStyle={{ color: "#333" }} keyboardType="phone-pad" leftIcon={{ type: "font-awesome", name: "phone", color: "#ccc", size: pxToDp(20) }}></Input>
                </View>
    }
    //渲染验证码页面
    renderVcode = ()=>{
        const { phoneNumber, phoneValid } = this.state;
        return <View style={{ padding: pxToDp(20) }}>
                    {/* 标题 */}    
                    <View>
                        <Text style={{ fontSize: pxToDp(25), color: "#888", fontWeight: "bold" }}>输入6位验证码</Text>
                    </View>
                    <View style={{ marginTop: pxToDp(10) }}><Text style={{ color: "#888" }}>已发到:+86 {phoneNumber}</Text></View>
                   
                </View>
    } 
    render() {
        const { phoneNumber, phoneValid,showLogin } = this.state
        console.log(phoneValid);
        return (
            <View>
                {/* 状态栏 */}
                <StatusBar translucent={true} />
                {/* 背景图 */}
                <Image source={require("./../../../img/login.jpeg")} style={{ width: "100%", height: pxToDp(300) }}></Image>
                {/* 内容 */}
                {showLogin?this.renderLogin():this.renderVcode()}
            </View>
        )
    }
}