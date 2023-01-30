<script lang="ts">
interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
export default {
  data() {
    return {
      id: 0,
      message: "Todo App",
      text: "",
      todos: [] as Todo[],
    };
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      const truncate = (str, len) => {
        if (str.length > len) {
          if (len <= 3) {
            return str.slice(0, len - 3) + "...";
          } else {
            return str.slice(0, len) + "...";
          }
        } else {
          return str;
        }
      };
      if (this.text.trim()) {
        this.todos.push({
          todo: truncate(this.text, 7),
          isDone: false,
          id: this.id + 1,
        });
        this.id += 1;
        this.text = "";
        return;
      }
      alert("invalid input");
    },
    onUpdate(index, todo) {
      console.log({ index });
      this.todos = [
        ...this.todos.slice(0, index),
        { ...todo, isDone: !todo.isDone },
        ...this.todos.slice(index + 1),
      ];
    },
    onDelete(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
  },
};
</script>
<template>
  <div class="root">
    <div class="todo">
      <h1 class="title">{{ message }}</h1>
      <form class="formstyle">
        <input
          class="textInput"
          :value="text"
          @input="(event:EventTarget) => (text = event.target.value)"
        />
        <button class="submitBtn" type="submit" @click.exact="onClick">submit</button>
      </form>
      <div class="todoList" v-for="(item, index) in todos" :key="item.id">
        <li :class="{ todoText: !item.isDone, todoIsDone: item.isDone }">
          {{ item.id }}: {{ item.todo }}
        </li>
        <button class="doneButton" type="button" @click.exact="onUpdate(index, item)">
          {{ item.isDone ? "Undo" : "Done" }}
        </button>
        <button class="deleteBtn" type="button" @click.exact="onDelete(item.id)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) { */
.textInput {
  /* padding: 5px 10px; */
  padding: 8px;
  border: none;
  border: 0.1px solid #444;
  flex: 1;
  border-radius: 8px;
  outline: none;
  margin-right: 10px;
}
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
.todo {
  background-color: #fffbeb;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  height: 50vh;
  max-height: 50vh;
  width: 50vw;
  overflow-y: scroll;
  box-shadow: 8px 8px 8px 1px #999;
}

.todoList {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 10px;
  margin: 10px 0px;
}
.formstyle {
  flex: 1;
  display: flex;
}
.submitBtn {
  border: none;
  padding: 8px;
  background-color: #ffe7cc;

  border-radius: 8px;
}
.doneButton {
  border: none;
  padding: 8px;
  background-color: #ffe7cc;
  border-radius: 8px;
  color: #222;
}
.deleteBtn {
  border: none;
  padding: 8px;
  background-color: #f8cba6;
  border-radius: 8px;
  color: #333;
}
.title {
  color: chocolate;
  font-family: sans-serif;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
}
.todoText {
  display: flex;
  border-radius: 8px;
  flex: 1;
  padding: 3px 10px;
  max-width: 100px;
  background-color: #f8cba6;
  /* text-decoration: elipses; */
}
.todoIsDone {
  border-radius: 8px;
  background-color: #f8cba6;
  padding: 3px 10px;
  flex: 1;
  max-width: 100px;
  text-decoration: line-through;
}
/* } */
</style>
