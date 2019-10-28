import { Component, OnInit } from '@angular/core';
import { ContratSociete } from '../_modules/ContratSociete';
import { ContratsocieteService } from '../_services/contratsociete.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-memeber-list',
  templateUrl: './memeber-list.component.html',
  styleUrls: ['./memeber-list.component.css']
})
export class MemeberListComponent implements OnInit {
  contactsocietes: ContratSociete[];

  constructor(private contratsocieteService: ContratsocieteService, private alertify: AlertifyService ) { }

  ngOnInit() {
    this.loadContratSocietes();
  }

  loadContratSocietes() {
    this.contratsocieteService.getContratSocietes().subscribe((contratsocietes: ContratSociete[]) => {
      this.contactsocietes = contratsocietes;
    }, error => {
      this.alertify.error(error);
    });
  }

}
