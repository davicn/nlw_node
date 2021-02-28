import { Response, Request } from 'express';
import { getCustomRepository } from 'typeorm';
import { Survey } from '../models/Survey';
import { SurveysRepository } from '../repositories/SurveysReposiory';

class SurveyController {

  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const surveysRepository = getCustomRepository(SurveysRepository);

    const survey = surveysRepository.create({ title, description });

    await surveysRepository.save(survey)

    return response.status(201).json(survey)
  }

}

export { SurveyController }