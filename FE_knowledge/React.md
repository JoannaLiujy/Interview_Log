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
在开发过程中,我们需要保证某个元素的key 在其同级元素中具有唯一性,在ReactDiff算法中React会借助元素的Key值来判断该元素是新创建的还是被移动而来的元素,React会保存这个辅助状态,从而减少不必要的元素渲染.此外,React还需要借助Key值来判断元素与本地状态的关联关系,因此我们在开发中不可忽视Key值的使用.
