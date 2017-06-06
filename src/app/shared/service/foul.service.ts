import { Injectable } from '@angular/core';
import {Foul} from "../type/foul";

@Injectable()
export class FoulService {

    static readonly COLORS = {
        4: 'brown',
        5: 'blue',
        6: 'pink',
        7: 'black'
    };

    private foul: Foul = {
        value: 0,
        color: null
    };

    get(): Foul {
        return this.foul;
    }

    set(foul: Foul): void {
        this.foul.value = foul.value || 0;
        this.foul.color = FoulService.COLORS[foul.value] || null;
    }

    reset(): void {
        this.foul.value = 0;
        this.foul.color = null;
    }

    fine(value: number): void {
        this.foul.value = value;
        this.foul.color = FoulService.COLORS[value];
    }


}
