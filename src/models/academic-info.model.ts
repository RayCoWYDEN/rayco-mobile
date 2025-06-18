import { CourseDTO } from "./course.model";
import { UniversitySaveDTO } from "./universities.model";

export interface AcademicInfoDTO {
  course: CourseDTO;
  university: UniversitySaveDTO;
  period: number | null;
  tuitionFee: number | null;
}
