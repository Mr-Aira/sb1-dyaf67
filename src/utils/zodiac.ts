export const calculateTimeUntilBirthday = (birthdate: string): { [key: string]: number } => {
  const now = new Date();
  const birth = new Date(birthdate);
  const nextBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
  
  if (nextBirthday < now) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }

  const difference = nextBirthday.getTime() - now.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const getZodiacSign = (birthdate: string): string => {
  const date = new Date(birthdate);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius';
  return 'Pisces';
};

export const getBirthstone = (birthdate: string): string => {
  const month = new Date(birthdate).getMonth() + 1;
  const birthstones = [
    'Garnet', 'Amethyst', 'Aquamarine', 'Diamond', 'Emerald', 'Pearl',
    'Ruby', 'Peridot', 'Sapphire', 'Opal', 'Topaz', 'Turquoise'
  ];
  return birthstones[month - 1];
};

export const getBirthFlower = (birthdate: string): string => {
  const month = new Date(birthdate).getMonth() + 1;
  const birthFlowers = [
    'Carnation', 'Violet', 'Daffodil', 'Daisy', 'Lily of the Valley', 'Rose',
    'Larkspur', 'Gladiolus', 'Aster', 'Marigold', 'Chrysanthemum', 'Narcissus'
  ];
  return birthFlowers[month - 1];
};

export const getZodiacInfo = (zodiacSign: string): {
  element: string;
  quality: string;
  rulingPlanet: string;
  traits: string[];
} => {
  const zodiacInfo: { [key: string]: {
    element: string;
    quality: string;
    rulingPlanet: string;
    traits: string[];
  } } = {
    Aries: {
      element: 'Fire',
      quality: 'Cardinal',
      rulingPlanet: 'Mars',
      traits: ['Confident', 'Energetic', 'Courageous', 'Impulsive']
    },
    Taurus: {
      element: 'Earth',
      quality: 'Fixed',
      rulingPlanet: 'Venus',
      traits: ['Patient', 'Reliable', 'Determined', 'Practical']
    },
    Gemini: {
      element: 'Air',
      quality: 'Mutable',
      rulingPlanet: 'Mercury',
      traits: ['Adaptable', 'Communicative', 'Witty', 'Curious']
    },
    Cancer: {
      element: 'Water',
      quality: 'Cardinal',
      rulingPlanet: 'Moon',
      traits: ['Intuitive', 'Emotional', 'Protective', 'Imaginative']
    },
    Leo: {
      element: 'Fire',
      quality: 'Fixed',
      rulingPlanet: 'Sun',
      traits: ['Confident', 'Creative', 'Charismatic', 'Generous']
    },
    Virgo: {
      element: 'Earth',
      quality: 'Mutable',
      rulingPlanet: 'Mercury',
      traits: ['Analytical', 'Practical', 'Reliable', 'Modest']
    },
    Libra: {
      element: 'Air',
      quality: 'Cardinal',
      rulingPlanet: 'Venus',
      traits: ['Diplomatic', 'Idealistic', 'Cooperative', 'Gracious']
    },
    Scorpio: {
      element: 'Water',
      quality: 'Fixed',
      rulingPlanet: 'Pluto',
      traits: ['Passionate', 'Resourceful', 'Brave', 'Stubborn']
    },
    Sagittarius: {
      element: 'Fire',
      quality: 'Mutable',
      rulingPlanet: 'Jupiter',
      traits: ['Optimistic', 'Honest', 'Adventurous', 'Philosophical']
    },
    Capricorn: {
      element: 'Earth',
      quality: 'Cardinal',
      rulingPlanet: 'Saturn',
      traits: ['Responsible', 'Disciplined', 'Self-controlled', 'Ambitious']
    },
    Aquarius: {
      element: 'Air',
      quality: 'Fixed',
      rulingPlanet: 'Uranus',
      traits: ['Progressive', 'Original', 'Independent', 'Humanitarian']
    },
    Pisces: {
      element: 'Water',
      quality: 'Mutable',
      rulingPlanet: 'Neptune',
      traits: ['Intuitive', 'Compassionate', 'Artistic', 'Gentle']
    }
  };

  return zodiacInfo[zodiacSign];
};