/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    if (this.resources.hasOwnProperty(resource)) {  
      // Если ресурс существует, добавляем к нему количество  
      this.resources[resource] += amount;  
      console.log(`${amount} ${resource} added. New amount: ${this.resources[resource]}`);  
    } else {  
      // Если ресурс не существует, выводим сообщение об ошибке  
      console.log("Invalid resource");  
    }  
  }  
}
