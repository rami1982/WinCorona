export const questions = [
    {
        id: '1',
        message:'האם יש לך תסמינים של שפעת/וירוס/קורונה ',
        trigger: '2'
      },
  {
    id: '2',
    options: [
        { value: 'yes', label: 'כן', trigger: '3' },
        { value: 'no', label: 'לא', trigger: '3' },
      ],
  },
  {
    id: '3',
    message:'?האם יש לך קורונה',
    trigger: '4'
  },
{
id: '4',
options: [
    { value: 'yes', label: 'כן', trigger: '5' },
    { value: 'no', label: 'לא', trigger: '5' },
  ],
},
{
    id: '5',
    message:'?מה החום גוף הכי גבוהה שהיה לך בשבוע האחרון',
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
    message:'?איזה אוכל אתה אוכל',
    trigger: '8'
  },
{
id: '8',
options: [
    { value: 'all', label: 'הכל', trigger: '9' },
    { value: 'vegan', label: 'טבעוני', trigger: '9' },
    { value: 'veggie', label: 'צמחוני', trigger: '9' },
    { value: 'non-gloten', label: 'ללא גלוטן', trigger: '9' },
  ],
},
{
    id: '9',
    message:'?איזה פעילויות עשית בשבוע האחרון ',
    trigger: '10'
  },
{
id: '10',
options: [
    { value: 'sport', label: 'ספורט', trigger: '11' },
    { value: 'yoga', label: 'יוגה', trigger: '11' },
    { value: 'meditation', label: 'מדיטציה', trigger: '11' },
    { value: 'prayer', label: 'תפילה', trigger: '11' },
  ],
},
{
    id: '11',
    message:'?כמה שעות שינה בממוצע את/ה ישן ביום',
    trigger: '12'
  },
{
id: '12',
options: [
    { value: 'lessThan6', label: 'פחות מ- 6 שעות', trigger: '13' },
    { value: '6to7', label: '6-7', trigger: '13' },
    { value: '7-8', label: '7-8', trigger: '13' },
    { value: 'over8', label: 'מעל 8', trigger: '13' },
  ],
},
{
    id: '13',
    message:'?מה מצב הרוח שלך',
    trigger: '14'
},
{
id: '14',
options: [
    { value: 'verygood', label: 'טוב מאוד', trigger: '15' },
    { value: 'good', label: 'טוב', trigger: '15' },
    { value: 'medium', label: 'בינוני', trigger: '15' },
    { value: 'low', label: 'נמוך', trigger: '15' },
    { value: 'verylow', label: 'נמוך מאוד', trigger: '15' },
  ],
},
{
    id: '15',
    message:'גובה בס"מ',
    trigger: '16'
},
{
    id: '16',
    user: true,
    trigger: '17',
  },
  {
    id: '17',
    message:'משקל בק"ג',
    trigger: '18'
},
  {
    id: '18',
    user: true,
    end: true,
  },
]