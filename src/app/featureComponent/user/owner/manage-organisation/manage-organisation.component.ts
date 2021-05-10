import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganisationService } from '../../../../services/Organisation/organisation.service'
import * as $ from 'jquery';


@Component({
  selector: 'app-manage-organisation',
  templateUrl: './manage-organisation.component.html',
  styleUrls: ['./manage-organisation.component.css']
})
export class ManageOrganisationComponent implements OnInit {

  constructor(private fb: FormBuilder, private orgServe: OrganisationService) { }
  fileToUpload: Array<File> = [];
  orgForm: FormGroup;
  id: any;
  upload:boolean=false;
  showButton: boolean = true;
  orgDetail:any;
  logo:File=null;
  imgsrc;
  ngOnInit(): void {

    $(function () {
      $("#datepicker").datepicker();
    });

    this.orgServe.myOrganisation().subscribe(res => {
      if (res.count > 0) {
        this.imgsrc=res.result[0].logo;
        this.id = res.result[0]._id;
        this.orgForm = this.fb.group({
          organisationname: [res.result[0].organisationname, Validators.required],
          ceoname: [res.result[0].ceoname, Validators.required],
          foundationdate: [res.result[0].foundationdate, Validators.required],
          email: [res.result[0].email, Validators.required],
          type: [res.result[0].slogan, Validators.required],
          slogan: [res.result[0].slogan, Validators.required],
          teamsize: [res.result[0].teamsize, Validators.required],
          eventsconducted: [res.result[0].eventsconducted, Validators.required],
          aboutus: [res.result[0].aboutus, Validators.required],
          link: [res.result[0].link, Validators.required]
        });
        this.showButton = false;
        console.log(this.orgForm.value);
      } else {
        this.showButton = true;
      }
    })

  }

  onSubmit() {
    if (this.showButton) {
      const formData: any = new FormData();
      const files: Array<File> = this.fileToUpload;

      for (let i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i]['name']);
      }
      console.log(this.orgForm.value);

      formData.append('organisationname', this.orgForm.value.organisationname);
      formData.append('ceoname', this.orgForm.value.ceoname)
      formData.append('foundationdate', this.orgForm.value.foundationdate)
      formData.append('email', this.orgForm.value.email)
      formData.append('type', this.orgForm.value.type)
      formData.append('slogan', this.orgForm.value.slogan)
      formData.append('teamsize', this.orgForm.value.teamsize)
      formData.append('eventsconducted', this.orgForm.value.eventsconducted)
      formData.append('aboutus', this.orgForm.value.aboutus)
      formData.append('link', this.orgForm.value.link);
      this.orgServe.addOrganisation(formData).subscribe(res => {
        if (res.status == 500) {
          alert("Internal Server Error while adding details")
        }
        else {
          alert("Successfully Added");
        }
      }, err => {
        console.log(err);
      })
    } else {
      this.orgServe.updateOrganisation(this.id, this.orgForm.value).subscribe(res => {
        if (res.status == 200) {
          alert("Updated successfully")
        } else {
          alert("Failed to update");
        }
      });
    }

  }

uploadPhotos(fileInput: any)
{
  console.log(fileInput);
  this.fileToUpload = <Array<File>>fileInput.target.files;
}

orgLogo(files:FileList)
{
  this.logo=files.item(0);
  this.upload=true;
}

sendLogo()
{
  const formdata=new FormData();
  formdata.append("logo", this.logo, this.logo.name);
  this.orgServe.addLogo(this.id,formdata).subscribe(res=>{
    console.log(res);
    alert("Updates successfully")
  });
}

}
