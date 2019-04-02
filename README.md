## 常用组件
>+ 1. position只支持absolute和relative属性
>+ 2. View组件不支持lineHeight, fontSize等文本类css属性， text不支持border属性
>+ 3. 文本省略号采用numberOfLine属性设置
>+ 4. 布局方案采用flex， 默认下就是flex，不支持inline-block, block, float等布局。默认的flexDirecion: column, 多个盒子一行显示，可以设置 flexDirection: 'row'
>+ 5. 如何console.log
>+ 6. textInput边框只支持 borderWidth borderColor,不支持单独一条边的设置
>+ 7. button组件样式仅支持设置背景颜色 color，不支持设置width、height、边框、背景、font-size等。可以通过外层包裹一层盒子
>+ 8. iOS支持Text嵌套View，Android不支持。Text支持onPress，View不支持onPress。需要采用包装。
>+ 9. textInput在安卓端默认有undefinline, 需要重置掉 underlineColorAndroid="transparent"
>+ 10. Button不能设置高度、宽度。样式只能设定简单的背景颜色, font-size。需要用TouchableOpacity组件包装

## 路由学习路线
>+ 如何定义路由、字路由
>+ 如何获取当前路由
>+ 如何跳转
>+ 如何传参

## webview与h5如何传参


## iOS和Android如何做适配

## 如何进行调试