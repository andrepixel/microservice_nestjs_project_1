import { MovieDTO } from './movie.dto';

export class SectionDTO {
  codeSection: string;
  quantityOfArmChair: number;
  movie: MovieDTO;
  dateOfSection: string;
  localOfSection: string;
  state: string;
  isPreLaunch: boolean;
  typeSection: string;

  constructor({
    codeSection,
    quantityOfArmChair,
    movie,
    dateOfSection,
    localOfSection,
    state,
    isPreLaunch,
    typeSection,
  }: {
    codeSection: string;
    quantityOfArmChair: number;
    movie: MovieDTO;
    dateOfSection: string;
    localOfSection: string;
    state: string;
    isPreLaunch: boolean;
    typeSection: string;
  }) {
    this.codeSection = codeSection;
    this.quantityOfArmChair = quantityOfArmChair;
    this.movie = movie;
    this.dateOfSection = dateOfSection;
    this.localOfSection = localOfSection;
    this.state = state;
    this.isPreLaunch = isPreLaunch;
    this.typeSection = typeSection;
  }
}
