let ranke = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];

class Warrior {
  constructor() {
    this.experience1 = 100; // Начальный опыт 100
    this.levele = 1; // Начальный уровень 1
    this.ranke = 0; // Начальное звание "Pushover"
    this.trainingLog = []; // Журнал тренировок
  }
  
  battle(enemy){
      if (enemy < 1 || enemy > 100){
          return "Invalid level";
      }
      this.ranke = Math.floor(this.levele/10)
      let levelDifference = this.levele - enemy
      if (levelDifference === 0){
          if (this.experience1 + 10 > 10000){
              this.experience1 = 10000
              this.levele = Math.floor(this.experience1/100)
              this.ranke = Math.floor(this.levele/10)
              return "A good fight";
          }
          this.experience1 += 10;
          this.levele = Math.floor(this.experience1/100)
          this.ranke = Math.floor(this.levele/10)
          return "A good fight";
      } else if (levelDifference === 1){
          if (this.experience1 + 10 > 10000){
              this.experience1 = 10000;
              this.levele = Math.floor(this.experience1/100)
              this.ranke = Math.floor(this.levele/10)
              return "A good fight";
          }
          this.experience1 += 5;
          this.levele = Math.floor(this.experience1/100)
          this.ranke = Math.floor(this.levele/10)
          return "A good fight";
      } else if (levelDifference >= 2){
          this.experience1 += 0;
          this.levele = Math.floor(this.experience1/100)
          this.ranke = Math.floor(this.levele/10)
          return "Easy fight";
      } else if(enemy - this.levele >= 5 && this.ranke !== Math.floor(enemy/10)){
          return "You've been defeated"
      }else if (levelDifference < 0){
          let domination = enemy - this.levele;
          if(this.experience1 + (20*domination*domination)>10000){
              this.experience1 = 10000
              this.levele = Math.floor(this.experience1/100)
              this.ranke = Math.floor(this.levele/10)
              return "An intense fight";
          }
          this.experience1 += (20*domination*domination);
          this.levele = Math.floor(this.experience1/100)
          this.ranke = Math.floor(this.levele/10)
          return "An intense fight";
      }
  }
  
  training(trainingData) {
    const [description, experiencePoints, minLevel] = trainingData;

    if (this.levele < minLevel) {
      return "Not strong enough";
    }
    if ((this.levele + experiencePoints)>10000){
        this.experience1 = 10000;
        this.trainingLog.push(description);
        this.levele = 100;
        this.ranke = Math.floor(this.levele/10);
        return description;
    }
    this.experience1 += experiencePoints;
    this.trainingLog.push(description);
    this.levele = Math.floor(this.experience1/100);
    this.ranke = Math.floor(this.levele/10);
    return description;
  }
  achievements(){
    return this.trainingLog;
  }

  level() {
    return this.levele;
  }

  rank() {
    return ranke[this.ranke];
  }
  
  experience(){
      return this.experience1;
  }
  
}