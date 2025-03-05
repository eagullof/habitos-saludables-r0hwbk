import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HabitoService } from './services/habito.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private translateService: TranslateService, private habitoService: HabitoService) {
    this.translateService.setDefaultLang('es');
    this.translateService.addLangs(['en', 'es']);
  }

  async ngOnInit() {
    console.log("🚀 Cargando hábitos al iniciar la app...");
    await this.habitoService.cargarHabitos(); // 🔹 Carga los hábitos al iniciar la app
    console
    .log("✅ Hábitos cargados:", this.habitoService.obtenerHabitos());
  }
}
