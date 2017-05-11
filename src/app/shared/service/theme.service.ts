import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

    private themes: string[] = [
        'default',
        'dark'
    ];
    private theme: string = this.themes[0];

    get class(): string {
        return this.theme;
    }

    set(theme: string) {
        this.theme = theme;
    }

    get all(): string[] {
        return this.themes;
    }
}
