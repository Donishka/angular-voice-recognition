import { Injectable } from '@angular/core';

declare var SpeechRecognition: any;
declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  public recognition =  new  webkitSpeechRecognition() || new SpeechRecognition();
  public text;

  constructor() { }

  initi() {
    console.log("start inin")
    // const { webkitSpeechRecognition }: IWindow = <IWindow>(<unknown>window);

    //  this.recognition = new webkitSpeechRecognition();

     this.recognition.interimResults = true;

     this.recognition.lang = 'en-US';

     this.recognition.addEventListener('result', (e) => {
      // console.log(e.results);
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
        this.text = transcript;
      console.log(transcript);
    });

    this.recognition.addEventListener('end', (condition) => {
      // if (this.isStoppedSpeechRecog) {
      //   this.recognition.stop();
      //   console.log("End Speech Recognition by listner")
      // } else {
      //   this.tempSpeeach = this.tempSpeeach + ' ' + this.temp2Speeach;
      //   this.temp2Speeach = '';
      //   this.endTempRec = true;
      //   this.recognition.start();
      // }
      this.recognition.start();
    });

    
  }
}
