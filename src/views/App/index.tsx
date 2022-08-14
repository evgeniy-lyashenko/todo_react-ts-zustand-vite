import React from "react";

import { useToDoStore } from "../../data/stores/useToDoStore";
import { InputPlus } from "../components/inputPlus";
import { InputTask } from "../components/inputTask";

import styles from './index.module.scss'

export const App: React.FC = () => {
    const [tasks, createTask, updateTask, removeTask] = useToDoStore(state => [state.tasks, state.createTask, state.updateTask, state.removeTask]);
    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>ToDo App</h1>
            <section className={styles.articleSection}>
                <InputPlus
                    onAdd={(title) => {
                        if (title) {
                            createTask(title)
                        }
                    }}
                />
            </section>
            <section className={styles.articleSection}>
                {!tasks.length && (
                    <p className={styles.articleText}>There are no tasks</p>
                )}
                {tasks.map((task) => (
                    <InputTask
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        onDone={removeTask}
                        onEdited={updateTask}
                        onRemoved={removeTask}
                    />
                ))}
            </section>
        </article>
    )
}