export default class ChantbotJSON {
  constructor(){
      this.n = 1;
  }

  mulAns(q){
      const question = {
          id: `${this.n}`,
          message: `${q.message}`,
          trigger: `${this.n + 1}`
      }
      
      const answer = {}
      q.opt.map(tri => {
              tri["trigger"] = `${this.n + 2}`;
          })
      answer["id"] = `${this.n + 1}`;
      answer["options"] = q.opt;

      this.n = this.n + 2
  
      return [question, answer]
  }

  singleAns(q, isLast = false){
      const question = {
          id: `${this.n}`,
          message:`${q.message}`,
          trigger: `${this.n + 1}`,
      }
      
      const answer = {}

      if (isLast){
          answer["id"] = `${this.n + 1}`;
          answer["user"] = true;
          answer["end"] = true;
      }else{
          answer["id"] = `${this.n + 1}`;
          answer["user"] = true;
          answer["trigger"] = `${this.n + 2}`;
      }

      this.n = this.n + 2

      return [question, answer]
  }
}