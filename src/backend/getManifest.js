import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const getManifest = () => {
  try {
    if (process.env.NODE_ENV === 'production') {
      return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
    }
  } catch (error) {
    console.log(error);
  }
};

export default getManifest;
