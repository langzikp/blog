# Git提交规范
> 参考Angular的提交规范

Angular提交规范:  
```txt
<type>(<scope>): <subject> #header
// 空一行
<body>
// 空一行
<footer> 
```

## 格式讲解
### Header
Header部分只有一行，包括三个字段：type（必需）、scope（可选）和subject（必需）。
例如:
```txt
feat:新增财务报表
```

### type
用于说明本次commit的类别，只允许使用下面7个标识  
- `feat`：新功能（feature）
- `fix`：修补bug
- `docs`：文档（documentation）
- `style`： 格式（不影响代码运行的变动）
- `refactor`：重构（即不是新增功能，也不是修改bug的代码变动）
- `test`：增加测试
- `chore`：构建过程或辅助工具的变动

### scope  
`scope`用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。  

### subject 
`subject`是 commit 目的的简短描述，不超过50个字符。


## Body
Body 部分是对本次 commit 的详细描述，可以分成多行。
```txt
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```


## Footer  
Footer 部分只用于两种情况。
### 不兼容变动  
如果当前代码与上一个版本不兼容，则 Footer 部分以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。 
```txt
BREAKING CHANGE: isolate scope bindings definition has changed.

To migrate the code follow the example below:

Before:

scope: {
  myAttr: 'attribute',
}

After:

scope: {
  myAttr: '@',
}

The removed `inject` wasn't generaly useful for directives so there should be no code using it.
``` 
### 关闭 Issue 
如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issue 。
```txt
Closes #234
``` 
也可以一次关闭多个 issue 。
```txt
Closes #123, #245, #992
``` 