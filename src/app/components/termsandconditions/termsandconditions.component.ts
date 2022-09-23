import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PDFSource, PdfViewerComponent } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-termsandconditions',
  templateUrl: './termsandconditions.component.html',
  styleUrls: ['./termsandconditions.component.scss']
})
export class TermsandconditionsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TermsandconditionsComponent>) { }
  pdfSrc: string | PDFSource | ArrayBuffer = './assets/pdf-test.pdf';
  ngOnInit(): void {
    this.loadPdf();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  get zoom(){
    return window.screen.width <= 768 ? 2  : 1 
  }

  loadPdf() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/assets/test.pdf', true);
    xhr.responseType = 'blob';
    xhr.onload = (e: any) => {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: 'application/pdf' });
        this.pdfSrc = URL.createObjectURL(blob);
      }
    };
    xhr.send();
  }

  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;

  search(stringToSearch: string) {
    this.pdfComponent.pdfFindController.executeCommand('find', {
      caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
    });
  }
}
