'use strict';

const TodoInput = {
  data() {
    // Controller に 3 つの変数を用意
    return {
      content: '',
      date: '',
      time: '',
    };
  },

  methods: {
    // Controller に 1 つの関数を用意
    async onRegister() {
      // content という "一時" 変数を用意し、内容を保存
      const content = this.content;
      
      // deadline という "一時" 変数を用意し、日付と時刻を元に締め切り (YYYY/MM/DD hh:mm) を作成し、保存
      const deadline = `${this.date.replace(/-/g, '/')} ${this.time}`;
     
      // API にリクエストを行う
      // 登録処理 ⇒ /todolist かつ POST
      await fetch(`${API_ROOT}/todolist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // content のデータと、deadline のデータを所定の形式でサーバに送信
        body: JSON.stringify({
          content,
          deadline,
        }),
      });
      location.reload();
    },
  },


  template: 
  /*html*/
  `<div>
    <!--
    v-model に各 Controller 上の変数と、入力内容同期する
    (content, date, time の 3 つ分)
    -->
    <span class="Contents">内容: <input v-model="content" type="text" class=></span>
    <span class="deadline">締め切り: <input v-model="date" type="date"><input v-model="time" type="time"></span>
    <!--
    @click により、クリックしたときの処理が登録できる
    ここでは、事前に Controller に作成した onRegister 関数を呼び出している
    -->
    <button class="button" @click="onRegister">登録
    </button>
  </div>
  `,
};
