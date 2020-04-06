export const questions = [
  {
    id: '1',
    message:'Do you have symptoms of flu or Corona Virus? ',
    trigger: '2'
  },
  {
    id: '2',
    options: [
        { value: 'yes', label: 'yes', trigger: '3' },
        { value: 'no', label: 'no', trigger: '3' },
      ],
  },
  {
    id: '3',
    message:'Are you diagnosed with Corona Virus?',
    trigger: '4'
  },
{
id: '4',
options: [
    { value: 'yes', label: 'yes', trigger: '5' },
    { value: 'no', label: 'no', trigger: '5' },
  ],
},
{
    id: '5',
    message:'What is the highest temparature that you had last week?',
    trigger: '6'
  },
{
id: '6',
options: [
    { value: 'dont know', label: 'לא מדדתי', trigger: '7' },
    { value: '37.9', label: '37.9', trigger: '7' },
    { value: '38.5', label: '38.5', trigger: '7' },
    { value: 'over 38.5', label: 'מעל 38.5', trigger: '7' },
  ],
},
{
    id: '7',
    message:'What food do you eat?',
    trigger: '8'
  },
{
id: '8',
options: [
    { value: 'all', label: 'Any food', trigger: '9' },
    { value: 'vegan', label: 'vegan', trigger: '9' },
    { value: 'veggie', label: 'veggie', trigger: '9' },
    { value: 'non-gloten', label: 'glutten free', trigger: '9' },
  ],
},
{
    id: '9',
    message:'Which activities have you done last week? ',
    trigger: '10'
  },
{
id: '10',
options: [
    { value: 'sport', label: 'sports', trigger: '11' },
    { value: 'yoga', label: 'yoga', trigger: '11' },
    { value: 'meditation', label: 'meditation', trigger: '11' },
    { value: 'prayer', label: 'prayer', trigger: '11' },
    { value: 'few', label: '2+ of the above', trigger: '11' },
    { value: 'none', label: 'none of the above', trigger: '11' },
  ],
},
{
    id: '11',
    message:'How much hours have you slept in average last week?',
    trigger: '12'
  },
{
id: '12',
options: [
    { value: 'lessThan6', label: 'less than 6', trigger: '13' },
    { value: '6to7', label: '6-7', trigger: '13' },
    { value: '7-8', label: '7-8', trigger: '13' },
    { value: 'over8', label: '8+', trigger: '13' },
  ],
},
{
    id: '13',
    message:'What is your mood level?',
    trigger: '14'
},
{
id: '14',
options: [
    { value: 'verygood', label: 'very good', trigger: '15' },
    { value: 'good', label: 'good', trigger: '15' },
    { value: 'medium', label: 'average', trigger: '15' },
    { value: 'low', label: 'low', trigger: '15' },
    { value: 'verylow', label: 'very low', trigger: '15' },
  ],
},
{
    id: '15',
    message:'Height in cm',
    trigger: '16'
},
{
    id: '16',
    user: true,
    trigger: '17',
  },
  {
    id: '17',
    message:'Weight in kg',
    trigger: '18'
},
  {
    id: '18',
    user: true,
    end: true,
  },
]