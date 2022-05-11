// /**
//  * @internal
//  */
// export type SystemResponse = {
//   readonly code: string;
//   readonly help_url: string;
//   readonly message: string;
// };

import { ResponseFactory, SystemResponse } from "@zuplo/runtime";

const USER_NOT_FOUND: SystemResponse = {
  code: "USER_NOT_FOUND",
  help_url: "https://zup.fail/EXAMPLE_ERROR",
  message: "The user was not found",
};
const PRODUCT_NOT_FOUND: SystemResponse = {
  code: "USER_NOT_FOUND",
  help_url: "https://zup.fail/EXAMPLE_ERROR",
  message: "The user was not found",
};
const TRANSACTION_NOT_FOUND: SystemResponse = {
  code: "USER_NOT_FOUND",
  help_url: "https://zup.fail/EXAMPLE_ERROR",
  message: "The user was not found",
};

/**
 * @internal
 */
export const ApiResponses = {
  USER_NOT_FOUND,
  PRODUCT_NOT_FOUND,
  TRANSACTION_NOT_FOUND,
};

export class ApiResponseFactory {
  static requiredBodyParameter(name: string): Response {
    return ResponseFactory.badRequest({
      code: "REQUIRED_BODY_PARAMETER",
      help_url: "https://go.zuplo.com?code=REQUIRED_BODY_PARAMETER",
      message: `A value is required for body parameter '${name}'`,
    });
  }
  static requiredQueryParameter(name: string): Response {
    return ResponseFactory.badRequest({
      code: "REQUIRED_QUERY_PARAMETER",
      help_url: "https://go.zuplo.com?code=REQUIRED_QUERY_PARAMETER",
      message: `A value is required for query parameter '${name}'`,
    });
  }
  static formattedResponse(data: unknown): Response {
    return new Response(JSON.stringify(data, undefined, 2), {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    });
  }
}
