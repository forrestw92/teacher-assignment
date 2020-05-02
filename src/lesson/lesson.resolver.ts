import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import {LessonService} from "./lesson.service";
import {CreateLessonInput} from "./lesson.input";
import {AssignStudentsToLessonInput} from "./assign-students-to-lesson.input";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonService: LessonService
    ) {}

    @Mutation(returns => LessonType)
    assignStudentsToLesson(
        @Args('assignStudentsToLesson') assignStudentsToLessonInput: AssignStudentsToLessonInput
    ) {
        const { lessonId,studentsIds } = assignStudentsToLessonInput;
        return this.lessonService.assignStudentsToLesson(lessonId,studentsIds)
    }

    @Mutation(returns => LessonType)
    createLesson(
        @Args('creatLessonInput') createLessonInput: CreateLessonInput,
    ) {
        return this.lessonService.createLesson(createLessonInput)
    }

    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string,
    ) {
        return this.lessonService.getLesson(id);
    }

    @Query(returns => [LessonType])
    lessons() {
        return this.lessonService.getLessons()
    }
}
