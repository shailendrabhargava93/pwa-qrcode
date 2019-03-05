import { Component, OnInit } from '@angular/core';
import { ApiService } from  './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements  OnInit {
  
	title = 'Generate QR Code';

	errormsg = null;
	text = null;
	imagePath = null;

	constructor(public apiService: ApiService){}

	ngOnInit(){}

	generate(){
		//console.log(this.text);
		if(this.text == null){
			this.errormsg = "Please enter valid input";
		}else{
			this.errormsg = "";
			this.apiService.getqrcode(this.text).subscribe(data=>{
				//console.log(data)
				this.imagePath = data.image
			},(err)=>{
				console.log(err);
			});
		}
	}

	downloadFile() {
		const link = document.createElement('a');
		link.setAttribute('visibility','hidden');
		link.href = "data:image/png;base64,"+ this.imagePath;
		link.download = 'QR_CODE_'+ this.text +'.png';
		link.click();
	}
}
