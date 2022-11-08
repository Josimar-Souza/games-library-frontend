import joi from 'joi';

const gameValidationSchema = joi.object({
  title: joi.string().min(3).max(35),
  releaseDate: joi.string().regex(/^[0-9]{2}(\/)[0-9]{2}(\/)[0-9]{4}$/),
  sinopse: joi.string().min(10).max(100),
  developer: joi.string().min(5),
  publisher: joi.string().min(5),
  platform: joi.string().min(5),
  trailerUrl: joi.string().uri(),
  metascore: joi.number(),
  usersocre: joi.number(),
  image: joi.string().uri(),
  backdropImage: joi.string().uri(),
  category: joi.string().min(3).max(20),
});

const gameValidation = (entries) => {
  const results = [];

  Object.entries(entries).forEach(([name, value]) => {
    const result = gameValidationSchema.validate({ [name]: value });

    if ('error' in result) {
      results.push({ error: true, color: 'red' });
    } else {
      results.push({ error: false, color: 'green' });
    }
  });

  return results;
};

export default gameValidation;
