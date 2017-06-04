import { Injectable } from '@angular/core';
import {Foul} from "../type/foul";

@Injectable()
export class FoulService {

    private foul: Foul = {
        value: 0
    };

    get(): Foul {
        return this.foul;
    }

    set(foul: number): void {
        this.foul.value = foul;
    }

    reset(): void {
        this.foul = {
            value: 0
        };
    }
}
