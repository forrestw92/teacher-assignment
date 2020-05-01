import {Field, InputType} from "@nestjs/graphql";
import {IsDateString, IsOptional, IsString, MinLength} from "class-validator";

@InputType()
export class CreateLessonInput {
    @Field()
    @IsString()
    @MinLength(1)
    name: string;

    @Field()
    @IsDateString()
    startDate: string;

    @Field()
    @IsDateString()
    endDate: string;
}
