import {Injectable} from "@angular/core";
import {Foul} from "../type/foul";
import {FOULS} from "../data/fouls";

@Injectable()
export class FoulService {

    private foul: Foul = {
        value: 0,
        color: null
    };

    get(): Foul {
        return this.foul;
    }

    set(foul: Foul): void {
        this.foul.value = foul.value || 0;
        this.foul.color = FOULS[foul.value] || null;
    }

    reset(): void {
        this.set({value: 0});
    }

    fine(value: number): void {
        this.set({value: value});
    }
}
