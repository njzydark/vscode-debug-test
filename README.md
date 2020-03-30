# vscode-debug-test

In `launch.json`, there has two config:

- chrome: use normal debug
- pwa-chrome: use vscode-js-debug

## Run

```bash
npm i
npm run dev
```

## Problems

When use chrome config to debug, every thing works right, bug when switch to pwa-chrome, there has two problems:

1. lanuch is slow
2. when I set breakpoint, it appear to wrong line

<img width="609" alt="wrong-line" src="https://user-images.githubusercontent.com/19601720/77877568-ae15bb80-7288-11ea-80d3-ee5eac7cd33d.png">
