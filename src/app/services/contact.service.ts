import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { ContactMessage } from '@app/models/contact-message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly formspreeUrl = 'https://formspree.io/f/xkoypebj';

  constructor(private http: HttpClient) {}

  async saveMessage(messageData: ContactMessage) {
    try {
      const body = {
        name: messageData.user_name,
        email: messageData.email,
        message: messageData.message
      };

      const response = await firstValueFrom(this.http.post(this.formspreeUrl, body));
      
      console.log('Mensaje enviado con éxito a Formspree. (service.ts)');
      return response;

    } catch (error) {
      console.error('Error enviando a Formspree (service.ts): ', error);
      throw error; 
    }
  }
}
