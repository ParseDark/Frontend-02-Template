var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
    this.info = {};
  }

  async initPackage() {
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "your project name",
        default: this.appname,
      },
    ]);
    this.info.name = answers.name;

    const pkgJson = {
      name: answers.name,
      version: "1.0.0",
      description: "",
      main: "index.js",
      scripts: {
        build: "webpack",
        test: "mocha --require @babel/register",
        coverage: "nyc mocha"
      },
      author: "",
      license: "ISC",
      devDependencies: {},
      dependencies: {},
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
  }

  install() {
    this.npmInstall(["vue"], { "save-dev": false });
    this.npmInstall(
      [
        "webpack",
        "webpack-cli",
        "vue-loader",
        "vue-style-loader",
        "css-loader",
        "vue-template-compiler",
        "copy-webpack-plugin",
      ],
      {
        "save-dev": true,
      }
    );

    // test tool dependencies
    this.npmInstall(["mocha"], { "save-dev": true });
    this.npmInstall(["nyc"], { "save-dev": true });

    // pase dependencies
    this.npmInstall(["@babel/core", "@babel/preset-env", "babel-loader", "@babel/register", "@istanbuljs/nyc-config-babel", "babel-plugin-istanbul"], { "save-dev": true });

  }

  templateInject() {
    // cp html template file
    this.fs.copyTpl(
      this.templatePath("index.html"),
      this.destinationPath("src/index.html"),
      { title: this.info.name }
    );

    // cp main.js template file
    this.fs.copyTpl(
      this.templatePath("main.js"),
      this.destinationPath("src/main.js")
    );

    // cp vue template file
    this.fs.copyTpl(
      this.templatePath("HelloWorld.vue"),
      this.destinationPath("src/HelloWorld.vue")
    );

    // cp webpack config template file
    this.fs.copyTpl(
      this.templatePath("webpack.config.js"),
      this.destinationPath("webpack.config.js")
    );

    // cp babel config
    this.fs.copyTpl(
        this.templatePath(".babelrc"),
        this.destinationPath(".babelrc")
    );

    // cp nyc config
    this.fs.copyTpl(
        this.templatePath(".nycrc"),
        this.destinationPath(".nycrc")
    );

    // cp test sample
    this.fs.copyTpl(
        this.templatePath("sample-test.js"),
        this.destinationPath("test/sample-test.js")
    );
  }
};
