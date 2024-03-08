import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Company } from 'src/app/models/icompany';
import { CompanyService } from 'src/app/services/company.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  id: string = "";
  lst: Company[] = [];
  public formEdit= new FormGroup({
    id: new FormControl(''),
    nit: new FormControl(''),
    name: new FormControl(''),
    active: new FormControl('')
  });

  public nit: string | undefined;
  public name: string | undefined;
  public active: number | undefined;

  constructor(public activeModal: NgbActiveModal, private service: CompanyService,
    private formBuilder: FormBuilder) {
    
      // this.formEdit = new FormGroup({
      //   id: new FormControl(''),
      //   nit: new FormControl(''),
      //   name: new FormControl(''),
      //   active: new FormControl('')
      // })
      
  }

  ngOnInit(){
    
    this.companyCharge();

  }

  companyCharge(){
    
    this.service.getCompanyNit(this.id).subscribe(
      (x) => {
        this.lst = x.data;
        console.log(this.lst);
        const company = this.lst[0];
        // this.formEdit.setValue({
        //   id : company.id,
        //   name: company.name,
        //   nit: company.nit,
        //   active: company.active.toString()
        // });
        this.name = company.name;
        this.nit = company.nit;
        this.active = company.active;
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

  onSave(){

  }
}
