//定义模块
//部分依赖lodash中的join方法
import { join } from 'lodash'
import message from './text.txt'
import './css.css';
import './Scss.css';
import img from './img/7.png';

//导出一个默认模块
export default function bar() {
    function component() {
        //创建div元素
        var element = document.createElement('div');
        //使用join连接数组将结果写入元素的html中
        element.innerHTML = join(['成功', 'webpack', message], ' ');
        //返回
        return element;
    }

    function imgs() {
        var img1 = document.createElement("img");
        img1.src = img;
        return img1;
    }
    
    document.body.appendChild(component());
    document.body.appendChild(imgs());
}