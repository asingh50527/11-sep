import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TestComponent } from './components/test/test.component';
import { AlertComponent } from './components/alert/alert.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavComponent } from './components/nav/nav.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopoverComponent } from './components/popover/popover.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { RatingComponent } from './components/rating/rating.component';
import { ScrollspyComponent } from './components/scrollspy/scrollspy.component';
import { TableComponent } from './components/table/table.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { SeptNewComponent } from './components/sept-new/sept-new.component';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdmissionComponent,
    HomeComponent,
    AboutComponent,
    TestComponent,
    AlertComponent,
    CarouselComponent,
    CollapseComponent,
    DropdownComponent,
    ModalComponent,
    NavComponent,
    OffcanvasComponent,
    PaginationComponent,
    PopoverComponent,
    GalleryComponent,
    ProgressbarComponent,
    RatingComponent,
    ScrollspyComponent,
    TableComponent,
    TooltipComponent,
    SeptNewComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TimepickerComponent,
    DatepickerComponent,
    TypeaheadComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
