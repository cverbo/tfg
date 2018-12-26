import { environment } from '../environments/environment';

export const imgPath = 'https://image.tmdb.org/t/p/w500/';
export const defaultImgPath = 'assets/img/img-not-found.jpg';
export const baseUrl = '';
let uri: string;
if (!environment.production) {
    uri = 'http://localhost:4200/';
} else {
    uri = 'https://tfg-carlos-verbo.herokuapp.com/';
}
export const baseUri = uri;
