import { Controller } from "@nestjs/common";
import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";
import { contract } from "api";

import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @TsRestHandler(contract.auth.login)
  async login() {
    return tsRestHandler(contract.auth.login, async ({ body }) => {
      const { email, password } = body;

      const token = (await this.authService.login(email, password)).session
        .access_token;

      return {
        status: 200,
        body: {
          token,
        },
      };
    });
  }

  @TsRestHandler(contract.auth.register)
  async register() {
    return tsRestHandler(contract.auth.register, async ({ body }) => {
      const { email, password } = body;

      await this.authService.register(email, password);

      return {
        status: 201,
        body: {
          message: "User created successfully",
        },
      };
    });
  }
}
