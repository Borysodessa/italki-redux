export function numberLessonsData(teachersDataBase) {
  return teachersDataBase.map((teacher) => teacher.teacher_info.session_count);
}
