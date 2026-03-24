# Eva的月亮

一个纯前端、离线可用、适合孩子和家长一起使用的月经记录网页应用。

## 功能

- 生理期开始/结束日期记录
- 流量、疼痛、情绪、症状和备注记录
- 基于历史记录的平均周期与平均经期预测
- 易孕窗口与排卵日估算
- 月历视图展示已记录经期、预测经期和易孕期
- 周期波动与高频症状摘要
- 每日状态日报与最近 7 天状态观察
- 儿童友好的使用提醒与需要告诉家长的异常情况提示
- 手动覆盖预测参数
- 可安装为 PWA，并支持基础离线缓存
- JSON 导入、导出、示例数据填充、本地持久化

## 使用

直接在浏览器打开 [index.html](/mnt/c/test/mprecord/index.html) 即可。

如果你想本地启动一个静态服务，也可以在当前目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## GitHub Pages

仓库已经包含 GitHub Pages 自动部署工作流：
[deploy-pages.yml](/mnt/c/test/mprecord/.github/workflows/deploy-pages.yml)

首次启用时，在 GitHub 仓库页面执行：

1. 打开 `Settings > Pages`
2. 在 `Build and deployment` 里将 `Source` 设为 `GitHub Actions`
3. 推送到 `main` 分支后，等待 Actions 工作流完成部署

部署成功后，站点地址通常为：

`https://guoqingxiu-sudo.github.io/mprecord/`
