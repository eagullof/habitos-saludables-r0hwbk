import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Habito } from '../models/habito.model';

@Injectable({
  providedIn: 'root'
})
export class HabitoService {
  private habitos: Habito[] = [];

  constructor() {
    this.cargarHabitos();
  }

  async agregarHabito(habito: Habito) {
    this.habitos.push(habito);
    await this.guardarHabitos();
  }

  async agregar10Habitos() {
    this.habitos.push(new Habito(Date.now().toString() + 1, 'Beber 2L de agua al día', 'Mantente hidratado para mejorar tu salud y bienestar.', false),
      new Habito(Date.now().toString() + 2, 'Hacer ejercicio 30 min', 'Realiza actividad física para mantener un estilo de vida saludable.', false),
      new Habito(Date.now().toString() + 3, 'Leer 10 páginas al día', 'Mejora tu conocimiento y hábito de lectura con solo 10 páginas al día.', false),
      new Habito(Date.now().toString() + 4, 'Dormir 8 horas', 'Duerme lo suficiente para mejorar tu rendimiento y concentración.', false),
      new Habito(Date.now().toString() + 5, 'Meditar 10 minutos', 'Relájate y mejora tu bienestar mental con unos minutos de meditación.', false),
      new Habito(Date.now().toString() + 6, 'Reducir el uso del móvil', 'Evita distracciones innecesarias limitando el tiempo de pantalla.', false),
      new Habito(Date.now().toString() + 7, 'Tomar un desayuno saludable', 'Empieza el día con una comida balanceada y nutritiva.', false),
      new Habito(Date.now().toString() + 8, 'Escribir un diario', 'Anota tus pensamientos y reflexiones diarias para mejorar tu claridad mental.', false),
      new Habito(Date.now().toString() + 9, 'Practicar gratitud', 'Agradece tres cosas cada día para mejorar tu felicidad y bienestar.', false),
      new Habito(Date.now().toString() + 10, 'Aprender algo nuevo', 'Dedica tiempo a adquirir un nuevo conocimiento o habilidad.', false));
    await this.guardarHabitos();
  }

  async marcarCompletado(id: string) {
    const habito = this.habitos.find(h => h.id === id); // Buscar el hábito
    if (habito) {
      habito.completado = !habito.completado; // ✅ Alternar entre true/false
      await this.guardarHabitos(); // ✅ Guardar cambios
    }
  }

  async obtenerHabitos(): Promise<Habito[]> {
    if (this.habitos.length === 0) {
      await this.cargarHabitos();
    }
    return this.habitos;
  }

  async eliminarHabito(id: string) {
    this.habitos = this.habitos.filter(h => h.id !== id);
    await this.guardarHabitos();
  }

  private async guardarHabitos() {
    try {
      await Preferences.set({
        key: 'habitos',
        value: JSON.stringify(this.habitos)
      });
      console.log('📦 Hábitos guardados:', this.habitos);
    } catch (error) {
      console.error('❌ Error guardando hábitos:', error);
    }
  }  

  async cargarHabitos() {
    const { value } = await Preferences.get({ key: 'habitos' });
  
    console.log('1️⃣ Datos crudos de Preferences:', value); // Verificar datos almacenados
  
    if (value) {
      const parsedData = JSON.parse(value);
      
      this.habitos = parsedData.map((h: any) => new Habito(
        h.id,
        h.titulo,
        h.descripcion,
        h.completado,
        h.imagen
      ));
  
      console.log('2️⃣ Hábitos convertidos:', this.habitos);
    }
  }  

}
