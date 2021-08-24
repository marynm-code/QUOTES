import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastseen'
})
export class CompeteDatePipe implements PipeTransform {

  transform(value: any) {
    var seen: string = "";
    let today: any = new Date().valueOf(); //current time
    let sec = (today - value.getTime()) / 1000; //time passed in second
    if (sec < 60) {
      seen = `${Math.floor(sec)} seconds ago `; //  seen in seconds
    } else if (sec < 3600) {
      seen = `${Math.floor(sec / 60)} minutes ago`; // seen in minutes
    } else if (sec < 86400) {
      seen = `${Math.floor(sec / 3600)} hours ago`; // seen in hours
    } else seen = `${Math.floor(sec / 86400)} days ago`; // seen in days
    return seen;
  };
};
