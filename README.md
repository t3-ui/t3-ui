# t3-ui

## Project setup   安装依赖
```
npm install
```

### Compiles and hot-reloads for development  运行项目
```
npm run serve
```

### Compiles and minifies for production   打包项目
```
npm run build-bundle 
```

### 提交到库之前需要安装npm 源管理工具
```
npm install -g nrm
```

### 添加t3-npm源
```
 nrm add t3 http://172.16.3.243/repository/t3-npm/
```
### 添加用户
```
npm adduser
Username: wangzhenyu
Password: xxxx
Email: (this IS public) wangzhenyu@ccclubs.com
Logged in as wangzenyu on http://172.16.3.243/repository/nodejs/.
```

### 切换npm源到t3-push
```
nrm use push
```

### push项目到npm 库
```
npm run publish
```

