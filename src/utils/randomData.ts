import moment from "moment";

export class RandomData {
  
    static getTimeInSec(): string {
    return moment().format('DDMMYYYYHHmmss');
  }


    static generateRandomPassword(): string {
    return `Test@${Math.floor(Math.random() * 100000)}`;
  }

  
}   



  
