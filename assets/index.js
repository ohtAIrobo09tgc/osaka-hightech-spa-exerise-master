'use strict';

const today = new Date();

const calendar = [
  
];
for(let i = 0;i<31;i++) {
  const day = new Date();
  day.setDate(today.getDate()+i)

  const month = `${day.getMonth()+1}`.padStart(2, '0');
  const date = `${day.getDate()}`.padStart(2, '0');

  calendar.push(`${month}/${date}`);
};



  

const day_of_week = [];
const day_of_week_kanji =["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"];
for(let j = 0;j<7;j++){
  const day = new Date();
  day.setDate(today.getDate()+j)
  const youbi = day_of_week_kanji[day.getDay()]; 
  day_of_week.push(youbi);

};




// HTML の先頭で index.js を読み込んでいるので、
// Vue.js の初期化タイミングをページの準備が完了したとき (≒ DOMContentLoaded) にあわせる
document.addEventListener('DOMContentLoaded', () => {
  Vue.createApp({
    data() {
      return {
        calendar,
        day_of_week,
      };
    },
    components: {
      TodoList,
      TodoInput,
      Week,
      Youbi,
    },
  }).mount('#app');
});
