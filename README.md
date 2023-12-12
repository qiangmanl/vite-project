#### env
```bash
npm -v
#8.19.2
node -v
#v16.18.0
npm -i 

```


```bash
#remove all css in root  
#install ?
npm create vite@5.0.6 # or 5.0.0?
# type project name when install
cd vite-project
npm install
npm run dev
```


#### useEffect

##### useEffect 接受两个参数：一个是要执行的函数，另一个是一个数组，表示什么情况下执行该函数。

```js
// 空数组表示只在组件挂载和卸载时执行
 useEffect(() => {
    // 这里的代码将在组件渲染完成后执行
    if (document.body) {
      document.body.classList.add('authentication-bg', 'position-relative');
    }

    // 返回一个清理函数，在组件卸载时执行
    return () => {
      // 移除之前添加的类名
      if (document.body) {
        document.body.classList.remove('authentication-bg', 'position-relative');
      }
    };
}, []); // 空数组表示只在组件挂载和卸载时执行
```

##### return 一个清理函数，在组件卸载时执行
```js
useEffect(() => {
    if (document.body) {
        document.body.classList.add('authentication-bg', 'position-relative')
    }

    return () => {
        if (document.body) {
            document.body.classList.remove('authentication-bg', 'position-relative')
        }
    }
}, [])
```
