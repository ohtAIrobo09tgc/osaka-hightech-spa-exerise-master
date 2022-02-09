const Week = {
  template: 
  /*html*/
  `<div class="wrapper">
    <div class="box">
      <div>{{syu}}週目</div>
    </div>
    <div class="hako" v-for="day in days">
      <div class=days>{{day}}</div>
      <div class=Tododay v-for="(todo,index) in searchTodoByDay(day)" @click="onDelete(index)">{{todo.content}}
      </div>
      
      
    </div>
  </div>`,

  props: [ 'days', 'syu' ],

  data() {
    return {
      todos: [],
    };
  },

  methods: {// Controller に 1 つの関数を用意
    searchTodoByDay(day) {
      const year = new Date().getFullYear();

      const todosByDay = this.todos.filter(todo => {
        const [ deadline, _ ] = todo.deadline.split(' ');

        return deadline === `${year}/${day}`;
      });

      return todosByDay
    },
    async onDelete(index) {
      console.log("削除")
      /*
      // content という "一時" 変数を用意し、内容を保存
      const content = this.content;
      
      // deadline という "一時" 変数を用意し、日付と時刻を元に締め切り (YYYY/MM/DD hh:mm) を作成し、保存
      const deadline = `${this.date.replace(/-/g, '/')} ${this.time}`;
    */
      // API にリクエストを行う
      // 登録処理 ⇒ /todolist かつ POST
      await fetch(`${API_ROOT}/todo/${index}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      location.reload();
    },},
  

  async mounted() {
    const response = await fetch(`${API_ROOT}/todolist`);
    const todos = await response.json();

    this.todos = todos;
  },
  
};


const Youbi = {
  /* html */
  template:`<div class="wrapper">
    <div class="boxes">曜日</div>
    <div class="hakos" v-for="day in weeks">{{day}}</div>
  </div>`,

  props:['weeks'],

};