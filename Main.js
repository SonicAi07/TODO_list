import React, { useState } from 'react'
import Styles from './Main.module.css'

const todoItems = [
    {
        name: "learn html",
        id: 1,
        isComp: true,
    },
    {
        name: "learn CSS",
        id: 2,
        isComp: false,
    },
    {
        name: "learn JS",
        id: 3,
        isComp: true,
    },
    {
        name: "learn React",
        id: 4,
        isComp: false,
    }
]

export default function Main() {

    const [todoItemValues, setTodoItemValues] = useState(todoItems)

    return (
        <div className={Styles.master}>
            <div>
                <div className={Styles.todo}>
                    <TODOListItems todoItemsCurrentValue={todoItemValues} />
                    <TODOListCompItems todoCompItems={todoItemValues} />
                </div>
            </div>
        </div>
    )
}
function TODOListItems(props) {
    return <div className={Styles.section1}>
        <div className={Styles.sec1_title}>
            <span>TODO-List</span>
        </div>
        <div className={Styles.add_item_search}>
            <input type="text" required placeholder="Write TO-Dos" />
            <button className={Styles.btn_add}>Add</button>
        </div>
        <div className={Styles.all_items}>
            {
                props.todoItemsCurrentValue === 0 ?

                    <div style={{ color: "red", fontSize: "22px" }}>   "No items are there. Add the todo items" </div>
                    :
                    < ul >
                        {
                            props.todoItemsCurrentValue.filter(todoItem => {
                                return !todoItem.isComp
                            }).map((data, index) => {
                                return <TodoItems todoName={data.name} key={"TODO-item" + index} />
                            })
                        }
                    </ul>}
        </div>
    </div >
}

function TodoItems(props) {
    return <li>
        <span>{props.todoName}</span>
        <div className={Styles.btns}>
            <button>Edit</button>
            <button>Complete</button>
            <button>Delete</button>
        </div>
    </li>
}

function TODOListCompItems(props) {
    return <div className={Styles.section2}>
        <div className={Styles.sec2_title}>
            <span>Completed List</span>
        </div>
        <div className={Styles.cmp_items}>
            {
                props.todoCompItems === 0 ?
                    <div style={{ color: "red", fontSize: "22px" }}>Items are not yet completed !!</div>
                    :
                    <ul>
                        {
                            props.todoCompItems.filter((item) => {
                                return item.isComp
                            }).map((data, index) => {
                                return < TodoItemComp todoCompItem={data.name} key={"Completed-todo-item-" + index} />
                            }
                            )}
                    </ul>
            }
        </div>
    </div>
}

function TodoItemComp(props) {
    return <li>
        <span>{props.todoCompItem}</span>
        <div className={Styles.cmp_btns}>
            <button>InComplete</button>
            <button>Delete</button>
        </div>
    </li>
}



