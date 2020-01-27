export default function create(MondayText, SundayText, projects, week) {
  let text =
    "To: PSG各位\nCc: 籠橋本部長、川本次長\n\nお疲れ様です。PSG鈴木です。\n\n";
  let description = "■業務内容\n";
  let comments = "■所感\n";
  let workedTime = "■勤怠状況\n";

  projects.forEach(value => {
    console.log(value.title);
  });

  projects.forEach(value => {
    // 作業内容
    description =
      description +
      "・" +
      value.title +
      "\n" +
      " - " +
      value.description.replace(/\n/g, "\n - ") +
      "\n\n";
    // 所感
    comments =
      comments +
      "・" +
      value.title +
      "\n" +
      "　" +
      value.comments.replace(/\n/g, "\n　") +
      "\n\n";
  });
  // 勤怠状況
  week.forEach(value => {
    if (value.holiday) {
      workedTime = workedTime + value.date + " 休暇\n";
    } else {
      workedTime =
        workedTime +
        value.date +
        " " +
        value.punchIn +
        "-" +
        value.punchOut +
        "\n";
    }
  });
  // 本文
  text =
    text +
    MondayText +
    " - " +
    SundayText +
    "の週報を送付致します。\n\n" +
    description +
    comments +
    workedTime +
    "\n以上、よろしくお願い致します。";
  return text;
}
