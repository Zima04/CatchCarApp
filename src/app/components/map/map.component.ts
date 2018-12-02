/// <reference types="@types/googlemaps" />

import {Component, Input, ViewChild, NgZone, OnInit, ElementRef} from '@angular/core';
import {MapsAPILoader, AgmMap} from '@agm/core';
import {FormControl} from '@angular/forms';
import {MapService} from '../../services/map-service.service';
import {Subscription} from 'rxjs';


declare let google: any;

@Component({
  selector: 'map-app',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public origin: any;
  public destination: any;
  public driverOrigin: any;
  public driverDestination: any;

  public latitude: number;
  public longitude: number;
  public latitudeStart: number;
  public longitudeStart: number;
  public latitudeFinish: number;
  public longitudeFinish: number;

  public searchControl: FormControl;
  public zoom: number;

  @Input('startPosition') public searchStartPositionElementRef: ElementRef;
  @Input('finishPosition') public searchFinishPositionElementRef: ElementRef;

  subscription: Subscription;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private mapService: MapService,
  ) {
  }

  ngOnInit() {
    this.subscription = this.mapService.getState().subscribe(destination => {
      this.driverOrigin = destination.start;
      this.driverDestination = destination.finish;
    });
    this.zoom = 30;
    this.latitude = 53.9045398;
    this.longitude = 27.5615244;
    this.latitudeStart = 0;
    this.longitudeStart = 0;
    this.latitudeFinish = 0;
    this.longitudeFinish = 0;
    this.searchControl = new FormControl();
    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {  
      const startPosition = new google.maps.places.Autocomplete(this.searchStartPositionElementRef.nativeElement, {
        types: ['address']
      });
      startPosition.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = startPosition.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.origin = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
          this.latitudeStart = place.geometry.location.lat();
          this.longitudeStart = place.geometry.location.lng();
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
      const finishPosition = new google.maps.places.Autocomplete(this.searchFinishPositionElementRef.nativeElement, {
        types: ['address']
      });
      finishPosition.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = finishPosition.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.destination = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
          this.latitudeFinish = place.geometry.location.lat();
          this.longitudeFinish = place.geometry.location.lng();
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          // console.log(this.getDistanceFromLatLonInKm(this.latitudeFinish, this.longitudeFinish, this.driverDestination.lat, this.driverDestination.lng));
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  public getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c * 1000; // Distance in m
    return d;
  }

  public deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
}
