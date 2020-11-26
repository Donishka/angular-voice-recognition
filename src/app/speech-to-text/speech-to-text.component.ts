import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoiceRecognitionService } from '../service/voice-recognition.service'

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss'],
  providers: [VoiceRecognitionService]
})
export class SpeechToTextComponent implements OnInit {

  text: string;
  
  private router: Router;
  constructor(
    public service : VoiceRecognitionService
  ) { 
    this.service.init()
   }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
    setTimeout(() => {
      window.location.href = "https://www.google.fr/search?q=" + this.service.text;
      this.service.stop()
    }, 3000 );
    
  }

  stopService(){
    this.service.stop()
  }

}
