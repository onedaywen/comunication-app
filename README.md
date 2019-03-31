>+ 1. position只支持absolute和relative属性
>+ 2. View组件不支持lineHeight, fontSize等文本类css属性， text不支持border属性
>+ 3. 文本省略号采用numberOfLine属性设置
>+ 4. 布局方案采用flex， 默认下就是flex，不支持inline-block, block, float等布局。默认的flexDirecion: column, 多个盒子一行显示，可以设置 flexDirection: 'row'