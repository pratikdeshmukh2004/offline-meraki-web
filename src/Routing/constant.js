export const PATHS={
    HOME:"/home",
    PATHWAY_COURSE: "/pathway/:pathwayId",
    PATHWAY_COURSE_CONTENT: "/course-content/:pathwayId/:courseId/:exerciseId",
}
export const interpolatePath = (path, paramValues) =>
  path.replace(/:(\w*)/g, (_, param) => paramValues[param]);
