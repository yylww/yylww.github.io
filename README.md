# 常用操作

### 创建一篇新文章

```
hexo new [layout] title
```
layout默认为post  

<table>
  <thead>
    <tr>
      <th>布局</th>
      <th>路径</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>post</td>
      <td>source/_posts</td>
    </tr>
    <tr>
      <td>page</td>
      <td>source</td>
    </tr>
    <tr>
      <td>draft</td>
      <td>source/_draft</td>
    </tr>
  </tbody>
</table>

### 服务器
```
hexo server -p 5000
```

### 生成文件
```
hexo generate
```

### 完成后部署
```
hexo generate --deploy
hexo deploy --generate
```
两个命令作用是相同的，也可简写：
```
hexo g -d
hexo d -g
```
