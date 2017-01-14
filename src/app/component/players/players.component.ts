import {Component, OnInit} from "@angular/core";
import {ActivePlayerService} from "./../../service/active-player/active-player.service.ts";
import {PlayersService} from "./../../service/players/players.service.ts";
import {Player} from "../../type/player";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  player1: Player;
  player2: Player;

  activePlayerService: ActivePlayerService;
  playersService: PlayersService;

  constructor(playersService: PlayersService, activePlayerService: ActivePlayerService) {
    this.playersService = playersService;
    this.activePlayerService = activePlayerService;
  }

  ngOnInit(): void {
    this.player1 = this.playersService.getFirstPlayer();
    this.player2 = this.playersService.getSecondPlayer();
    this.activePlayerService.setActivePlayer(this.player1);
  }

}
