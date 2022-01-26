### 1.React 中 keys 的作用是什么？
Keys 是React在操作列表中元素被修改,添加,或者删除的辅助标识.
```
render(){
    return (
        <ul>
            {this.state.todoItems.map(({task,uid})=>{
                return <li key={uid}>{task}</li>
            })}
        </ul>
    )
}
```
