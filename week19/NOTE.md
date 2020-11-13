# 持续集成： 发布前检查

发布前的检查包括： eslint这种非严格性质的检查/单元测试/自动化ui测试等


### git-hook
在每次发布前， 为了确保提交的东西， 每次commit进入repo的代码符合规范，我们可以使用git-hook来定制我们每次commit的要求。例如在commit之前加入eslint检查。

git-hook应运而生。 我们在使用git的时候， git-hook其实已经存在于我们的repo中了。我们可以 .git/hooks/ 这个文件夹下找到一些栗子。其实就是一个可执行的shell脚本。在每次commit之前会执行一次。

shell脚本可以用任意的语言去编写。只需要我们在文件头去定义语言类型。下面这个栗子是指定node作为这个sh的执行语言。
```
#!/usr/local/bin/node
```
定义了执行语言后，在执行阶段， 该文件的代码会在对应的语言环境中执行。在这个栗子中，我们就可以使用js语法。

```js
#!/usr/local/bin/node
let process = require("process");
let child_process = require("child_process");
const { ESLint } = require('eslint');

// 包装回调风格的api， 使其使用promise风格， 便于阅读理解
function exec(name) {
	return new Promise(function(resolve) {
		child_process.exec(name, resolve);
	})
}

(async function main() {
	const eslint = new ESLint({fix: false});

	await exec("git stash push -k");
	const result = await eslint.lintFiles(["index.js"]);
	await exec("git stash pop");

	const formatter = await eslint.loadFormatter("stylish");
	const resultText = formatter.format(result);


	console.log(resultText);

	for(let r of result) {
		if(r.errorCount) {
			process.exitCode = 1;
		}
	}

})().catch(error => {
	process.exitCode = 1;
	console.error(error);
});
```


### eslint
eslint是代码风格检查工具。作用于保证我们避免一些低级的错误， 以及保证我们代码风格的统一。可以与git-hook结合成为保证repo commit质量的工具。但是防君子不防小人，可以通过修改git-hook来跳过eslint的强制检查。


### 现代化的浏览器集成测试
其实Puppeteer这一套现在应该不算最佳方案。如果要我从今天开始， 选择一个集成测试方案我会选择cypress. 可能也是因为我之前用的就是cypress. cypress是新一代的集成测试解决方案。当然他的作用不仅仅是集成测试。https://www.cypress.io/