import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

    private theme: string = this.all[0];

    get class(): string {
        return this.theme;
    }

    set(theme: string) {
        this.theme = theme;
    }

    get all(): string[] {
        return ['default', 'dark'];
    }
}
