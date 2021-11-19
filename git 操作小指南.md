### 如何添加文件到git仓库

```
git init 
// 初始化仓库
git add .
// 让git跟踪所有文件的变化
git commit -m "一个字符串"
// 提交文件的变化 到缓冲区
git remote add origin git@github.com:zhanglinghua123/SoftwareManager.git（你平时下载git clone 用的链接）
// 添加远端仓库
git push origin master
// 由于git init的默认分支为master 所以我们只需要git push master即可
```

### 本项目介绍

- 分支介绍

  master用作项目前端代码的管理

  ```
git checkout master or secondMaster(切换分支)
  // 切换分支后 你的工作目录下的文件 就会变化为对应分支的文件内容
  git fetch origin 
  // 获取远端代码 ，其会存储在origin/master 中
  git merge origin/master
  // 合并远端代码分支的变化，到对应目录下面(你checkout 的哪个分支，哪个分支内容就得到了更新)
  notice:
  git reset 可以用来回滚commit and merge操作
  //
  git reflog 与 git reset 
  // 用来进行回滚git merge的操作
  ```
  
  