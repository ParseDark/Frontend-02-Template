学习笔记

### 1. JS语言通识 | 泛用语言分类方法
语言分为形式和非形式语言。非形式语言较为自由：如中文/英文， 而形式语言比较严谨。

我们在讨论形式语言是在乔姆斯基体系下讨论， 根据乔姆斯基可将语言分为四类
1. 无限制文法
2. 上下文相关
3. 上下文无关
4. 正则文法

### 2. JS语言通识 | 什么是产生式

做个笔记， 艰难的看懂了。 首先说一下产生式的游戏规则：
1. 用尖括号括起来的名称来表示语法结构名
2. 语法结构分成基础结构和需要用其他语法结构定义的复合结构
3. 基础结构称终结符
4. 复合结构称非终结符
5. 引号和中间的字符表示终结符
6. 可以有括号
7. “*” 表示重复多次
8. ”|“ 表示或
9. “+” 表示至少一次

然后来看个例子：
```html
<MultiplicativeExpression>::=
    <Number> |
    <MultiplicativeExpression> "*" <Number> |
    <MultiplicativeExpression> "/" <Number> |

<AddtiveExpression>::=<MultiplicativeExpression> |
    <AddtiveExpression> "+" <MultiplicativeExpression>|
    <AddtiveExpression> "/" <MultiplicativeExpression>|
    
```
所以按照游戏规则来解读一下上面的四则运算的例子。

乘法表达式的定义：  
1. 一个乘法表达式可以是一个单独的number
2. 一个乘法表达式可以是一个乘法表达式**乘以**一个数字 （定义了乘法复合运算）
3. 一个乘法表达式可以是一个乘法表达书**除以**一个数字 （定义了乘法复合除法运算）

然后来看加法表达式的定义：
1. 一个加法表达式可以是一个乘法表达式（然后这里指向乘法表达式的定义）
2. 一个加法表达式可以是一个加法表达式**乘以**一个乘法表达式 （定义了加法复合运算）
3. 一个加法表达式可以是一个乘法表达式**除以**一个乘法表达式

所以我理解的bnf其实是对某个语言定义规则。 也就是常说的 if-then.

> 练习： 四则运算支持括号表达式

```html
<MultiplicativeExpression>::=
    <Number> |
    <MultiplicativeExpression> "*" <Number> |
    "("<MultiplicativeExpression> "*" <Number>")" |
    <MultiplicativeExpression> "/" <Number> |

<AddtiveExpression>::=<MultiplicativeExpression> |
    <AddtiveExpression> "+" <MultiplicativeExpression>|
    "("<AddtiveExpression> "+" <MultiplicativeExpression>")"|
    <AddtiveExpression> "/" <MultiplicativeExpression>|
    "("<AddtiveExpression> "/" <MultiplicativeExpression>")"|
```
### 3. JS语言通识 | 深入理解产生式

1. 无限制文法
```
    // whatever = whatever
    ?::=?
```
2. 上下文相关文法
```
    // 例如之前的正则表达式， 加法的定义基于乘法描述
    ?<A>?::=?<B>?
```
3. 上下文无关文法
```
    // 例如alias
    <A>::=?
```
4. 正则文法
```
    // 
    <A>::=<A>?
    <A>::=?<A> ×
```

quiz： js属于什么文法？
```js
{
    // 上下文相关
    get a {return 1;},
    get: 1,
}
// 计算方式为右结合， 而正则文法要求的是左结合并且以相同的非终结符， 所以该式不是正则文法
2 ** 1 ** 2;

```

### 4. JS语言通识 | 现代语言的分类
现代语言中存在一定的特例：
1. C++中，* 可能表示乘号或者指针，具体是哪个，取决于星号前
面的标识符是否被声明为类型
2. VB中，< 可能是小于号，也可能是XML直接量的开始，取决于
当前位置是否可以接受XML直接量
3. Python中，行首的tab符和空格会根据上一行的行首空白以一定
规则被处理成虚拟终结符indent或者dedent
4. JavaScript中，/ 可能是除号，也可能是正则表达式开头，处理
方式类似于VB，字符串模板中也需要特殊处理 }，还有自动插入
分号规则

在这些边际条件下， 编程语言的作者为了让语言的使用者更方便， 导致在在处理这种边际情况的时候更困难（相对于语言的作者来说）

语言的分类：
1. 按用途分
    * 数据描述语言: html/json/xml/sql/css
    * 编程语言: c/c++/java/c#/python/ruby/perl/lisp/haskell/javascript
2. 按表达方式分
    * 声明式: json/html/xml/sql/css/lisp/haskell
    * 命令式: c/c++/java/c#/python/ruby/perl/javascript

### 5. JS语言通识 | 编程语言的性质
1. 图灵完备性（所有可计算的问题都可用来描述）
    * 命令式-图灵机
        * goto
        * if and while
    * 声明式-图灵机
        * 递归

2. 动态与静态
    * 动态语言：
        * 在用户的设备/在线服务器上运行
        * 产品实际运行时
        * Runtime
        * 类型一直存在
    * 静态语言
        * 在程序员的设备上
        * 在产品开发阶段
        * CompileTime
        * 类型信息在编译完成后不存在

3. 类型系统（这是一个很大的领域， 可以学习ts得到更多的了解）
    1. 动态类型与静态类型系统： 动态类型是指， 在用户的系统上存在对应的类型信息， 与之相对的静态类型是，只在程序员编写代码的时候能够保留的类型信息， 在编译后已经不存在类型信息了。
    2. 强类型和弱类型： 指的是是否可以隐式的进行转化。
    3. 复合类型
        * 结构体： 例如go的struct
        * 函数签名: 例如(T1, T2) => T3
    4. 子类型
    5. 泛型
        * 逆变/协变
        ```
            * 凡是能用Array<Parent>的地方， 都能用Array<Child>
            * 凡是能用Function<Child>的地方， 都能用Function<Parent>
        ```


### 6. JS语言通识 | 一般命令式编程语言的设计方式
1. 一般的命令式语言包含以下结构
* Atom
    * Identifier: 变量定义
    * Literal: 直接量， 例如一个字符串， 一个数字， 一个字符等
* Expression
    * Atom
    * Operator
    * Punctuator
* Statement
    * Expression
    * Keyword
    * Punctuator
* Structure
    * Function
    * Class
    * Process
    * Namespace
    * ...
* Program
    * Program
    * Module
    * Package
    * Library

2. 讲解结构

语法 =>  语义 => 运行时

### 7. JS类型 | Number
1. Atom
    * Grammar
        * Literal
        * Variable
        * Keywords
        * Whitespace
        * Line Terminator(行终止符)
    * Runtime
        * Types
        * Execution Context

2. Types
    * Number
    * String
    * Boolean
    * Object
    * Null
    * Undefined
    * Symbol
    * BigInt

3. Number
    * 使用的精度是： IEEE 754 double float
        * Sign (1)： sign表示符号位， 也就是正负.
        * Exponent(11) 指数位
        * Fraction(52) 精度位

这里表示数字的方式是通过三个部分组成： sign + exponent + fraction

指数位数决定浮点数可表示的范围，有效位数决定了浮点数表示的精度。

这64位每个位就是一个bit, 0 or 1.

```
计算公式如下： 

X = -1^SX2^(E - B)X(1XF)
 
X是要表达的十进制浮点数。
S表示符号位， E表示指数位， F表示精度位
```

指数位置存在一个偏移。因为指数可以是负数。这十一位可以表示负数。所以大于1个1加上10个0的为正数。小于这个值为负数。（那这样岂不是这11位第一位是符号位， 1为正， 0为负）。

    
4. Number的语法
    * decimalLiteral
        * 0
        * 0.
        * .2
        * 1e3
    * binaryIntegerLiteral
        * 0b111
    * OctalIntegerLiteral
        * 0o10
    * HexIntegerLiteral
        * 0xFF
```js
// 附一个冷知识
0.toString(); // error
0. toString(); // 0
```

### 8. JS类型 | String
1. String
    * Character
    * Code Point: 指的就是数字， 例如ascii中97代表a.
    * Encoding

2. String 字符集
    * ASCII: 127个常用字符， 无法表示中文
    * Unicode：基于两个字节的编码： 0000-FFFF
    * UCS
    * GB
        * GB2312
        * GBK(GB13000)
        * GB18030
    * ISO-8859
    * BIG5

3. Encoding
    * UTF-8: 默认使用1个字节， 八位二进制数表示一个字符。
    * UTF-16: 默认使用两个字节， 两个八位二进制数表示一个字符。

4. homework: 写一个字符串转utf-8的函数， 返回一个buffer.
```js
function encodeUtf8Profile(text) {
    const code = encodeURIComponent(text);
    const bytes = [];
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return new Uint8Array(bytes);
}


function encodeUtf8WithTextEncoder(str) {
    var encoder = new TextEncoder('utf8');
    var bytes = encoder.encode(str);
    return bytes;
}

function encodeUTF8(str) {
    return window.TextEncoder ? encodeUtf8WithTextEncoder(str) : encodeUtf8Profile(str);
};

```

5. Grammar
    * 语法：
    ```js
        1. "abc"
        2. 'abc'
        3. `abc`
    ```

6. quiz: 匹配单引号双引号中的字符

```js
// 边界情况并没有考虑到
let s = `abc
"wo_()rd""'""
'k.{}\ey'
 `;
const regMatch = s => s.match(/(?<=").+(?<!")|(?<=').+(?<!')/ig);
regMatch(s);
```

7. String-Grammar-Template
```
`ab${x}abc${y}abc`

实际上在js引擎识别是如下三种token, 实际上${}外部的都被识别成string.
`ab${
    literal
}abc${
    literal
}abc`
```

### 9. JS类型 | 其他类型

1. Boolean - true/false

2. null/undefined
    * null: 值为空， null是关键字
    * undefined: 未初始化的意思， undefined 是全局变量 
    * void 0; 所以undefined 可以被赋值， 而void是关键字， 无论是啥， 最后这个表达式都会变成undefined;

### 10. JS对象 | 对象的基础知识
1. 什么是对象？
    * 描述世间万间。万物皆对象。
    * 如果有三个相同的鱼， 改变其中一个， 其他两个不改变，那么在计算机中， 就要放在三个不同的地方， 也就是有三份， 即任何一个对象都是唯一的， 这与它本身的状态无关。所以即使状态一样， 也并不相等。
    * 用状态描述对象。
    * 状态的改变即是行为。
2. 对象由什么组成
    * 状态
    * 定义
    * 行为
3. Object - Class
    * class是一种常见的描述对象的方式
    * 归类 与 分类是两个主要的流派
        * 对于归类而言， 多继承是非常自然的事情
        * 而采用分类思想的计算机语言则是单集成的结构。会存在一个基类object.

4. Object - Prototype
    * js是一种多范式的语言， 属于分类思想， 采用的是原型设计
    * 原型是一种更为接近人类原始认知的描述对象的方法。
    * 原型不试图做严谨的分类， 而是采用相似的方法去描述一个对象
    * 任何对象只需要描述自己与原型的区别即可

Quiz: 怎样用面向对象描述狗咬人？
```js
/* 
  这里说一下我的理解： 要用js描述狗咬人
  首先： 先定义狗咬人是一个action对应到class， 那就是触发了某个行为（在class层面就是调用了某个class实例上的方法）
  其次： 触发的行为主体是狗，所以狗的实例，触发了咬的方法，从而触发了人的变化（这个变化可以是实例上的某个属性改变， 比如健康值， hp）
  那么从数据流+以上的推论来翻译这个题目， 我认为是：
  一只狗的实例调用了自身咬这个方法， 方法参数为人的实例， 导致人的实例上状态的改变。
*/

// 定义狗的class, 狗有bite方法， 作用于人
class Dog {
  bite(person) {
    person.getHurt();
  }
}

// 定义人的class, 人会被咬.
class Person {
  constructor(HP){
    this.HP = HP
  }
  getHurt() {
    this.HP--;
    console.log("痛痛痛痛！");
    console.log("HP为", this.HP);
  }
}

const evilDog = new Dog();
const man = new Person(100);

evilDog.bite(man);
```

### 11. JS对象 | JS中的对象
1. Object in Javascript
    * 在javascript运行时， 原生对象的描述很简单， 只需要关注原型和属性两个部分。
        * object（property体现了状态和行为， 而计算机的内存地址描述了这个对象的唯一性）
            * property
                * 可以是属性
                * 可以是行为
            * [[Prototype]]
    * js包含了特殊的原型机制， 如果自身找不到， 就从原型上去找

2. Object 语法
    * [key]: value
        * key可以是 string or symbol
        * value
            * data property: 数据属性描述状态， 如果data里放函数，那么也可以描述行为
                * [[value]]
                * writeable
                * enumerable
                * configurable
            * accessor property: 数据属性描述行为
                * get
                * set
                * enumerable
                * configurable
    

3. 原型机制
    * 描述： 当访问属性的时候， 如果当前对象没有， 则沿着原型的对象找原型的对象， 而原型的原型上的原型还是可能存在原型， 此时会逐级网上，直到获得对应元素或者找到了null(顶级原型)
    * 优点： 顶级之下的原型只需要描述与原型链上的区别即可。

4. API & Grammar
    * {} . [] Object.defineProperty - 提供基本对象机制
    * Object - 基于原型的对象api
        * create
        * setPrototypeOf
        * getPrototypeOf
    * new/class/extends - 基于分类的方式去描述对象
    * new/function/prototype - 历史包袱， es6之前通过prototype模拟class的方式

5. 特殊对象object[[call]]
    * Function对象是一个带call方法的对象。
        * 凡是使用双括号定义的行为都是对象的内置行为。这意味着， 我们在js中无法使用任何方法访问到它。
        * 使用function关键字，箭头运算符或者Function构造器创造的对象， 会有[[call]]这个行为。意味着我们可以使用f()这样的语法把对象当作函数调用时， 则会访问到[[call]]这个行为。如果这个对象没有[[call]]则会产生错误。
    * array object[[length]]
        * 随着子元素的增加而自动增加
    * Object.prototype[[setPrototypeOf]]
    * host object： 宿主环境提供的
        * 浏览器中的window
        * node的global对象

    * Array：Array 的 length 属性根据最大的下标自动发生变化。
    * Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
    * String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
    * Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
    * 模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
    * 类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
    * bind 后的 function：跟原来的函数相关联。
