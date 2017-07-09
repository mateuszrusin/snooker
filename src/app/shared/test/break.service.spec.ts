import { TestBed, inject } from '@angular/core/testing';
import {BreakService} from "../service/break.service";
import {Ball} from "../type/ball";


describe('BreakService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BreakService]
        });
    });

    it('should be created', inject([BreakService], (service: BreakService) => {
        expect(service).toBeTruthy();
    }));

    it('should return empty Break', inject([BreakService], (service: BreakService) => {
        expect(service.get().total).toEqual(0);
        expect(service.get().order).toEqual([]);
    }));

    it('should return ', inject([BreakService], (service: BreakService) => {

        let ball: Ball = {
            points: 5,
            color: 'red'
        }

        service.update(ball);

        expect(service.get().total).toEqual(5);
        expect(service.get().order).toEqual([ball]);
    }));
});