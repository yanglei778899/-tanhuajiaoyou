## 1.登陆页面

### 页面跳转和转场动画

```js
//安装依赖
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view  @react-navigation/stack @react-navigation/native

//测试代码
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

### 新建页面

在根目录下新建src/pages/account/login/index.js页面

### 提取nav路由文件

```javascript
//在src文件夹下新建nav.js
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./pages/account/login";


const Stack = createStackNavigator();

function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
             
        </NavigationContainer>
    );
}

export default Nav;

//入口文件App.js就只渲染路由文件
import React, { Component } from 'react'
import { Button, View, Text } from 'react-native';
import Nav from './src/nav'


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Nav></Nav>
      </View>
    )
  }
}

```

### 登录业顶部背景图

```jsx
import React, { Component } from 'react'
import { View, Text, Image, StatusBar } from "react-native"

export default class index extends Component {
    render() {
        return (
            <View>
             {/* 把图片拉到最顶部 */}
                <StatusBar backgroundColor="transparent" translucent={true}>
                </StatusBar>
                <Image style={{ width: "100%", height: 200 }} source={require("./../../../res/profileBackground.jpg")}></Image>

            </View>
        )
    }
}

```

### 将px转换为dp

```
//在src文件夹下新建utils文件夹
//新建styleKits.js文件

//设计稿的宽度 /元素的宽度 = 手机屏幕/手机中元素的宽度
//手机中元素的宽度 = 手机屏幕*元素的宽度/设计稿的宽度

import { Dimensions } from "react-native"

/**
 * 屏幕宽度
 */
export const screenWidth = Dimensions.get("window").width;
/**
 * 屏幕高度
 */
export const screenHeight = Dimensions.get("window").height;

/**
 * 将像素转为dp
 * @param {*} elePx 元素宽度或者高度 单位PX
 * @returns 
 */
export const pxToDp = (elePx) => screenWidth * elePx / 375;



```

### 引入react-native-element

```javascript
//安装依赖
yarn add react-native-elements react-native-vector-icons
//编辑 `android/app/build.gradle` 文件 添加下面代码
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"


```



### 去掉下面的黄色提示框

```javascript
//在入口文件  ，index.js里面添写

console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];

console.disableYellowBox = true // 关闭全部黄色警告
```

### 渐变按钮

#### 安装依赖

```javascript
yarn add react-native-linear-gradient
```

