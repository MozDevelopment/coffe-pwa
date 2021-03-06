import { PlaceLocation } from './PlaceLocation';
import { TastingRating } from './TastingRating';

export class Coffe {
  //properties
  _id: string;
  // name: string;
  // place: string;
  //location: PlaceLocation
  type: string;
  rating: number;
  notes: string;
  tastingRating: TastingRating;

  constructor(public name: string = "",
              public place: string = "",
              public location: PlaceLocation = null) {

              this.location = new PlaceLocation();
              this.tastingRating = new TastingRating();

  }

}
