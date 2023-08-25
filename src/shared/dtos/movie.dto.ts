export class MovieDTO {
  name: string;
  author: string;
  year: string;
  company: string;
  resume: string;
  movieCast: string[];
  typeOfMovie: string[];
  classificationMovie: string;

  constructor({
    name,
    author,
    year,
    company,
    resume,
    movieCast,
    typeOfMovie,
    classificationMovie,
  }: {
    name: string;
    author: string;
    year: string;
    company: string;
    resume: string;
    movieCast: string[];
    typeOfMovie: string[];
    classificationMovie: string;
  }) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.company = company;
    this.resume = resume;
    this.movieCast = movieCast;
    this.typeOfMovie = typeOfMovie;
    this.classificationMovie = classificationMovie;
  }
}
