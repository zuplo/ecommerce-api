import { ResponseFactory, ZuploContext, ZuploRequest } from "@zuplo/runtime";
import data from "./users.json";
import { ApiResponses, ApiResponseFactory } from "./utils/api-responses";

export async function getAll(request: ZuploRequest, context: ZuploContext) {
  return ApiResponseFactory.formattedResponse(data);
}

export async function getById(request: ZuploRequest, context: ZuploContext) {
  const result = data.find(({ id }) => id.toString() === request.params.id);
  if (!result) {
    return ResponseFactory.notFound(ApiResponses.USER_NOT_FOUND);
  }
  return ApiResponseFactory.formattedResponse(result);
}
