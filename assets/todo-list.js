'use strict';

const Todo = {
  props: [ 'content', 'deadline' ,'id'],
  template: 
  /*html*/
  `<li>{{ deadline }} : {{ content }}
  <button class="button" @click="ondelete" >削除</button>
  </li>`,
  methods: {// Controller に 1 つの関数を用意
    async ondelete() {
      console.log("削除")
      /*
      // content という "一時" 変数を用意し、内容を保存
      const content = this.content;
      
      // deadline という "一時" 変数を用意し、日付と時刻を元に締め切り (YYYY/MM/DD hh:mm) を作成し、保存
      const deadline = `${this.date.replace(/-/g, '/')} ${this.time}`;
    */
      // API にリクエストを行う
      // 登録処理 ⇒ /todolist かつ POST
      await fetch(`${API_ROOT}/todo/${this.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      location.reload();
    },
  },
};

const TodoList = {
  components: {
    Todo,
  },

  data() {
    return {
      todos: [],
    };
  },

  async mounted() {
    const response = await fetch(`${API_ROOT}/todolist`);
    const todos = await response.json();

    this.todos = todos;
  },

  template: 
  /*html*/
  `<ul>
    <todo
      v-for="(todo, index) in todos"
      :content="todo.content"
      :deadline="todo.deadline"
      :id="index" 
    ></todo>
  </ul>
  `,
};
