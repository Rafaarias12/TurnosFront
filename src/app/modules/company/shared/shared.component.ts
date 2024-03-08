import { Component, PipeTransform } from '@angular/core';
import { Company } from 'src/app/models/icompany';
import { CompanyService } from 'src/app/services/company.service';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';
import { Form, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})

export class SharedComponent {
  public lst: Company[] = [];

  page = 1;
	pageSize = 4;
  collectionSize = this.lst.length;
  companies: Company[] = [];

  constructor(private service: CompanyService, private modalService: NgbModal, private forms:FormsModule) {
    
  }

  ngOnInit(){
    this.getCompany();
  }
  

  getCompany(){
    
    this.service.getCompany().subscribe(
      (r) =>{
        this.lst = r.data;
      },
      (error)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error
        });
      }
    )
  }

  put(id: string){
    const modal = this.modalService.open(EditComponent);
    modal.componentInstance.id = id;
  }  

}
