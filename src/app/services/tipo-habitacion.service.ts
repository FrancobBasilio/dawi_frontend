import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../enviroments/environment.prod';
import { TipoHabitacionResponse } from '../interfaces';

const baseUrl = `${environment.apiUrl}/api/public/habitaciones`;

@Injectable({
  providedIn: 'root',
})
export class TipoHabitacionService {
  private http = inject(HttpClient);

  getAll(): Observable<TipoHabitacionResponse[]> {
    return this.http.get<TipoHabitacionResponse[]>(`${baseUrl}/tipos`).pipe(
      catchError((error: any) => {
        console.error('Error al obtener tipos de habitación:', error);
        return throwError(() => error);
      })
    );
  }
}
