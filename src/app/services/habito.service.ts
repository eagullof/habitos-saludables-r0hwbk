import { Injectable } from '@angular/core';
import { Habito } from '../models/habito.model';

@Injectable({
  providedIn: 'root'
})
export class HabitoService {
  private habitos: Habito[] = [
    new Habito('1', 'Beber 2L de agua al día', 'Mantente hidratado para mejorar tu salud y bienestar.', false),
    new Habito('2', 'Hacer ejercicio 30 min', 'Realiza actividad física para mantener un estilo de vida saludable.', false),
    new Habito('3', 'Leer 10 páginas al día', 'Mejora tu conocimiento y hábito de lectura con solo 10 páginas al día.', false),
    new Habito('4', 'Dormir 8 horas', 'Duerme lo suficiente para mejorar tu rendimiento y concentración.', false),
    new Habito('5', 'Meditar 10 minutos', 'Relájate y mejora tu bienestar mental con unos minutos de meditación.', false),
    new Habito('6', 'Reducir el uso del móvil', 'Evita distracciones innecesarias limitando el tiempo de pantalla.', false),
    new Habito('7', 'Tomar un desayuno saludable', 'Empieza el día con una comida balanceada y nutritiva.', false),
    new Habito('8', 'Escribir un diario', 'Anota tus pensamientos y reflexiones diarias para mejorar tu claridad mental.', false),
    new Habito('9', 'Practicar gratitud', 'Agradece tres cosas cada día para mejorar tu felicidad y bienestar.', false),
    new Habito('10', 'Aprender algo nuevo', 'Dedica tiempo a adquirir un nuevo conocimiento o habilidad.', false)
  ];

  constructor() { }

  agregarHabitos(usuario: Habito) {
    this.habitos.push(usuario);
  }

  obtenerHabitos(): Habito[] {
    return this.habitos;
  }
}
